import React from "react";
import * as Components from "../../components";
import { ComponentNode, ComponentTreeVisitor, ExpressionNode } from "../component-tree";
import ComponentDropZone from "./component-drop-zone";
import ComponentWrapper from "./component-wrapper";
import "./stage.scss";

interface Props {
  componentTree: ComponentNode;
  isDragging: boolean;
  onSelect: (node: ComponentNode) => void;
  onComponentAdded: (component: ComponentNode, node: string) => void;
  onComponentMoved: (oldIndex: number, newIndex: number) => void;
  selectedComponent?: ComponentNode;
}

export default class Stage extends React.Component<Props> implements ComponentTreeVisitor {
  private stack: any[] = [];

  public render() {
    this.stack.push([]);
    this.visitComponentNode(this.props.componentTree);
    return this.stack.pop();
  }

  public visitComponentNode(node: ComponentNode): void {
    const { name, id } = node;
    if (isValidComponentName(name)) {
      const Component = Components[name];
      const selected = this.props.selectedComponent === node;
      this.stack[this.stack.length - 1].push(
        <ComponentWrapper selected={selected} key={id} id={id} onClick={() => this.props.onSelect(node)}>
          <ComponentDropZone
            component={node}
            onComponentAdded={this.props.onComponentAdded}
            onComponentMoved={this.props.onComponentMoved}
          >
            <Component {...this.propsForComponent(node)}>
              {this.renderChildren(node)}
            </Component>
          </ComponentDropZone>
        </ComponentWrapper>,
      );
    }
  }

  public visitExpressionNode(node: ExpressionNode): void {
    throw new Error("Method not implemented.");
  }

  private renderChildren(node: ComponentNode) {
    this.stack.push([]);
    node.children.forEach((c) => c.accept(this));
    return this.stack.pop();
  }

  private propsForComponent(node: ComponentNode) {
    const { name, props } = node;
    if (!isValidComponentName(name)) {
      return {};
    }

    const propKeys = Array.from(props.keys());
    return propKeys.reduce((propsObject:any, propKey) => {
      propsObject[propKey] = String(props.get(propKey));
      return propsObject;
    }, {});
  }
}

function isValidComponentName(name: string): name is keyof typeof Components {
  return Object.keys(Components).includes(name);
}
