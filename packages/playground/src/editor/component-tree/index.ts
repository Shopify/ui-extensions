import { isNumber, isString } from "util";
import ComponentNode, { ComponentNodeProps } from "./component-node";
import ExpressionNode from "./expression-node";

export interface ComponentTreeVisitor {
  visitComponentNode(node: ComponentNode): void;
  visitExpressionNode(node: ExpressionNode): void;
}

export interface ComponentTreeNode {
  accept(visitor: ComponentTreeVisitor): void;
}

export type Literal = number | string;

export function isExpression(value: ExpressionNode | Literal): value is ExpressionNode {
  return value instanceof ExpressionNode;
}

export function isLiteral(value: ExpressionNode | Literal): value is Literal {
  const type = typeof value;
  return type === 'string' || type === 'number';
}

export {
  ComponentNode,
  ExpressionNode,
};

export type ComponentNodeProps = ComponentNodeProps;
