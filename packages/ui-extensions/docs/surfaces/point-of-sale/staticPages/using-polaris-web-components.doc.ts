import type {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'Using web components',
  description:
    "Web components are Shopify's UI toolkit for building interfaces that match the Shopify Point of Sale design system. This toolkit provides a set of custom HTML elements (web components) that you can use to create consistent, accessible, and performant user interfaces for the POS UI Extensions.",
  id: 'using-polaris-components',
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
            title: 'JSX',
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
        'When you need to build custom layouts you can use `s-stack` and `s-box`. \n\n- `s-stack` do not include spacing between children by default. To apply white space between children use the `gap` property\n- When `s-stack` is `direction="inline"` it will automatically wrap children to a new line when space is limited.',
    },
    {
      type: 'Generic',
      anchorLink: 'scale',
      title: 'Scale',
      sectionContent:
        'Our components use a middle-out scale for multiple properties like `padding`, `size` and `gap`.\n\nOur scale moves from the middle out:\n  - `small-300` is smaller than `small-100`\n  - `large-300` is bigger than `large-100`\n  - `small-100` and `large-100` have aliases of `small` and `large`\n  - `base` is the default value',
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
            title: 'JSX',
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
            title: 'JSX',
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
            title: 'Banner',
            code: './examples/slots-banner.jsx',
            language: 'jsx',
          },
        ],
      },
    },
    {
      type: 'Generic',
      anchorLink: 'commands',
      title: 'Commands',
      sectionContent:
        'Commands provide a declarative way for components to control other components without JavaScript. Using the `commandFor` and `command` properties, you can create interactive behaviors directly in your markup.\n\nKey points:\n- `commandFor` specifies the ID of the target component to control\n- `command` defines the action to perform on the target (e.g., `--toggle`, `--show`, `--hide`)\n- Commands work with components that support being controlled (like modals, popovers, and other interactive elements)\n- The default command is `--auto`, which performs the most appropriate action for the target component\n- No JavaScript event handlers are required—the browser handles the interaction automatically',
      codeblock: {
        title: 'Examples',
        tabs: [
          {
            title: 'Commands',
            code: './examples/commands.jsx',
            language: 'jsx',
          },
        ],
      },
    },
  ],
};

export default data;
