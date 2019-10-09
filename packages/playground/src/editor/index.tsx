import { Card } from "@shopify/polaris";
import { useTitle } from "hookrouter";
import React, { useReducer, useState } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";

import { componentDefinitions } from "./component-definition";
import ComponentList from "./component-list";
import { ComponentNode, ExpressionNode } from "./component-tree";
import PropList from "./prop-list";
import reducer from "./reducer";
import Stage from "./stage";
import TranspilerPreview from "./transpiler-preview";

export default function Editor() {
  useTitle("Editor");

  const [isDragging, setIsDragging] = useState(false);
  const [{componentTree, selectedComponent}, dispatch] = useReducer(reducer, {
    componentTree: new ComponentNode('Card'),
  });

  // Get position of drop
  const onComponentAdded = (parent: ComponentNode, componentName: string) => {
    if (!componentName || componentName === "") { return; }
    const component = new ComponentNode(componentName);
    dispatch({type: "addComponent", component, parent});
  };

  const onComponentMoved = (oldIndex: number, newIndex: number) => {
    dispatch({type: "moveComponent", oldIndex, newIndex});
  };

  return (
    <Grid style={{padding: 0}} fluid>
      <Row>
        <Col first="md" md={3}>
          <Card title="Available Components">
            <ComponentList componentDefinitions={componentDefinitions} setIsDragging={setIsDragging} />
          </Card>
        </Col>

        <Col last="md" md={9}>
          <Card>
            <Card.Section>
              <Grid style={{padding: 0}} fluid>
                <Row>
                  <Col first="md" md={8}>
                    <Stage
                      componentTree={componentTree}
                      isDragging={isDragging}
                      selectedComponent={selectedComponent}
                      onSelect={(component) => dispatch({type: "selectComponent", component})}
                      onComponentAdded={onComponentAdded}
                      onComponentMoved={onComponentMoved}
                    />
                  </Col>
                  <Col last="md" md={4}>
                    <Card title="Settings">
                      <Card.Section>
                        <PropList
                          componentNode={selectedComponent}
                          dispatch={dispatch}
                        />
                      </Card.Section>
                    </Card>
                  </Col>
                </Row>
              </Grid>
            </Card.Section>

            <Card.Section subdued title="Generated output">
              <TranspilerPreview componentTree={componentTree} />
            </Card.Section>
          </Card>
        </Col>

      </Row>
    </Grid>
  );
}

export interface Style {
  [key: string]: string | number;
}
