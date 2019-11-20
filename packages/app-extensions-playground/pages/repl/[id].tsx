import {Layout, Button, Popover, Card, Form, ActionList} from '@shopify/polaris';
import {Renderer} from '@shopify/app-extensions-renderer';
import Components from '@shopify/app-extensions-polaris-components';
import Router, {useRouter} from 'next/router';
import Head from 'next/head';
import {highlight, languages} from 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-lisp';
import React, {useEffect, useState, useReducer, useMemo} from 'react';
import Editor from 'react-simple-code-editor';
import Snippets from '../../actions/repl/lisp-snippets';
import ReplActions from '../../actions/repl/actions';
import reducer from '../../actions/repl/reducer';
import styled from 'styled-components';

export default function Repl() {
  const [replState, dispatch] = useReducer(reducer, {
    pendingCode: '',
    pendingState: '',
    code: '',
    state: '',
    activeState: {},
  });

  const {id} = useRouter().query;
  const snippetId = Number(id) || 0;

  useEffect(() => {
    dispatch(ReplActions.loadSnippet(Snippets[snippetId]));
  }, [snippetId]);

  const dataSource = useMemo(() => {
    return {
      get: (key: string) => replState.activeState[key],
      set: (key: string) => (value: any) => dispatch(ReplActions.setState(key, value)),
    };
  }, [replState.activeState]);

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
      Router.push(`/repl/${index}`);
    },
  }));

  return (
    <>
      <Head>
        <title>REPL</title>
        <link href="/static/css/prism.css" rel="stylesheet" />
      </Head>
      <Layout>
        <Layout.Section>
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
        </Layout.Section>

        <Layout.Section oneThird>
          <Renderer code={replState.code} components={Components} dataSource={dataSource} />
        </Layout.Section>
      </Layout>
    </>
  );
}

let MiniEditorCounter = 0;

interface MiniEditorProps {
  code: string;
  highlightCode: (code: string) => string;
  onChange: (newCode: string) => void;
}

const MiniEditorContainer = styled.div`
  border: 0.1rem solid #c4cdd5;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 rgba(99, 115, 129, 0.05);
  padding: 0.5rem 1.2rem;

  &.MiniEditor--isFocused {
    box-shadow: inset 0 1px 0 0 rgba(99, 115, 129, 0.05), 0 0 0 0.2rem #5c6ac4;
  }
`;

function MiniEditor({code, highlightCode, onChange}: MiniEditorProps) {
  const id = `MiniEditor-${MiniEditorCounter++}`;
  const [isFocused, setIsFocused] = useState(false);
  let className = '';

  if (isFocused) {
    className += 'MiniEditor--isFocused';
  }

  useEffect(() => {
    const textarea = document.getElementById(id);
    if (textarea) {
      textarea.onblur = () => setIsFocused(false);
      textarea.onfocus = () => setIsFocused(true);
    }
  });

  return (
    <MiniEditorContainer className={className}>
      <Editor
        highlight={highlightCode}
        onValueChange={newCode => onChange(newCode)}
        style={{
          fontFamily: 'FMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace',
        }}
        textareaId={id}
        value={code}
      />
    </MiniEditorContainer>
  );
}
