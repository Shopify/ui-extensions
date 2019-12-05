import {Layout, Button, Popover, Card, Form, ActionList} from '@shopify/polaris';
import {RendererWithJSONParser as Renderer} from '@shopify/app-extensions-renderer';
import Components from '@shopify/app-extensions-polaris-components';
import Router, {useRouter} from 'next/router';
import Head from 'next/head';
import {highlight, languages} from 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-lisp';
import React, {useEffect, useState, useReducer, useMemo} from 'react';
import Snippets from '../../actions/repl/snippets';
import ReplActions from '../../actions/repl/actions';
import reducer from '../../actions/repl/reducer';
import MiniEditor from '../../components/MiniEditor';

export default function JSONRepl() {
  const [replState, dispatch] = useReducer(reducer, {
    pendingCode: '',
    pendingState: '',
    code: '{}',
    state: '',
    activeState: {},
  });

  const {id} = useRouter().query;
  const snippetId = Number(id) || 0;

  useEffect(() => {
    dispatch(ReplActions.loadJSONSnippet(Snippets[snippetId]));
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
      Router.push(`/json-repl/${index}`);
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
                  id="json-code"
                  code={replState.pendingCode}
                  highlightCode={newCode => highlight(newCode, languages.json, 'json')}
                  onChange={code => dispatch(ReplActions.updatePendingCode(code))}
                />
              </Card.Section>
              <Card.Section title="State">
                <MiniEditor
                  id="json-state"
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
