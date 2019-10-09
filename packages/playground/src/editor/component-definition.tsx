import React from 'react';
import {Button, Textfield, Checkbox, Card} from "../components";

export default class ComponentDefinition {
  constructor(
    public name: string,
    public description: string,
    public componentName: string,
    public propDefinitions: PropDefinition[],
    public example: any,
    public acceptsChildren: boolean = false,
  ) {}
}

export type PropDefinition = (LiteralPropDefinition | ExpressionPropDefinition);

export interface ExpressionPropDefinition {
  identifier: string;
  label: string;
  type: "expression";
  supportedExpressions: ExpressionDefinition[];
}

export interface LiteralPropDefinition {
  identifier: string;
  label: string;
  type: "literal";
}

export interface ExpressionDefinition {
  label: string;
  args: ArgumentDefintion[];
}

interface ArgumentDefintion {
  label: string;
}

const LITERAL = "literal" as "literal";
const EXPRESSION = "expression" as "expression";

export const componentDefinitions = [
  new ComponentDefinition(
    "Text field",
    "Text fields enable the user to input text.",
    "Textfield",
    [
      { label: "Label", identifier: "label", type: LITERAL },
      {
        label: "Value", identifier: "value", type: EXPRESSION, supportedExpressions: [
          { label: "get", args: [{label: "Key"}] },
        ],
      },
      {
        label: "On change", identifier: "onChange", type: EXPRESSION, supportedExpressions: [
          { label: "set", args: [{label: "Key"}] },
        ],
      },
    ],
    <div id="Textfield-ID"><Textfield label="TextField" value="Text" onChange={() => {}}></Textfield></div>
  ),
  new ComponentDefinition(
    "Button",
    "Buttons enable the user to perform an action.",
    "Button",
    [
      { label: "Label", identifier: "label", type: LITERAL },
      {
        label: "On click", identifier: "onClick", type: EXPRESSION, supportedExpressions: [
          { label: "alert", args: [{label: "Message"}] },
          { label: "log", args: [{label: "Message"}] },
        ],
      },
    ],
    <div id="Button-ID"><Button label="Button"></Button></div>
  ),
  new ComponentDefinition(
    "Checkbox",
    "Checkboxes enable the user to indicate a choice",
    "Checkbox",
    [
      { label: "Label", identifier: "label", type: LITERAL },
      {
        label: "On change", identifier: "onChange", type: EXPRESSION, supportedExpressions: [
          { label: "set", args: [{label: "Message"}] },
        ],
      },
      {
        label: "Checked", identifier: "checked", type: EXPRESSION, supportedExpressions: [
          { label: "get", args: [{label: "Message"}] },
        ],
      },
    ],
    <div id="Checkbox-ID"><Checkbox  checked label="Checkbox" onChange={() => {}}></Checkbox></div>
  ),
  new ComponentDefinition(
    "Card",
    "Cards allow to group multiple UI elements",
    "Card",
    [
      { label: "Label", identifier: "label", type: LITERAL },
    ],
    <div id="Card-ID"><Card label="Card">Content</Card></div>,
    true,
  ),
];
