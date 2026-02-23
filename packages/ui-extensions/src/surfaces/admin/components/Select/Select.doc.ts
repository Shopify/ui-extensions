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
      sectionContent: `- **Use for choosing from predefined options:** Select works best when merchants pick from a known list of options. When merchants need to enter custom values or search through many options, consider [text field](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/text-field) with autocomplete or a searchable dropdown pattern instead.
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
- The component only supports selecting one option at a time. For multi-select scenarios, use a [choice list](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/forms/choice-list) with checkboxes or build a custom multi-select component.
- Rendering 500+ options can cause performance issues, especially on mobile devices. The browser must render all options in the DOM even though only one's visible.
- Browser native select dropdowns have limited styling capabilities. Dropdown appearance varies by browser and OS, and can't be fully customized with CSS. For custom-styled dropdowns, you must build a custom component using [button](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/actions/button) and [menu](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/actions/menu).
- Options only support plain text. You can't include icons, images, badges, or formatted text within option labels. For rich option content, build a custom dropdown using [menu](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/actions/menu) components.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the select component.',
      type: 'Select',
    },
    {
      title: 'Events',
      description:
        'The select component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'SelectEvents',
    },
    {
      title: 'Slots',
      description:
        'The select component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
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
        'The option component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
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
        'The option group component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'OptionGroupSlots',
    },
  ],
  defaultExample: {
    description:
      'Let users pick one option from a predefined list. This example pairs a label with selectable options.',
    codeblock: {
      title: 'Create a dropdown menu',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
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
              'Provide sorting controls for lists or tables. This example configures sort options with a pre-selected default value.',
            codeblock: {
              title: 'Add sorting options',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Show instructional text before a selection is made. This example uses placeholder text to describe what the user should choose.',
            codeblock: {
              title: 'Add placeholder text',
              tabs: [
                {
                  code: './examples/with-placeholder.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Communicate selection problems clearly to users. This example displays an error message when a required selection is missing.',
            codeblock: {
              title: 'Show validation errors',
              tabs: [
                {
                  code: './examples/with-error-state.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Make long option lists easier to scan. This example organizes options into logical groups like geographical regions.',
            codeblock: {
              title: 'Group options by category',
              tabs: [
                {
                  code: './examples/with-option-groups.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Visually indicate the purpose of a select field. This example adds a sort icon that signals filtering functionality.',
            codeblock: {
              title: 'Add an icon',
              tabs: [
                {
                  code: './examples/with-icon.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              "Lock a selection when changes aren't allowed. This example disables a dropdown while preserving its selected value.",
            codeblock: {
              title: 'Disable the select',
              tabs: [
                {
                  code: './examples/disabled-state.html',
                  language: 'preview',
                  title: '',
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
