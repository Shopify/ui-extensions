import { ComponentNode, ExpressionNode } from "./component-tree";
import reducer, { EditorState } from "./reducer";

it("supports updating the argument of an expression node", () => {
  const expression = new ExpressionNode("alert", "Hello!");
  const componentTree = new ComponentNode("Button", {
    label: "Submit",
    onClick: expression,
  });
  const initialState: EditorState = { componentTree };

  const newState = reducer(initialState, {
    type: "updateExpressionArgumentValue",
    component: componentTree,
    expression,
    index: 0,
    value: "Bye!",
    propDefinition: {
      identifier: "onClick",
      label: "On click",
      supportedExpressions: [],
      type: "expression",
    },
  });

  expect(newState.componentTree).not.toEqual(componentTree);
  expect(newState.componentTree.children.get(0)).not.toEqual(componentTree);

  // @ts-ignore
  expect((newState
    .componentTree
    .children.get(0)
    .props
    .get("onClick") as ExpressionNode
  ).args.get(0)).toEqual("Bye!");
});

it("supports changing the expression node associated with a prop", () => {
  const expression = new ExpressionNode("alert", "Hello!");
  const componentTree = new ComponentNode("Button", {
    label: "Submit",
    onClick: expression,
  });
  const initialState: EditorState = { componentTree };

  const newExpression = new ExpressionNode("log", "Goodbye!");
  const newState = reducer(initialState, {
    type: "changeExpression",
    component: componentTree,
    expression: newExpression,
    propDefinition: {
      identifier: "onClick",
      label: "On click",
      supportedExpressions: [],
      type: "expression",
    },
  });

  expect(newState.componentTree).not.toEqual(componentTree);
  // @ts-ignore
  expect(newState.componentTree.components.get(0)).not.toEqual(componentTree);

  expect((newState
    .componentTree
    // @ts-ignore
    .components.get(0)
    .props
    .get("onClick") as ExpressionNode
  ).identifier).toEqual("log");

  expect((newState
    .componentTree
    // @ts-ignore
    .components.get(0)
    .props
    .get("onClick") as ExpressionNode
  ).args.get(0)).toEqual("Goodbye!");
});
