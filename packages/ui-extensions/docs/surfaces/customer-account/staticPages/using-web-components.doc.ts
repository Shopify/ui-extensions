import type {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'Using web components',
  description:
    "Web components are Shopify's UI toolkit for building interfaces that match the Shopify Checkout design system. This toolkit provides a set of custom HTML elements (web components) that you can use to create consistent, accessible, and performant user interfaces for Customer Account UI Extensions.",
  id: 'using-web-components',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'styling',
      title: 'Styling',
      sectionContent:
        "Web components come with built-in styling that follows Shopify's design system. The components will automatically apply the correct styling based on the properties you set and the context in which they are used. For example, headings automatically display at progressively less prominent sizes based on how many levels deep they are nested inside of sections. All components inherit a merchant's brand settings and the CSS cannot be altered or overridden.",
      codeblock: {
        title: 'Example',
        tabs: [
          {
            code: './examples/styling.jsx',
            language: 'jsx',
          },
        ],
      },
    },
    {
      type: 'Generic',
      anchorLink: 'custom-layout',
      title: 'Custom layout',
      sectionContent:
        'When you need to build custom layouts you can use `s-stack`, `s-grid` (coming soon) and `s-box`. \n\n- `s-stack` and `s-grid` (coming soon) do not include spacing between children by default. To apply white space between children use the `gap` property\n- When `s-stack` is `direction="inline"` it will automatically wrap children to a new line when space is limited.\n- `s-grid` (coming soon) will allow children to overflow unless template rows/columns are properly set.\n- Order is important for shorthand properties, e.g. border takes `size-keyword`, `color-keyword`, `style-keyword`',
    },
    {
      type: 'Generic',
      anchorLink: 'scale',
      title: 'Scale',
      sectionContent:
        'Our components use a middle-out scale for mulitple properties like `padding`, `size` and `gap`.\n\nOur scale moves from the middle out:\n  - `small-300` is smaller than `small-100`\n  - `large-300` is bigger than `large-100`\n  - `small-100` and `large-100` have aliases of `small` and `large`\n  - `base` is the default value',
      codeblock: {
        title: 'Example',
        tabs: [
          {
            code: './examples/scale.ts',
            language: 'ts',
          },
        ],
      },
      initialLanguage: 'ts',
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'responsive-values',
      title: 'Responsive values',
      sectionContent:
        'Some properties accept responsive values, which enables you to change the value of the property depending on a parent inline size.',
      accordionContent: [
        {
          title: 'Syntax',
          description: `
The syntax for a responsive value generally follows the ternary operator syntax. For example, \`@container (inline-size > 500px) large, small\` means that the value will be \`large\` if the container is more than 500px wide, and \`small\` if the container is 500px or less. The syntax rules are:

1. Begin the value with \`@container\`
2. Optionally add a name to target a specific container
3. Use the \`inline-size\` keyword inside of parentheses to query the inline-size of the container. This is the condition that will be evaluated to determine which value to use.
4. Set the value if that condition is true
5. Set the value to be used if the condition is false.

For greater compatibility on older browsers, container queries must follow a mobile-first approach. The fallback value (when the condition is false) must always represent your smallest supported design, with the condition value (when the condition is true) providing styles for larger containers. For example, \`<Stack direction="@container (inline-size > 300px) inline, block">\` ensures that browsers that do not support container styles get a design that works in all container sizes.
`,
          codeblock: {
            tabs: [
              {
                title: 'HTML',
                code: './examples/responsive-value-syntax.html',
                language: 'html',
              },
            ],
            title: '',
            links: [],
          },
          initialLanguage: '',
        },
        {
          title: 'Using s-query-container',
          description: `
When using responsive values, you must also place the \`<s-query-container>\` component in the location you want to query the inline-size.

By default, the responsive value will query against the closest parent; to look up a specific parent, this component also accepts a \`containername\` attribute which adds a name to the container. Then add that name after \`@container\` in your responsive query to target it.
`,
          codeblock: {
            tabs: [
              {
                title: 'Basic example',
                code: './examples/query-container-example.html',
                language: 'html',
              },
              {
                title: 'Named example',
                code: './examples/query-container-named-example.html',
                language: 'html',
              },
            ],
            title: 'Pseudocode',
            links: [],
          },
          initialLanguage: '',
        },
        {
          title: 'Values with reserved characters',
          description:
            'Some values could contain reserved characters used in the responsive value syntax, such as `()` or `,`. To use these values, escape them by wrapping them in quotes.',
          codeblock: {
            tabs: [
              {
                title: 'Escaped characters',
                code: './examples/responsive-value-escaped-chars.html',
                language: 'html',
              },
            ],
            title: '',
            links: [],
          },
          initialLanguage: '',
        },
        {
          title: 'Advanced patterns',
          description:
            'The syntax is flexible enough to support advanced patterns such as compound conditions, and|or conditions, and nested conditions.',
          codeblock: {
            tabs: [
              {
                title: 'Compound',
                code: './examples/responsive-value-compound-example.html',
                language: 'html',
              },
              {
                title: 'And|or',
                code: './examples/responsive-value-and-or-example.html',
                language: 'html',
              },
              {
                title: 'Nested',
                code: './examples/responsive-value-nested-example.html',
                language: 'html',
              },
            ],
            title: 'Advanced patterns',
            links: [],
          },
          initialLanguage: '',
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'interactive-elements',
      title: 'Interactive elements',
      sectionContent:
        '`s-button`, `s-link` and `s-clickable` (coming soon) render as anchor elements when they have a `href` and render as a button element when they have an `onClick` without a `href`. The HTML specification stats that interactive elements cannot have interactive children.\n\n`s-clickable` is an escape hatch for when `s-link` and `s-button` are not able to implement a specific design. You should always try to use `s-link` and `s-button` first.\n\nInteactive components with `target="auto"` automatically use `_self` for internal links and `_blank` for external URLs. This behavior ensures a consistent navigation experience for users without requiring developers to manually set the correct target for each link.',
    },
    {
      type: 'Generic',
      anchorLink: 'variant-tone-and-color',
      title: 'Variant tone and color',
      sectionContent:
        'The `tone` is used to apply a group of color design tokens to the component such as `critical`, `success` or `info`.\n\nThe `color` adjusts the intensity of the `tone` making it more `subdued` or `strong`.\n\nThe `variant` is used to change how the component is rendered to match the design language this is different for each component.',
      codeblock: {
        title: 'Example',
        tabs: [
          {
            code: './examples/variant-tone-and-color.jsx',
            language: 'jsx',
          },
        ],
      },
      initialLanguage: 'html',
    },
    {
      type: 'Generic',
      anchorLink: 'using-with-preact',
      title: 'Using with Preact',
      sectionContent:
        'For UI Extensions, Shopify provides Preact as the framework of choice. Using web components with Preact is very similar to using them with React.  ',
      codeblock: {
        title: 'Example',
        tabs: [
          {
            code: './examples/using-with-preact.jsx',
            language: 'jsx',
          },
        ],
      },
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'properties-vs-attributes',
      title: 'Properties vs attributes',
      sectionContent:
        'Web components follow the same property and attribute patterns as standard HTML elements. Understanding this distinction is important for using the components effectively.',
      accordionContent: [
        {
          title: 'Key concepts',
          description:
            "1. **Attributes** are HTML attributes that appear in the HTML markup.\n2. **Properties** are JavaScript object properties accessed directly on the DOM element.\n3. Most attributes in web components are reflected as properties, with a few exceptions like `value` and `checked` which follow HTML's standard behavior.",
          codeblock: {
            tabs: [],
            title: '',
            links: [],
          },
          initialLanguage: '',
        },
        {
          title: 'How JSX properties are applied',
          description:
            "When using web components in JSX, the framework determines how to apply your props based on whether the element has a matching property name.\n\nIf the element has a property with the exact same name as your prop, the value is set as a property. Otherwise, it's applied as an attribute. Here's how this works in pseudocode:",
          codeblock: {
            tabs: [
              {
                title: 'JavaScript',
                code: './examples/properties-vs-attributes-jsx-props.ts',
                language: 'ts',
              },
            ],
            title: 'Pseudocode',
            links: [],
          },
          initialLanguage: '',
        },
        {
          title: 'Examples',
          description:
            'For web components, you can generally just use the property names as documented, and everything will work as expected.',
          codeblock: {
            tabs: [
              {
                title: 'JSX',
                code: './examples/properties-vs-attributes-examples.jsx',
                language: 'jsx',
              },
            ],
            title: 'Examples',
            links: [],
          },
          initialLanguage: '',
        },
      ],
    },
    {
      type: 'Generic',
      title: 'Handling events',
      sectionContent: `Handling events in UI extensions are the same as you would handle them in a web app. You can use the \`addEventListener\` method to listen for events on the components or use the \`on[event]\` property to listen for events from the components.
        \n\nWhen using Preact, event handlers can be registered by passing props beginning with \`on\`, and the event handler name is case-insensitive. For example, the JSX \`<s-button onClick={fn}>\` registers \`fn\` as a "click" event listener on the button.`,
      anchorLink: 'handling-events',
      codeblock: {
        title: 'Handling events',
        tabs: [
          {
            code: './examples/handling-events.jsx',
            language: 'jsx',
          },
        ],
      },
    },
    {
      type: 'Generic',
      anchorLink: 'slots',
      title: 'Slots',
      sectionContent:
        'Slots allow you to insert custom content into specific areas of web components. Use the `slot` attribute to specify where your content should appear within a component.\n\nKey points:\n- Named slots (e.g., `slot="title"`) place content in designated areas\n- Multiple elements can share the same slot name\n- Elements without a slot attribute go into the default (unnamed) slot',
      codeblock: {
        title: 'Examples',
        tabs: [
          {
            code: './examples/slots-banner.jsx',
            language: 'jsx',
          },
        ],
      },
    },
    {
      type: 'Generic',
      anchorLink: 'methods',
      title: 'Methods',
      sectionContent: `Methods are functions available on components for programmatic control. Components like \`Modal\`, \`Sheet\`, and \`Announcement\` provide methods such as \`hideOverlay()\` or \`dismiss()\` to control their behavior imperatively when needed.

Use methods when you need to trigger actions that can't be achieved through property changes alone, such as closing an overlay after an async operation or resetting component state.`,
      codeblock: {
        title: 'Example',
        tabs: [
          {
            code: './examples/methods.example.jsx',
            title: 'JSX',
            language: 'jsx',
          },
          {
            code: '/examples/methods-js.example.jsx',
            title: 'JS',
            language: 'js',
          },
        ],
      },
    },
    {
      type: 'Generic',
      title: 'Using Forms',
      sectionContent: `The [Form](/docs/api/customer-account-ui-extensions/web-components/forms/form) component provides a way to manage form state and submit data to your app's backend or directly to Shopify using Direct API access.\n\nWhen the form is submitted or reset the relevant callback in the form component will get triggered.\n\nUsing this, you can control what defines a component to be dirty by utilizing the input's defaultValue property.\n\nRules:\n\n- When the defaultValue is set, the component will be considered dirty if the value of the input is different from the defaultValue. You may update the defaultValue when the form is submitted to reset the dirty state of the form.\n\n- When the defaultValue is not set, the component will be considered dirty if the value of the input is different from the initial value or from the last dynamic update to the input's value that wasn't triggered by user input.

        Note: In order to trigger the dirty state, each input must have a name attribute.
        `,
      anchorLink: 'using-forms',
      codeblock: {
        title: "Trigger the Form's dirty state",
        tabs: [
          {
            code: './examples/form-default-value.jsx',
            language: 'preview-jsx',
            title: 'Using `defaultValue`',
          },
          {
            code: './examples/form-implicit-default.jsx',
            language: 'preview-jsx',
            title: 'Using implicit default',
          },
        ],
      },
    },
    {
      type: 'Generic',
      anchorLink: 'accessibility',
      title: 'Accessibility',
      sectionContent:
        'Web components are built with accessibility in mind. They:\n\n- Use semantic HTML under the hood\n- Support keyboard navigation\n- Include proper ARIA attributes\n- Manage focus appropriately\n- Provide appropriate color contrast\n- Log warnings when component properties are missing and required for accessibility\n\nTo ensure your application remains accessible, follow these best practices:\n\n1. Always use the `label` and `error` properties for form elements\n2. Use appropriate heading levels with `s-heading` or the `heading` property\n3. Ensure sufficient color contrast\n4. Test keyboard navigation\n5. Use `labelAccessibilityVisibility` to hide labels and keep them visible to assistive technologies\n6. Use `accessibilityRole` to specify the `aria-role` of the component',
      codeblock: {
        title: 'Example',
        tabs: [
          {
            code: './examples/accessibility.jsx',
            language: 'jsx',
          },
        ],
      },
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'troubleshooting',
      title: 'Troubleshooting',
      sectionContent:
        'Common issues and debugging tips for using web components.',
      accordionContent: [
        {
          title: 'Common issues',
          description:
            "1. **Properties not updating**: Ensure you're using the property name as documented, not a different casing or naming convention.\n\n2. **Event handlers not firing**: Check that you're using the correct event name (e.g., `onClick` for click events).\n\n3. **Form values not being submitted**: Make sure your form elements have `name` attributes.",
          codeblock: {
            tabs: [],
            title: '',
            links: [],
          },
          initialLanguage: '',
        },
        {
          title: 'Debugging tips',
          description:
            "1. Inspect the element in your browser's developer tools to see the current property and attribute values.\n\n2. Use `console.log` to verify that event handlers are being called and receiving the expected event objects.\n\n3. Check for any errors in the browser console that might indicate issues with your component usage.",
          codeblock: {
            tabs: [],
            title: '',
            links: [],
          },
          initialLanguage: '',
        },
      ],
    },
  ],
};

export default data;
