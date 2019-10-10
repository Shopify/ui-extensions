import { List, Map, Record } from "immutable";
import { ComponentTreeNode, ComponentTreeVisitor, ExpressionNode, Literal } from ".";

export interface ComponentNodeProps {
  [key: string]: ExpressionNode | Literal;
}

interface ComponentNodeFields {
  readonly id: string;
  name: string;
  props: Map<string, ExpressionNode | Literal>;
  children: List<ComponentNode>;
  path: number[];
}

const ComponentNodeRecord = Record<ComponentNodeFields>({
  id: "",
  name: "",
  props: Map(),
  children: List(),
  path: [],
});

export default class ComponentNode extends ComponentNodeRecord implements ComponentTreeNode {
  constructor(name: string, props: ComponentNodeProps = {}, children: ComponentNode[] = []) {
    super({
      id: generateUniqueId(),
      name,
      children: List(children),
      props: Map(props),
    });
  }

  public accept(visitor: ComponentTreeVisitor) {
    visitor.visitComponentNode(this);
  }

  public hasProps() {
    return this.props.size > 0;
  }

  public hasChildren() {
    return this.children.size > 0;
  }

  public hasProp(name: string) {
    return !!this.props.get(name);
  }
}

function generateUniqueId(length = 4) {
  return (Date.now() % Math.floor((Math.random() * 36 ** length))).toString(36).padStart(length, "0");
}
