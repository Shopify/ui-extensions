import {List} from 'immutable';
import { ExpressionPropDefinition, LiteralPropDefinition } from "./component-definition";
import {ComponentNode, ExpressionNode, Literal} from "./component-tree";

type ComponentTreePosition = {
  index: number;
}

export default function reducer(state: EditorState, action: EditorActions): EditorState {
  function locateComponent(tree: ComponentNode, component: ComponentNode, pathArray: ComponentTreePosition[] = []): ComponentTreePosition[] {
    const index = tree.children.indexOf(component);
    if(index === -1) {
      for(let i = 0; i < tree.children.size; i ++) {
        const child = tree.children.get(i);
        if(!child) continue;
        const currentBranch = [...pathArray, {index: i}];
        const subBranch = locateComponent(child, component, currentBranch);
        if(subBranch.length > currentBranch.length) {
          return subBranch;
        }
      }
    } else {
      return [...pathArray, {index}];
    }

    return pathArray;
  }

  function replaceComponent(oldComponent: ComponentNode, newComponent: ComponentNode) {
    const pathLocation = locateComponent(state.componentTree, oldComponent);
    let step = 0;
    // @ts-ignore
    const runUpdate = (components) => {
      const currentStep = pathLocation[step];
      if(step + 1 === pathLocation.length) {
        return components.set(currentStep.index, newComponent);
      } else {
        step++;
        const parentChild = components.get(currentStep.index).update('children', runUpdate);
        return components.set(currentStep.index, parentChild);
      }
    };

    if(state.componentTree === oldComponent) {
      return newComponent;
    }

    return state.componentTree.update("children", runUpdate);
  }

  switch (action.type) {
    case "selectComponent":
      return {
        ...state,
        selectedComponent: action.component,
      };
    case "moveComponent":
      return {
        ...state,
        componentTree: state.componentTree.update("children", (components) => {
          const draggedComponent = components.get(action.oldIndex);
          if (!draggedComponent) { return components; }

          return components
            .splice(action.oldIndex, 1)
            .splice(action.newIndex, 0, draggedComponent);
        }),
      };
    case "updateLiteralPropValue":
      const newComponentAfterLiteralPropValueUpdate =
        action.component.setIn(["props", action.propDefinition.identifier], action.value);
      return {
        ...state,
        componentTree: replaceComponent(action.component, newComponentAfterLiteralPropValueUpdate),
        selectedComponent: newComponentAfterLiteralPropValueUpdate,
      };
    case "addComponent":
      return {
        ...state,
        componentTree: addChild(state.componentTree, action.parent, action.component),
      };
    case "updateExpressionArgumentValue":
      const newComponentAfterExpressionArgumentUpdate =
        action.component.setIn(["props", action.propDefinition.identifier, "args", action.index], action.value);
      return {
        ...state,
        componentTree: replaceComponent(action.component, newComponentAfterExpressionArgumentUpdate),
        selectedComponent: newComponentAfterExpressionArgumentUpdate,
      };
    case "changeExpression":
      const newComponentAfterExpressionChange =
        action.component.setIn(["props", action.propDefinition.identifier], action.expression);
      return {
        ...state,
        componentTree: replaceComponent(action.component, newComponentAfterExpressionChange),
        selectedComponent: newComponentAfterExpressionChange,
      };
    default:
      return state;
  }
}

export interface EditorState {
  componentTree: ComponentNode;
  selectedComponent?: ComponentNode;
}

export interface SelectComponent  {
  type: "selectComponent";
  component: ComponentNode;
}

export interface MoveComponent {
  type: "moveComponent";
  oldIndex: number;
  newIndex: number;
}

export interface UpdateLiteralPropValue {
  type: "updateLiteralPropValue";
  component: ComponentNode;
  propDefinition: LiteralPropDefinition;
  value: Literal;
}

export interface UpdateExpressionArgumentValue {
  type: "updateExpressionArgumentValue";
  component: ComponentNode;
  expression: ExpressionNode;
  propDefinition: ExpressionPropDefinition;
  index: number;
  value: Literal;
}
export interface ChangeExpression {
  type: "changeExpression";
  component: ComponentNode;
  expression: ExpressionNode;
  propDefinition: ExpressionPropDefinition;
}

interface AddComponent {
  type: "addComponent";
  component: ComponentNode;
  parent: ComponentNode;
}

export type EditorActions =
  AddComponent
  | ChangeExpression
  | MoveComponent
  | SelectComponent
  | UpdateLiteralPropValue
  | UpdateExpressionArgumentValue;


function addChild(root: ComponentNode, parent: ComponentNode, child: ComponentNode): ComponentNode {
  const path = ["children", ...parent.path.flatMap((index) => [index, "children"])];
  return root.updateIn(path, (children) => updatePathOfChildren(parent.path, children.asMutable().push(child)));
}

function updatePathOfChildren(path: number[], children: List<ComponentNode>): List<ComponentNode> {
  return children.map((child, index) => child
    .merge({
      path: [...path, index],
      children: updatePathOfChildren([...path, index], child.children),
    }),
  );
}
