import {ActionList, Button, Card, Form, Popover} from '@shopify/polaris';
import {Renderer} from '@shopify/app-extensions-renderer';
import Components from '@shopify/app-extensions-polaris-components';
import {navigate, useTitle} from 'hookrouter';
import {highlight, languages} from 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-lisp';
import React, {useEffect, useState, useReducer} from 'react';
import ReactCSS from 'react-cssobj';
import {Col, Grid, Row} from 'react-flexbox-grid';
import Editor from 'react-simple-code-editor';
import PrismTheme from '../lib/prism-style';
import Snippets, {Snippet} from './lisp-snippets';

const {mapClass} = ReactCSS(PrismTheme, {local: false});
const {mapClass: mapClassEditor} = ReactCSS({
  '.MiniEditor': {
    border: '.1rem solid #c4cdd5',
    borderRadius: '3px',
    boxShadow: 'inset 0 1px 0 0 rgba(99,115,129,.05)',
    padding: '0.5rem 1.2rem',
  },
  '.MiniEditor--isFocused': {
    boxShadow: 'inset 0 1px 0 0 rgba(99,115,129,.05), 0 0 0 0.2rem #5c6ac4',
  },
});

interface ReplProps {
  snippetId: number;
}

type ReplAction<T, P = {}> = {type: T} & P;

interface ReplState {
  pendingCode: string;
  pendingState: string;
  code: string;
  state: {[key: string]: any};
}

type ReplActions =
  | ReplAction<'UPDATE_PENDING_STATE', {state: string}>
  | ReplAction<'UPDATE_PENDING_CODE', {code: string}>
  | ReplAction<'LOAD_SNIPPET', {state: string; code: string}>
  | ReplAction<'EVALUATE'>;

const ReplActions: {[name: string]: (...args: any) => ReplActions} = {
  updatePendingCode: code => ({type: 'UPDATE_PENDING_CODE', code}),
  updatePendingState: state => ({type: 'UPDATE_PENDING_STATE', state}),
  evaluate: () => ({type: 'EVALUATE'}),
  loadSnippet: ({code, state}: Snippet) => ({type: 'LOAD_SNIPPET', code, state}),
};

function reducer(state: ReplState, action: ReplActions): ReplState {
  switch (action.type) {
    case 'EVALUATE':
      const newState = {
        ...state,
        code: state.pendingCode,
        state: JSON.parse(state.pendingState || '{}'),
      };
      console.log('Code', newState.code);
      console.log('State', newState.state);
      return newState;
    case 'LOAD_SNIPPET':
      if (state.pendingCode === action.code && state.pendingState === action.state) return state;

      return reducer(
        {
          ...state,
          pendingState: action.state,
          pendingCode: action.code,
        },
        {type: 'EVALUATE'},
      );
    case 'UPDATE_PENDING_CODE':
      return {...state, pendingCode: action.code};
    case 'UPDATE_PENDING_STATE':
      return {...state, pendingState: action.state};
  }
}

export default function Repl({snippetId}: ReplProps) {
  useTitle('REPL');

  const [replState, dispatch] = useReducer(reducer, {
    code: '',
    state: {},
    pendingCode: '',
    pendingState: '',
  });

  useEffect(() => {
    dispatch(ReplActions.loadSnippet(Snippets[snippetId]));
  }, [snippetId]);

  const [popoverActive, setPopoverActive] = useState(false);
  const togglePopoverActive = () => setPopoverActive(!popoverActive);

  const formActions = [
    {
      content: 'Evaluate',
      onAction() {
        dispatch(ReplActions.evaluate());
      },
    },
  ];

  const actionListItems = Snippets.map((value, index) => ({
    content: value.label,
    onAction() {
      togglePopoverActive();
      navigate(`/repl/${index}`);
    },
  }));

  return mapClass(
    <Grid style={{padding: 0}} fluid>
      <Row>
        <Col first="md" md={8}>
          <Card>
            <Card.Header actions={formActions} title="REPL">
              <Popover
                active={popoverActive}
                activator={
                  <Button disclosure onClick={togglePopoverActive} plain>
                    Snippets
                  </Button>
                }
                onClose={togglePopoverActive}
              >
                <ActionList items={actionListItems} />
              </Popover>
            </Card.Header>
            <Form onSubmit={() => {}}>
              <Card.Section title="Code">
                <MiniEditor
                  code={replState.pendingCode}
                  highlightCode={newCode => highlight(newCode, languages.lisp, 'lisp')}
                  onChange={code => dispatch(ReplActions.updatePendingCode(code))}
                />
              </Card.Section>
              <Card.Section title="State">
                <MiniEditor
                  code={replState.pendingState}
                  highlightCode={newState => highlight(newState, languages.json, 'json')}
                  onChange={state => dispatch(ReplActions.updatePendingState(state))}
                />
              </Card.Section>
            </Form>
          </Card>
        </Col>

        <Col last="md" md={4}>
          <Renderer code={replState.code} components={Components} state={replState.state} />
        </Col>
      </Row>
    </Grid>,
  );
}

let MiniEditorCounter = 0;

interface MiniEditorProps {
  code: string;
  highlightCode: (code: string) => string;
  onChange: (newCode: string) => void;
}

function MiniEditor({code, highlightCode, onChange}: MiniEditorProps) {
  const id = `MiniEditor-${MiniEditorCounter++}`;
  const [isFocused, setIsFocused] = useState(false);
  let className = 'MiniEditor';

  if (isFocused) {
    className += ' MiniEditor--isFocused';
  }

  useEffect(() => {
    const textarea = document.getElementById(id);

    if (textarea) {
      textarea.onblur = () => setIsFocused(false);
      textarea.onfocus = () => setIsFocused(true);
    }
  });

  return mapClassEditor(
    <div className={className}>
      <Editor
        highlight={newCode => highlightCode(newCode)}
        onValueChange={newCode => onChange(newCode)}
        style={{
          fontFamily: 'FMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace',
        }}
        textareaId={id}
        value={code}
      />
    </div>,
  );
}
