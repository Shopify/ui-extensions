import htm from 'htm';

import type {
  POSListItemTemplate,
  POSListTemplateNode,
  POSListTemplateProp,
  POSListTemplateSegment,
  POSListTemplates,
} from './components/POSList';

export type {
  POSListItemTemplate,
  POSListTemplateNode,
  POSListTemplateProp,
  POSListTemplateSegment,
  POSListTemplates,
};

/**
 * The tagged template that compiles `<s-pos-list-item>` markup into the
 * `itemTemplates` value `<s-pos-list>` accepts. Templates are static: the
 * result contains no functions. Compilation and validation happen when the
 * helper executes, not during the extension build. Define templates at module
 * scope to compile once per module execution.
 * Invalid templates throw synchronously and return no partial collection.
 * An uncaught module-scope exception aborts module evaluation; catch the helper
 * invocation to recover explicitly. There is no automatic list-only fallback.
 *
 * @publicDocs
 */
export type POSListTemplateTag = (
  strings: TemplateStringsArray,
  ...values: never[]
) => POSListTemplates;

/**
 * The API version this package compiles templates for. POS renders templates only for an
 * extension declaring the same API version, so a mismatch between the bundled package and
 * the extension's `api_version` is reported instead of rendering unexpectedly.
 */
const API_VERSION = '2026-10';

