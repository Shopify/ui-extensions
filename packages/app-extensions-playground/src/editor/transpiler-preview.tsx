import React from "react";
// @ts-ignore
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import lispSyntax from "react-syntax-highlighter/dist/esm/languages/prism/lisp";
import { isNumber, isString } from "util";
import PrismTheme from "../lib/prism-style";
import {
  ComponentNode,
  ComponentTreeVisitor,
  ExpressionNode,
  Literal,
} from "./component-tree";

interface TranspilerPreviewProps {
  componentTree: ComponentNode;
}

SyntaxHighlighter.registerLanguage("lisp", lispSyntax);

/**
 * Map Tree branches to our component types
 */
enum BranchType {
  Component = 1,
  Expression,
  Props,
  Any,
}

/**
 * General purpose nested tree structure
 */
interface Tree<T extends any> extends Array<T | Tree<T>> {
  type: BranchType;
  parent?: Tree<T>;
  isFirst(): boolean;
  isLast(): boolean;
  isOnly(): boolean;
}

/**
 * Nested tree component structure
 */
type ComponentTree = Tree<string | number | Literal>;

/**
 * Buffer for building code output
 *
 * @remarks
 *
 * Supports cursor tracking, indent/dedent stacks, auto indent-padding
 */
class Buffer {
  private indents: number[] = [];
  private storage: string = "";
  private cursorColumn: number = 0;
  private cursorRow: number = 0;

  get cursor(): [number, number] {
    return [this.cursorRow, this.cursorColumn];
  }

  public dedent() {
    this.indents = this.indents.slice(0, -1);
  }

  public indent(amount: number) {
    this.indents.push(amount);
  }

  get indentLevel() {
    if (this.indents.length) {
      return this.indents[this.indents.length - 1];
    }

    return 0;
  }

  public push(value: string) {
    value = value.replace(/\n/g, `\n${" ".repeat(this.indentLevel)}`);

    const index = value.lastIndexOf("\n");

    if (index === -1) {
      this.cursorColumn += value.length;
    } else {
      this.cursorColumn = value.length - index - 1;
    }

    const newlines = value.match(/\n/g);

    if (newlines) {
      this.cursorRow += newlines.length;
    }

    this.storage = this.storage.concat(value);
  }

  public toString() {
    return this.storage;
  }
}

/**
 * Tree constructor for our various component types
 */
function tree<T>(
  type: BranchType,
  parent?: Tree<T>,
): Tree<T> {
  const branch: T[] = [];

  Object.defineProperties(branch, {
    isFirst: {
      value() {
        if (!parent) {
          return true;
        }

        return (parent.indexOf(branch as Tree<T>) === 0);
      },
    },
    isLast: {
      value() {
        if (!parent) {
          return true;
        }

        return (parent.indexOf(branch as Tree<T>) === (parent.length - 1));
      },
    },
    isOnly: {
      value() {
        if (!parent) {
          return true;
        }

        return parent.length === 1;
      },
    },
    type: {
      value: type,
    },
  });

  if (parent) {
    Object.defineProperty(branch, "parent", {
      value: parent,
      writable: false,
    });
  }

  return branch as Tree<T>;
}

/**
 * Tree predicate
 */
function isTree<T>(item: any): item is Tree<T> {
  if (item && item.type && BranchType[item.type]) {
    return true;
  }

  return false;
}

/**
 * Build a simplified and complete AST for traversal
 */
function visitor(list: ComponentTree): ComponentTreeVisitor {
  return {
    visitComponentNode(node: ComponentNode) {
      list.push(node.name);

      if(node.hasChildren()) {
        node.children.forEach((component) => {
          const child = tree(BranchType.Component, list);
          list.push(child);
          component.accept(visitor(child));
        });
      }

      if (node.hasProps()) {
        const children = tree(BranchType.Props, list);

        for (const [key, value] of node.props.entries()) {
          const child = tree(BranchType.Any, children);
          child.push(toLiteral(key));

          if (value instanceof ExpressionNode) {
            visitor(child).visitExpressionNode(value);
          } else {
            child.push(toLiteral(value));
          }

          children.push(child);
        }

        list.push(children);
      }
    },

    visitExpressionNode(node: ExpressionNode) {
      const children: ComponentTree = tree(BranchType.Expression, list);

      children.push(node.identifier);

      if (node.hasArgs()) {
        for (const child of node.args.toArray()) {
          if (child instanceof ExpressionNode) {
            const grandChildren: ComponentTree = tree(BranchType.Expression, children);

            visitor(grandChildren).visitExpressionNode(child);
            children.push(grandChildren);
          } else {
            children.push(toLiteral(child));
          }
        }
      }

      list.push(children);
    },
  };
}

/**
 * Code representation of a literal value
 */
function toLiteral(node: ExpressionNode | Literal): string {
  if (isNumber(node)) {
    return String(node);
  } else if (isString(node)) {
    return `"${node}"`;
  } else {
    throw new Error(`Unknown literal: ${node}`);
  }
}

/**
 * Build human readable source code from a Tree
 *
 * @remarks
 *
 * Currently separating components as well as indenting and aligning component
 * props. These heuristics can be tweaked in the future to fit our stylistic
 * preferences.
 */
function print(buffer: Buffer, componentTree: ComponentTree, visitor: ComponentTreeVisitor) {
  // Open list
  if (componentTree.type !== BranchType.Any) {
    buffer.push("(");
  }

  // Push indent stack
  if (componentTree.type === BranchType.Props) {
    buffer.push("# ");
    const [, column] = buffer.cursor;
    buffer.indent(column);
  }
  if (componentTree.type === BranchType.Component) {
    buffer.indent(1);
  }

  // Indent prop pairs
  if (componentTree.parent && componentTree.parent.type === BranchType.Props) {
    if (!componentTree.isFirst()) {
      buffer.push("\n");
    }
  }

  const lastIndex = componentTree.length - 1;

  // Print list items
  for (const [index, node] of componentTree.entries()) {
    const isLast = index === lastIndex;

    // Print subtree
    if (isTree(node)) {
      print(buffer, node, visitor);
      continue;
    }

    // Pad prop keys
    if (componentTree.parent && componentTree.parent.type === BranchType.Props) {
      let maxLength = 0;

      for (const propNode of componentTree.parent) {
        if (isTree(propNode)) {
          const key = propNode[0];
          if (typeof key === "string") {
            maxLength = Math.max(maxLength, key.length);
          }
        }
      }

      buffer.push(String(node).padEnd(maxLength, " "));
    } else {
      buffer.push(String(node));
    }

    if (!isLast) {
      buffer.push(" ");
    }
  }

  // Close list
  if (componentTree.type !== BranchType.Any) {
    buffer.push(")");

    if (
      componentTree.parent &&
      (componentTree.parent.type === BranchType.Component) &&
      !componentTree.isLast()
    ) {
      buffer.push("\n\n");
    }
  }

  // Pop indent stack
  if (
    (componentTree.type === BranchType.Component) ||
    (componentTree.type === BranchType.Props)
  ) {
    buffer.dedent();
  }
}

export default function TranspilerPreview({componentTree}: TranspilerPreviewProps) {
  const ast: ComponentTree = tree(BranchType.Component);
  const treeVisitor = visitor(ast)
  treeVisitor.visitComponentNode(componentTree);

  const buffer = new Buffer();
  print(buffer, ast, treeVisitor);

  return (
    <SyntaxHighlighter customStyle={{margin: "none", padding: "none"}} language="lisp" style={PrismTheme}>
      {String(buffer)}
    </SyntaxHighlighter>
  );
}
