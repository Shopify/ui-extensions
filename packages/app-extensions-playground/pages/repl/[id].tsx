import {Layout, Button, Popover, Card, Form, ActionList} from '@shopify/polaris';
import {RendererWithJSONParser, RendererWithLispParser} from '@shopify/app-extensions-renderer';
import Components from '@shopify/app-extensions-polaris-components';
import Router, {useRouter} from 'next/router';
import Head from 'next/head';
import {highlight, languages} from 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-lisp';
import React, {useEffect, useState, useReducer, useMemo} from 'react';
import Snippets from '../../actions/repl/snippets';
import ReplActions, { SupportedFormat, SupportedFormats } from '../../actions/repl/actions';
import reducer from '../../actions/repl/reducer';
import MiniEditor from '../../components/MiniEditor';

export default function Repl() {
  const [replState, dispatch] = useReducer(reducer, {
    pendingCode: '',
    pendingState: '',
    code: '',
    state: '',
    activeState: {},
    displayFormat: 'lisp',
    evaluatedFormat: 'lisp',
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

  const formActions = [
    {
      content: 'Evaluate',
      onAction() {
        dispatch(ReplActions.evaluate());
      },
    }
  ];

  const [snippetPopoverActive, setSnippetPopoverActive] = useState(false);
  const toggleSnippetPopover = () => setSnippetPopoverActive(!snippetPopoverActive);
  const snippets = Snippets.map((value, index) => ({
    content: value.label,
    onAction() {
      toggleSnippetPopover();
      Router.push(`/repl/${index}`);
    },
  }));

  const [formatPopoverActive, setFormatPopoverActive] = useState(false);
  const toggleFormatPopover = () => setFormatPopoverActive(!formatPopoverActive);
  const supportedFormats = SupportedFormats.map((value: SupportedFormat) => ({
    content: value.toUpperCase(),
    onAction() {
      setFormatPopoverActive(false);
      dispatch(ReplActions.setFormat(value));
    },
  }));

  const Renderer = replState.evaluatedFormat === 'json' ? RendererWithJSONParser : RendererWithLispParser;

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
                active={snippetPopoverActive}
                activator={
                  <Button disclosure onClick={toggleSnippetPopover} plain>
                    Snippets
                  </Button>
                }
                onClose={toggleSnippetPopover}
              >
                <ActionList items={snippets} />
              </Popover>
              <Popover
                active={formatPopoverActive}
                activator={
                  <Button disclosure onClick={toggleFormatPopover} plain>
                    Format
                  </Button>
                }
                onClose={toggleFormatPopover}
              >
                <ActionList items={supportedFormats} />
              </Popover>
            </Card.Header>
            <Form onSubmit={() => {}}>
              <Card.Section title="Code">
                <MiniEditor
                  id="lisp-code"
                  code={replState.pendingCode}
                  highlightCode={newCode => highlight(newCode, languages[replState.displayFormat], replState.displayFormat)}
                  onChange={code => dispatch(ReplActions.updatePendingCode(code))}
                />
              </Card.Section>
              <Card.Section title="State">
                <MiniEditor
                  id="lisp-state"
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