const ITEM_TAG = 's-pos-list-item';
const LIST_TAG = 's-pos-list';
const PATH_PATTERN = /^[\w.]+$/;
const EVENT_PROP_PATTERN = /^on[A-Z]/;
const BIND_PREFIX = 'bind:';
/** `{{#if path}}`, `{{/if}}`, or `{{path}}`; anything else inside `{{ }}` is unsupported. */
const EXPRESSION_PATTERN = /\{\{\s*(?:#if\s+([\w.]+)|(\/if)|([\w.]+))\s*\}\}/g;
const ANY_EXPRESSION_PATTERN = /\{\{([\s\S]*?)\}\}/g;

interface RawElement {
  tag: string;
  props: Record<string, unknown>;
  children: unknown[];
}

type Token =
  | {kind: 'text'; value: string}
  | {kind: 'path'; path: string}
  | {kind: 'if'; path: string}
  | {kind: 'endif'}
  | {kind: 'element'; element: RawElement};

function fail(message: string): never {
  throw new Error(`posListTemplate: ${message}`);
}

function isRawElement(value: unknown): value is RawElement {
  return (
    typeof value === 'object' &&
    value !== null &&
    'tag' in value &&
    'props' in value &&
    'children' in value
  );
}

function createRawElement(
  type: unknown,
  props: Record<string, unknown> | null,
  ...children: unknown[]
): RawElement {
  if (typeof type !== 'string') {
    fail('interpolated values are not supported; templates must be static');
  }
  return {tag: type, props: props ?? {}, children};
}

const parse = htm.bind<RawElement>(createRawElement);

/**
 * Splits a string into literal and `{{path}}` segments. Used for attribute
 * values, where block expressions have no meaning.
 */
function parseSegments(value: string): POSListTemplateSegment[] {
  const segments: POSListTemplateSegment[] = [];
  let lastIndex = 0;
  for (const match of value.matchAll(ANY_EXPRESSION_PATTERN)) {
    const expression = match[1]!.trim();
    if (!PATH_PATTERN.test(expression)) {
      if (expression.startsWith('#if') || expression === '/if') {
        fail(
          `{{#if}} is not supported inside an attribute value: "${match[0]}"`,
        );
      }
      fail(`unsupported template expression "${match[0]}"`);
    }
    const index = match.index ?? 0;
    if (index > lastIndex) {
      segments.push(value.slice(lastIndex, index));
    }
    segments.push({path: expression});
    lastIndex = index + match[0].length;
  }
  if (lastIndex < value.length) {
    segments.push(value.slice(lastIndex));
  }
  return segments;
}

function tokenizeText(value: string, tokens: Token[]): void {
  let lastIndex = 0;
  for (const match of value.matchAll(ANY_EXPRESSION_PATTERN)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      tokens.push({kind: 'text', value: value.slice(lastIndex, index)});
    }
    EXPRESSION_PATTERN.lastIndex = 0;
    const expression = EXPRESSION_PATTERN.exec(match[0]);
    if (expression === null || expression[0].length !== match[0].length) {
      fail(`unsupported template expression "${match[0]}"`);
    }
    const [, ifPath, endIf, path] = expression;
    if (ifPath !== undefined) {
      tokens.push({kind: 'if', path: ifPath});
    } else if (endIf !== undefined) {
      tokens.push({kind: 'endif'});
    } else if (path !== undefined) {
      tokens.push({kind: 'path', path});
    }
    lastIndex = index + match[0].length;
  }
  if (lastIndex < value.length) {
    tokens.push({kind: 'text', value: value.slice(lastIndex)});
  }
}

function tokenize(rawChildren: unknown[]): Token[] {
  const tokens: Token[] = [];
  for (const child of rawChildren.flat()) {
    if (typeof child === 'string') {
      if (child.trim().length > 0) {
        tokenizeText(child, tokens);
      }
    } else if (isRawElement(child)) {
      tokens.push({kind: 'element', element: child});
    } else if (child !== null && child !== undefined && child !== false) {
      fail('interpolated values are not supported; templates must be static');
    }
  }
  return tokens;
}

function compileProp(
  name: string,
  value: unknown,
  props: Record<string, POSListTemplateProp>,
): void {
  const isBinding = name.startsWith(BIND_PREFIX);
  const propName = isBinding ? name.slice(BIND_PREFIX.length) : name;
  if (EVENT_PROP_PATTERN.test(propName)) {
    fail(
      `event handlers are not supported in templates; use onRowClick on <${LIST_TAG}>`,
    );
  }
  if (isBinding) {
    if (typeof value !== 'string' || !PATH_PATTERN.test(value)) {
      fail(`${name} must name a row field path`);
    }
    if (propName in props) {
      fail(`"${propName}" is set both as an attribute and through ${name}`);
    }
    props[propName] = {kind: 'field', path: value};
    return;
  }
  if (typeof value === 'string') {
    props[name] = value.includes('{{')
      ? {kind: 'segments', segments: parseSegments(value)}
      : {kind: 'literal', value};
    return;
  }
  if (typeof value === 'boolean') {
    props[name] = {kind: 'literal', value};
    return;
  }
  fail('interpolated values are not supported; templates must be static');
}

function compileElement(
  element: RawElement,
  parentIfPath?: string,
): POSListTemplateNode {
  if (element.tag === ITEM_TAG || element.tag === LIST_TAG) {
    fail(`<${element.tag}> can only appear as a template root`);
  }
  const props: Record<string, POSListTemplateProp> = {};
  // Plain attributes first so `bind:` can detect a collision with one.
  const entries = Object.entries(element.props);
  for (const [name, value] of entries) {
    if (!name.startsWith(BIND_PREFIX)) {
      compileProp(name, value, props);
    }
  }
  for (const [name, value] of entries) {
    if (name.startsWith(BIND_PREFIX)) {
      compileProp(name, value, props);
    }
  }
  const node: POSListTemplateNode = {kind: 'element', tag: element.tag, props};
  const children = compileChildren(element.children, false, parentIfPath);
  if (children.length > 0) {
    node.children = children;
  }
  return node;
}

function compileChildren(
  rawChildren: unknown[],
  atRoot: boolean,
  parentIfPath?: string,
): POSListTemplateNode[] {
  const nodes: POSListTemplateNode[] = [];
  let pendingText: POSListTemplateSegment[] = [];
  let openIf: {path: string; children: POSListTemplateNode[]} | undefined;

  const target = () => (openIf ? openIf.children : nodes);
  const flushText = () => {
    if (pendingText.length === 0) {
      return;
    }
    if (atRoot) {
      fail('text must be inside a component such as <s-text>');
    }
    target().push({kind: 'text', segments: pendingText});
    pendingText = [];
  };

  for (const token of tokenize(rawChildren)) {
    switch (token.kind) {
      case 'text':
        pendingText.push(token.value);
        break;
      case 'path':
        pendingText.push({path: token.path});
        break;
      case 'if': {
        flushText();
        const enclosingIfPath = openIf?.path ?? parentIfPath;
        if (enclosingIfPath !== undefined) {
          fail(
            `{{#if}} cannot be nested: {{#if ${token.path}}} inside {{#if ${enclosingIfPath}}}`,
          );
        }
        openIf = {path: token.path, children: []};
        break;
      }
      case 'endif':
        flushText();
        if (!openIf) {
          fail('{{/if}} without a matching {{#if}}');
        }
        nodes.push({kind: 'if', path: openIf.path, children: openIf.children});
        openIf = undefined;
        break;
      case 'element':
        flushText();
        target().push(
          compileElement(token.element, openIf?.path ?? parentIfPath),
        );
        break;
    }
  }
  flushText();
  if (openIf) {
    fail(`{{#if ${openIf.path}}} is missing its {{/if}}`);
  }
  return nodes;
}

function compileRoot(root: unknown, seen: Set<string>): POSListItemTemplate {
  if (!isRawElement(root) || root.tag !== ITEM_TAG) {
    fail(`every template root must be an <${ITEM_TAG} templateId="…"> element`);
  }
  let templateId: string | undefined;
  let type: POSListItemTemplate['type'] = 'button';
  for (const [name, value] of Object.entries(root.props)) {
    if (name === 'templateId') {
      if (typeof value !== 'string' || value.length === 0) {
        fail(`<${ITEM_TAG}> requires a literal, non-empty templateId`);
      }
      templateId = value;
    } else if (name === 'type') {
      if (value !== 'button' && value !== 'text') {
        fail(
          `<${ITEM_TAG}> type must be "button" or "text", got ${JSON.stringify(
            value,
          )}`,
        );
      }
      type = value;
    } else {
      fail(
        `<${ITEM_TAG}> does not accept a "${name}" attribute; only templateId and type are allowed`,
      );
    }
  }
  if (templateId === undefined) {
    fail(`<${ITEM_TAG}> requires a literal, non-empty templateId`);
  }
  if (seen.has(templateId)) {
    fail(`duplicate templateId "${templateId}"`);
  }
  seen.add(templateId);
  return {templateId, type, children: compileChildren(root.children, true)};
}

/**
 * Compiles `<s-pos-list-item>` markup into the `itemTemplates` value for
 * `<s-pos-list>`.
 *
 * Compilation and validation happen when this helper executes, not during the
 * extension build. Define templates at module scope to compile once per module
 * execution.
 * Invalid templates throw synchronously and return no partial collection.
 * An uncaught module-scope exception aborts module evaluation; catch the helper
 * invocation to recover explicitly. There is no automatic list-only fallback.
 *
 * Inside a template, `{{path}}` interpolates a row field as text, `bind:prop="path"`
 * passes a row field to a component prop with its own type, and
 * `{{#if path}}…{{/if}}` renders its content only when the field is truthy.
 * Event handlers, interpolated values, and any other `{{…}}` expression are
 * rejected when the template is compiled.
 *
 * @publicDocs
 */
export const posListTemplate: POSListTemplateTag = (strings, ...values) => {
  if (values.length > 0) {
    fail('interpolated values are not supported; templates must be static');
  }
  const parsed: unknown = parse(strings);
  const roots = Array.isArray(parsed) ? parsed : [parsed];
  const seen = new Set<string>();
  const templates = roots
    .filter((root) => !(typeof root === 'string' && root.trim().length === 0))
    .map((root) => compileRoot(root, seen));
  return {version: API_VERSION, templates};
};
