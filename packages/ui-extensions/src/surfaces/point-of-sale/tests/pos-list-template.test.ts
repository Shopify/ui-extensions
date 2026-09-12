import {posListTemplate} from '../pos-list-template';
import type {POSListTemplateNode} from '../pos-list-template';

function item(markup: string, attributes = 'templateId="p"') {
  return `<s-pos-list-item ${attributes}>${markup}</s-pos-list-item>`;
}

function compileItem(markup: string, attributes?: string) {
  return posListTemplate(
    Object.assign([item(markup, attributes)], {
      raw: [item(markup, attributes)],
    }),
  );
}

function firstChild(markup: string): POSListTemplateNode {
  const [template] = compileItem(markup).templates;
  const [child] = template!.children;
  return child!;
}

describe('posListTemplate', () => {
  describe('roots', () => {
    it('compiles text with a path placeholder into text segments', () => {
      const result = posListTemplate`<s-pos-list-item templateId="p"><s-text>Hi {{name}}</s-text></s-pos-list-item>`;

      expect(result).toStrictEqual({
        version: 1,
        templates: [
          {
            templateId: 'p',
            type: 'button',
            children: [
              {
                kind: 'element',
                tag: 's-text',
                props: {},
                children: [{kind: 'text', segments: ['Hi ', {path: 'name'}]}],
              },
            ],
          },
        ],
      });
    });

    it('compiles several roots and honours type="text"', () => {
      const result = posListTemplate`
        <s-pos-list-item templateId="header" type="text"><s-heading>{{title}}</s-heading></s-pos-list-item>
        <s-pos-list-item templateId="product"><s-text>{{name}}</s-text></s-pos-list-item>
      `;

      expect(
        result.templates.map(({templateId, type}) => ({templateId, type})),
      ).toStrictEqual([
        {templateId: 'header', type: 'text'},
        {templateId: 'product', type: 'button'},
      ]);
    });

    it('rejects an unknown type', () => {
      expect(() =>
        compileItem('<s-text>x</s-text>', 'templateId="p" type="link"'),
      ).toThrow(
        'posListTemplate: <s-pos-list-item> type must be "button" or "text", got "link"',
      );
    });

    it('rejects a missing, empty, or duplicate templateId', () => {
      expect(() => compileItem('<s-text>x</s-text>', 'type="text"')).toThrow(
        'posListTemplate: <s-pos-list-item> requires a literal, non-empty templateId',
      );
      expect(() => compileItem('<s-text>x</s-text>', 'templateId=""')).toThrow(
        'posListTemplate: <s-pos-list-item> requires a literal, non-empty templateId',
      );
      expect(
        () => posListTemplate`
          <s-pos-list-item templateId="p"><s-text>a</s-text></s-pos-list-item>
          <s-pos-list-item templateId="p"><s-text>b</s-text></s-pos-list-item>
        `,
      ).toThrow('posListTemplate: duplicate templateId "p"');
    });

    it('rejects other root attributes, non-item roots, and nested items', () => {
      expect(() =>
        compileItem('<s-text>x</s-text>', 'templateId="p" id="x"'),
      ).toThrow(
        'posListTemplate: <s-pos-list-item> does not accept a "id" attribute; only templateId and type are allowed',
      );
      expect(() => posListTemplate`<s-text>loose</s-text>`).toThrow(
        'posListTemplate: every template root must be an <s-pos-list-item templateId="…"> element',
      );
      expect(() =>
        compileItem(
          '<s-pos-list-item templateId="q"><s-text>x</s-text></s-pos-list-item>',
        ),
      ).toThrow(
        'posListTemplate: <s-pos-list-item> can only appear as a template root',
      );
      expect(() => compileItem('<s-pos-list rows="x"></s-pos-list>')).toThrow(
        'posListTemplate: <s-pos-list> can only appear as a template root',
      );
    });

    it('rejects text directly under the item root', () => {
      expect(() => compileItem('{{label}}')).toThrow(
        'posListTemplate: text must be inside a component such as <s-text>',
      );
      expect(() => compileItem('Plain text')).toThrow(
        'posListTemplate: text must be inside a component such as <s-text>',
      );
      expect(() => compileItem('{{#if a}}{{label}}{{/if}}')).toThrow(
        'posListTemplate: text must be inside a component such as <s-text>',
      );
    });

    it('rejects interpolated values of any kind', () => {
      // The tag's type already forbids interpolation; this exercises the runtime check JS callers hit.
      const compileDynamic = posListTemplate as unknown as (
        strings: TemplateStringsArray,
        ...values: unknown[]
      ) => unknown;
      const dynamic = () => {};
      const tag = 's-text';
      expect(
        () =>
          compileDynamic`<s-pos-list-item templateId="p"><s-text onClick=${dynamic}>x</s-text></s-pos-list-item>`,
      ).toThrow(
        'posListTemplate: interpolated values are not supported; templates must be static',
      );
      expect(
        () =>
          compileDynamic`<s-pos-list-item templateId="p"><${tag}>x</${tag}></s-pos-list-item>`,
      ).toThrow(
        'posListTemplate: interpolated values are not supported; templates must be static',
      );
    });
  });

  describe('conditionals', () => {
    it('compiles {{#if}} blocks into if nodes wrapping the sibling elements between the markers', () => {
      const stack = firstChild(
        '<s-stack>{{#if onSale}}<s-badge tone="success">Sale</s-badge>{{/if}}</s-stack>',
      );

      expect(stack).toStrictEqual({
        kind: 'element',
        tag: 's-stack',
        props: {},
        children: [
          {
            kind: 'if',
            path: 'onSale',
            children: [
              {
                kind: 'element',
                tag: 's-badge',
                props: {tone: {kind: 'literal', value: 'success'}},
                children: [{kind: 'text', segments: ['Sale']}],
              },
            ],
          },
        ],
      });
    });

    it('keeps text inside an if within a component', () => {
      const text = firstChild(
        '<s-text>{{#if a}}Yes {{label}}{{/if}} always</s-text>',
      );

      expect(text).toStrictEqual({
        kind: 'element',
        tag: 's-text',
        props: {},
        children: [
          {
            kind: 'if',
            path: 'a',
            children: [{kind: 'text', segments: ['Yes ', {path: 'label'}]}],
          },
          {kind: 'text', segments: [' always']},
        ],
      });
    });

    it('rejects nested, unopened, unclosed, and unsupported block expressions', () => {
      expect(() =>
        compileItem(
          '<s-stack>{{#if a}}{{#if b}}<s-text>x</s-text>{{/if}}{{/if}}</s-stack>',
        ),
      ).toThrow(
        'posListTemplate: {{#if}} cannot be nested: {{#if b}} inside {{#if a}}',
      );
      expect(() => compileItem('<s-stack>{{/if}}</s-stack>')).toThrow(
        'posListTemplate: {{/if}} without a matching {{#if}}',
      );
      expect(() =>
        compileItem('<s-stack>{{#if a}}<s-text>x</s-text></s-stack>'),
      ).toThrow('posListTemplate: {{#if a}} is missing its {{/if}}');
      expect(() =>
        compileItem(
          '<s-stack>{{#each x}}<s-text>x</s-text>{{/each}}</s-stack>',
        ),
      ).toThrow(
        'posListTemplate: unsupported template expression "{{#each x}}"',
      );
      expect(() => compileItem('<s-text>{{a + b}}</s-text>')).toThrow(
        'posListTemplate: unsupported template expression "{{a + b}}"',
      );
    });
  });

  describe('props', () => {
    it('compiles bind: attributes into typed field bindings', () => {
      expect(firstChild('<s-switch bind:checked="active" />')).toStrictEqual({
        kind: 'element',
        tag: 's-switch',
        props: {checked: {kind: 'field', path: 'active'}},
      });
    });

    it('compiles placeholders inside attributes into string segments', () => {
      expect(
        firstChild('<s-image src="{{image.src}}" alt="{{label}} image" />'),
      ).toStrictEqual({
        kind: 'element',
        tag: 's-image',
        props: {
          src: {kind: 'segments', segments: [{path: 'image.src'}]},
          alt: {kind: 'segments', segments: [{path: 'label'}, ' image']},
        },
      });
    });

    it('keeps literal strings and valueless attributes as literals', () => {
      expect(firstChild('<s-switch checked label="Wifi" />')).toStrictEqual({
        kind: 'element',
        tag: 's-switch',
        props: {
          checked: {kind: 'literal', value: true},
          label: {kind: 'literal', value: 'Wifi'},
        },
      });
    });

    it('rejects event handler attributes', () => {
      expect(() => compileItem('<s-button onClick="x">Go</s-button>')).toThrow(
        'posListTemplate: event handlers are not supported in templates; use onRowClick on <s-pos-list>',
      );
    });

    it('rejects a bind: attribute that collides with a plain attribute or names an invalid path', () => {
      expect(() =>
        compileItem('<s-switch checked bind:checked="active" />'),
      ).toThrow(
        'posListTemplate: "checked" is set both as an attribute and through bind:checked',
      );
      expect(() => compileItem('<s-switch bind:checked="a b" />')).toThrow(
        'posListTemplate: bind:checked must name a row field path',
      );
    });

    it('rejects block expressions inside attribute values', () => {
      expect(() =>
        compileItem('<s-text tone="{{#if a}}critical{{/if}}">x</s-text>'),
      ).toThrow(
        'posListTemplate: {{#if}} is not supported inside an attribute value: "{{#if a}}"',
      );
    });
  });
});
