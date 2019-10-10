import { List, Record } from "immutable";
import { ComponentTreeNode, ComponentTreeVisitor, Literal } from ".";

interface ExpressionNodeFields {
  identifier: string;
  args: List<ExpressionNode | Literal>;
}

const ExpressionNodeRecord = Record<ExpressionNodeFields>({
  identifier: "",
  args: List(),
});

export default class ExpressionNode extends ExpressionNodeRecord implements ComponentTreeNode {
  constructor(identifier: string, ...args: Array<ExpressionNode | Literal>) {
    super({
      identifier,
      args: List(args),
    });
  }

  public accept(visitor: ComponentTreeVisitor): void {
    visitor.visitExpressionNode(this);
  }

  public hasArgs() {
    return this.args.size > 0;
  }
}
