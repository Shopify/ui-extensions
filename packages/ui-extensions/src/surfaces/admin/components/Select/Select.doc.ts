import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Select';
import optionSharedContent from '../../../../docs/shared/components/Option';
import optionGroupSharedContent from '../../../../docs/shared/components/OptionGroup';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/select.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Use for choosing from predefined options:** Select works best when merchants pick from a known list of options. When merchants need to enter custom values or search through many options, consider [TextField](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/textfield) with autocomplete or a searchable dropdown pattern instead.
- **Organize options thoughtfully:** The order of options affects how quickly merchants find what they need. Group related options together, put common choices first, or use alphabetical order when no natural hierarchy exists.
- **Make options scannable:** Merchants should be able to quickly distinguish between options. Include enough context in each option label so merchants don't need to open and read multiple options to find the right one.
- **Handle default selections appropriately:** Pre-select an option when there's a clear default choice, but use a placeholder when merchants should make an intentional selection. Avoid confusing merchants with unclear initial states.
- **Provide clear validation feedback:** When selection is required or invalid, explain what the merchant needs to do. Context-specific error messages help merchants complete forms faster than generic validation messages.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The component doesn't include search or filtering functionality. For option lists where merchants need to search (like country selection with 200+ countries), implement a custom autocomplete or searchable dropdown pattern.
- The component only supports selecting one option at a time. For multi-select scenarios, use a [ChoiceList](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/choicelist) with checkboxes or build a custom multi-select component.
- Rendering 500+ options can cause performance issues, especially on mobile devices. The browser must render all options in the DOM even though only one's visible.
- Browser native select dropdowns have limited styling capabilities. Dropdown appearance varies by browser and OS, and can't be fully customized with CSS. For custom-styled dropdowns, you must build a custom component using [Button](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/actions/button) and [Menu](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/actions/menu).
- Options only support plain text. You can't include icons, images, badges, or formatted text within option labels. For rich option content, build a custom dropdown using [Menu](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/actions/menu) components.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the Select component.',
      type: 'Select',
    },
    {
      title: 'Events',
      description:
        'The Select component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'SelectEvents',
    },
    {
      title: 'Slots',
      description:
        'The Select component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'SelectSlots',
    },
    {
      title: optionSharedContent.name,
      description: optionSharedContent.description,
      type: 'Option',
    },
    {
      title: 'Slots',
      description:
        'The Option component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'OptionSlots',
    },
    {
      title: optionGroupSharedContent.name,
      description: optionGroupSharedContent.description,
      type: 'OptionGroup',
    },
    {
      title: 'Slots',
      description:
        'The OptionGroup component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'OptionGroupSlots',
    },
  ],
  defaultExample: {
    description:
      'Create a dropdown with selectable options. Click to interact with the preview.',
    codeblock: {
      title: 'Create a dropdown menu',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },

        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Create a dropdown with a pre-selected value for sorting options. Click to interact with the preview.',
            codeblock: {
              title: 'Add sorting options',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-usage.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Add placeholder text to guide users on what to select. Click to interact with the preview.',
            codeblock: {
              title: 'Add placeholder text',
              tabs: [
                {
                  code: './examples/with-placeholder.html',
                  language: 'html',
                },

                {
                  code: './examples/with-placeholder.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Display an error message when validation fails. Click to interact with the preview.',
            codeblock: {
              title: 'Show validation errors',
              tabs: [
                {
                  code: './examples/with-error-state.html',
                  language: 'html',
                },

                {
                  code: './examples/with-error-state.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Organize options into logical groups such as geographical regions. Click to interact with the preview.',
            codeblock: {
              title: 'Group options by category',
              tabs: [
                {
                  code: './examples/with-option-groups.html',
                  language: 'html',
                },

                {
                  code: './examples/with-option-groups.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Add a sort icon to indicate filtering functionality. Click to interact with the preview.',
            codeblock: {
              title: 'Add an icon',
              tabs: [
                {
                  code: './examples/with-icon.html',
                  language: 'html',
                },

                {
                  code: './examples/with-icon.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Prevent user interaction while preserving the selected value. Click to interact with the preview.',
            codeblock: {
              title: 'Disable the select',
              tabs: [
                {
                  code: './examples/disabled-state.html',
                  language: 'html',
                },

                {
                  code: './examples/disabled-state.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: '',
        examples: [
          {
            description:
              'Trigger an action when the user selects an option using the onChange event. Click to interact with the preview.',
            codeblock: {
              title: 'Handle selection changes',
              tabs: [
                {
                  code: './examples/handle-selection-change.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;
