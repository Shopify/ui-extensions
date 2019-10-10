import { FormLayout, Select, TextField } from "@shopify/polaris";
import { List } from "immutable";
import React from "react";
import { Callback } from ".";
import { componentDefinitions, ExpressionPropDefinition, LiteralPropDefinition } from "../component-definition";
import {
  ComponentNode,
  ComponentTreeVisitor,
  ExpressionNode,
  isExpression,
  Literal,
  isLiteral,
} from "../component-tree";
import { EditorActions } from "../reducer";
import ExpressionPropListItem from "./expression-prop-list-item";

export default class PropListBuilder implements ComponentTreeVisitor {
  public static build(component: ComponentNode, dispatch: Callback<EditorActions>) {
    const builder = new PropListBuilder(dispatch);
    builder.visitComponentNode(component);
    return <FormLayout>{builder.result}</FormLayout>;
  }

  public result: any[] = [];

  constructor(public dispatch: Callback<EditorActions>) {}

  public visitComponentNode(component: ComponentNode): void {
    const componentDefinition = componentDefinitions.find((c) => c.componentName === component.name);
    if (!componentDefinition) { return; }

    componentDefinition.propDefinitions.map((propDefintion) => {
      switch (propDefintion.type) {
        case "literal":
          this.result.push(<TextField
            label={propDefintion.label}
            value={this.getLiteralPropValue(component, propDefintion)}
            onChange={this.setLiteralPropValue(component, propDefintion)}
          />);
          break;
        case "expression":
          // Evaluate expression
          const prop = component.props.get(propDefintion.identifier);

          let evaluatedExpression: { identifier: string, args: Literal[] } | undefined;
          if (prop && isExpression(prop)) {
            prop.accept(this);
            evaluatedExpression = this.result.pop();
          }

          this.result.push(<ExpressionPropListItem
            propDefinition={propDefintion}
            evaluatedExpression={evaluatedExpression}
            onArgumentValueChange={this.setExpressionArgumentValue(component, prop as ExpressionNode, propDefintion)}
            onExpressionChange={this.setNewExpression(component, propDefintion)}
          />);

          break;
      }
    });
  }

  public visitExpressionNode(expression: ExpressionNode): void {
    const { identifier, args } = expression;

    if (!isLiterals(args)) {
      throw new Error("Sub-expressions are not supported yet.");
    }

    this.result.push({
      identifier,
      args: args.toJS(),
    });
  }

  private getLiteralPropValue(component: ComponentNode, propDefinition: LiteralPropDefinition) {
    const value = component.props.get(propDefinition.identifier) || '';

    if (value !== undefined && isLiteral(value)) {
      return String(value);
    } else {
      throw new Error("Unexpected expression");
    }
  }

  private setLiteralPropValue =
    (component: ComponentNode, propDefinition: LiteralPropDefinition) =>
    (value: Literal) => {
      this.dispatch({
        type: "updateLiteralPropValue",
        propDefinition,
        value,
        component,
      });
    }

  private setExpressionArgumentValue =
    (component: ComponentNode, expression: ExpressionNode, propDefinition: ExpressionPropDefinition) =>
    (index: number, value: Literal) => {
      this.dispatch({
        type: "updateExpressionArgumentValue",
        component,
        expression,
        propDefinition,
        index,
        value,
      });
    }

  private setNewExpression =
    (component: ComponentNode, propDefinition: ExpressionPropDefinition) =>
    (expression?: string) => {
      if (!expression) { return; }

      this.dispatch({
        type: "changeExpression",
        component,
        propDefinition,
        expression: new ExpressionNode(expression),
      });
    }
}

function isLiterals(expressions: List<Literal | ExpressionNode>): expressions is List<Literal> {
  return expressions.every((expression) => isLiteral(expression));
}
