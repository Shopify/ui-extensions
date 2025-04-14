import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
  name: 'Using Polaris Web Components',
  description:
    "Polaris web components are Shopify's UI toolkit for building interfaces that match the Shopify Admin design system. This toolkit provides a set of custom HTML elements (web components) that you can use to create consistent, accessible, and performant user interfaces for the Shopify App Home and UI Extensions.",
  category: 'Polaris web components',
  isVisualComponent: false,
  related: [],
  examples: {
    description: '',
    exampleGroups: [
      {
        title: 'Element Naming Convention',
        examples: [
          {
            description:
              'All Polaris web components use the `s-` prefix to avoid conflicts with standard HTML elements.',
            codeblock: {
              title: '',
              tabs: [
                {
                  code: './examples/element-naming-convention.html',
                  language: 'html',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Using with React (App Home)',
        examples: [
          {
            description:
              "When building in the App Home with the Shopify Remix template, you'll be using React.",
            codeblock: {
              title: '',
              tabs: [
                {
                  code: './examples/using-with-react.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Using with Preact (UI Extensions)',
        examples: [
          {
            description:
              'For UI Extensions, Shopify provides Preact as the framework of choice. Using Polaris web components with Preact is very similar to using them with React.',
            codeblock: {
              title: '',
              tabs: [
                {
                  code: './examples/using-with-preact.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Properties vs Attributes',
        examples: [
          {
            description:
              "Polaris web components follow the same property and attribute patterns as standard HTML elements. Understanding this distinction is important for using the components effectively.\n\n**Attributes** are HTML attributes that appear in the HTML markup.\n\n**Properties** are JavaScript object properties accessed directly on the DOM element.\n\nMost attributes in Polaris web components are reflected as properties, with a few exceptions like `value` and `checked` which follow HTML's standard behavior.",
            codeblock: {
              title: 'Key Concepts',
              tabs: [],
            },
          },
          {
            description:
              "When using Polaris web components in JSX (React or Preact), the framework determines how to apply your props based on whether the element has a matching property name.\n\nIf the element has a property with the exact same name as your prop, the value is set as a property. Otherwise, it's applied as an attribute.",
            codeblock: {
              title: 'How JSX Props Are Applied',
              tabs: [
                {
                  code: './examples/property-vs-attribute-1.js',
                  language: 'javascript',
                },
              ],
            },
          },
          {
            description:
              'For Polaris web components, you can generally just use the property names as documented, and everything will work as expected.',
            codeblock: {
              title: 'Examples',
              tabs: [
                {
                  code: './examples/property-vs-attribute-2.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Event Handling',
        examples: [
          {
            description:
              'Polaris web components support standard DOM events and follow the same patterns as native HTML elements. When using them in JSX, you can use the familiar camelCase event handler props:\n\nBehind the scenes, Polaris web components ensure that these event handlers are properly registered with the DOM\'s `addEventListener` method, even when using React 18 (which normally would set them as attributes).\n\nEvent listener names are case-sensitive in the DOM. For example, `addEventListener("change")` and `addEventListener("Change")` are different events. Polaris web components handle this by checking if an element defines an event handler property for a given event type. If it does, the JSX event handler prop will be registered as lowercase.\n\nFor example, when you write `<s-button onClick={handleClick}>`, the element will see that `"onclick" in element` is `true` and will register the event via `addEventListener(\'click\')` (lower-cased).\n\n Components support both onInput props and onChange props. If you want an event for every keystroke, use `onInput`. If you want an event only when the user has finished typing, use `onChange`, which is fired when the component loses focus or the user presses enter.',
            codeblock: {
              title: 'Key Concepts',
              tabs: [
                {
                  code: './examples/event-handling.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'HTML Forms',
        examples: [
          {
            description:
              'Polaris web components work seamlessly with standard HTML forms.\n\nThe form components will automatically participate in form submission and validation. For a more comprehensive example of how to structure a form, see the [Settings](/docs/api/admin-home/patterns/settings) and [Details](/docs/api/admin-home/patterns/details) patterns.',
            codeblock: {
              title: '',
              tabs: [
                {
                  code: './examples/html-forms.html',
                  language: 'html',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Troubleshooting',
        examples: [
          {
            description:
              "Ensure you're using the property name as documented, not a different casing or naming convention.\n\n2. **Event handlers not firing**: Check that you're using the correct event name (e.g., `onClick` for click events).\n\n3. **Form values not being submitted**: Make sure your form elements have `name` attributes.",
            codeblock: {
              title: 'Properties not updating',
              tabs: [],
            },
          },
          {
            description:
              "Inspect the element in your browser's developer tools to see the current property and attribute values.\n\n2. Use `console.log` to verify that event handlers are being called and receiving the expected event objects.\n\n3. Check for any errors in the browser console that might indicate issues with your component usage.",
            codeblock: {
              title: 'Debugging Tips',
              tabs: [],
            },
          },
        ],
      },
    ],
  },
};

export default data;
