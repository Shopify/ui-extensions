import { FormLayout, Select, TextField } from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import { ExpressionDefinition, ExpressionPropDefinition, PropDefinition } from "../component-definition";
import { Literal } from "../component-tree";

interface ExpressionPropListItemProps {
  propDefinition: ExpressionPropDefinition;
  evaluatedExpression?: { identifier: string, args: Literal[] };
  onArgumentValueChange: (index: number, value: Literal) => void;
  onExpressionChange: (expression?: string) => void;
}

export default function ExpressionPropListItem({
  propDefinition,
  evaluatedExpression,
  onArgumentValueChange,
  onExpressionChange,
}: ExpressionPropListItemProps) {
  const options = propDefinition.supportedExpressions.map(
    (expression) => ({label: expression.label, value: expression.label }),
  );

  const [action, setAction] = useState(evaluatedExpression && evaluatedExpression.identifier);
  const selectedExpression = propDefinition.supportedExpressions.find(({ label }) => label === action);
  useEffect(() => onExpressionChange(action), [action]);

  function getArgValue(idx: number): string {
    const result = evaluatedExpression &&
      evaluatedExpression.identifier === action &&
      evaluatedExpression.args[idx];

    return result ? String(result) : "";
  }

  return <FormLayout>
    <FormLayout.Group title={propDefinition.label}>
      <Select label="Action" options={options} value={action} onChange={setAction} />
      {selectedExpression && selectedExpression.args.map(
        (arg, idx) => <TextField
          label={arg.label}
          value={getArgValue(idx)}
          onChange={(value) => onArgumentValueChange(idx, value)}
        />)
      }
    </FormLayout.Group>
  </FormLayout>;
}
