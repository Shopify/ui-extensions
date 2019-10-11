import {ActionList, Button, Card, Form, Popover} from "@shopify/polaris";
import {Renderer, useDataSource, Components} from "@shopify/scarlet-renderer";
import { navigate, useTitle } from "hookrouter";
import {highlight, languages} from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/components/prism-lisp";
import React, {useEffect, useState} from "react";
import ReactCSS from "react-cssobj";
import {Col, Grid, Row} from "react-flexbox-grid";
import Editor from "react-simple-code-editor";
import PrismTheme from "../lib/prism-style";
import Snippets from "./lisp-snippets";

const {mapClass} = ReactCSS(PrismTheme, {local: false});
const {mapClass: mapClassEditor} = ReactCSS({
  ".MiniEditor": {
    border: ".1rem solid #c4cdd5",
    borderRadius: "3px",
    boxShadow: "inset 0 1px 0 0 rgba(99,115,129,.05)",
    padding: "0.5rem 1.2rem",
  },
  ".MiniEditor--isFocused": {
    boxShadow: "inset 0 1px 0 0 rgba(99,115,129,.05), 0 0 0 0.2rem #5c6ac4",
  },
});

interface ReplProps {
  snippetId: number;
}

interface SetCodeAndStateParam {
  code: string;
  state: string;
}

export default function Repl({snippetId}: ReplProps) {
  const [{code, state}, setCodeAndState] = useState<SetCodeAndStateParam>(Snippets[snippetId]);
  const [{code: evaluatedCode, state: evaluatedState}, setEvaluatedCodeAndState] =
    useState<SetCodeAndStateParam>(Snippets[snippetId]);
  const [popoverActive, setPopoverActive] = useState(false);
  const dataSource = useDataSource([]);
  const togglePopoverActive = () => setPopoverActive(!popoverActive);

  useTitle("REPL");

  useEffect(() => {
    setCodeAndState(Snippets[snippetId]);
    setEvaluatedCodeAndState(Snippets[snippetId]);
  }, [snippetId]);

  useEffect(() => {
    let stateJson;

    if (evaluatedState) {
      try {
        stateJson = JSON.parse(evaluatedState);
      } catch (_) {
        stateJson = [];
      }
    }

    dataSource.onChange(stateJson);
  }, [evaluatedState]);

  const formActions = [
    {
      content: "Evaluate",
      onAction() {
        setCodeAndState({code, state});
        setEvaluatedCodeAndState({code, state});
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
            <Form
              onSubmit={() => {} }
            >
              <Card.Section title="Code">
                <MiniEditor
                  code={code}
                  highlightCode={(newCode) =>
                    highlight(newCode, languages.lisp, "lisp")
                  }
                  onChange={(newCode) =>
                    setCodeAndState({code: newCode, state})
                  }
                />
              </Card.Section>
              <Card.Section title="State">
                <MiniEditor
                  code={state}
                  highlightCode={(newState) =>
                    highlight(newState, languages.json, "json")
                  }
                  onChange={(newState) =>
                    setCodeAndState({code, state: newState})
                  }
                />
              </Card.Section>
            </Form>
          </Card>
        </Col>

        <Col last="md" md={4}>
          <Renderer
            onWorkerAction={() => {}}
            code={evaluatedCode}
            components={Components}
            dataSource={dataSource}
          />
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
  let className = "MiniEditor";

  if (isFocused) {
    className += " MiniEditor--isFocused";
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
        highlight={(newCode) => highlightCode(newCode)}
        onValueChange={(newCode) => onChange(newCode)}
        style={{
          fontFamily:
            "FMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace",
        }}
        textareaId={id}
        value={code}
      />
    </div>,
  );
}
