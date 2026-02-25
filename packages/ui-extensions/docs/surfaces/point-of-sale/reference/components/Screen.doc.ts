import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForComponent = (title: string, fileName: string) =>
  generateCodeBlock(title, 'navigator-screen', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Screen',
  description:
    'The Screen component represents a screen in the navigation stack with full control over presentation, actions, and navigation lifecycle. Use it to create navigable screens with titles, loading states, and custom navigation behavior.\n\nThe component manages full-screen presentations with proper navigation stack integration, allowing extensions to push and pop screens as part of the POS navigation flow. It handles transitions, back button behavior, and safe area padding automatically, ensuring extensions provide native-feeling navigation experiences on both iOS and Android devices.\n\nScreen components maintain scroll position across navigation operations where appropriate, allowing merchants to return to their previous location after viewing details or completing sub-tasks.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the Screen component.',
      type: 'ScreenProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Layout and structure',
  related: [],
  thumbnail: 'screen-thumbnail.png',
  defaultExample: {
    image: 'screen-default.png',
    codeblock: generateCodeBlockForComponent(
      'Create a navigable screen',
      'navigate',
    ),
    description:
      'Define screens within your navigation stack with full control over presentation and behavior. This example shows how to create Screen components with titles, actions, and proper navigation integration, handling transitions and back button behavior automatically.',
  },
  examples: {
    description:
      'Learn how to create screens with navigation, pass data between screens, and use different presentation styles.',
    examples: [
      {
        codeblock: generateCodeBlockForComponent(
          'Pass data between screens',
          'navigate-params',
        ),
        description:
          'Navigate to screens while passing data as parameters. This example demonstrates how to send information from one screen to another using navigation parameters, enabling contextual data flow through multi-step workflows.',
      },
      {
        codeblock: generateCodeBlockForComponent(
          'Present a screen as a sheet',
          'navigate-sheet',
        ),
        description:
          'Show a screen using sheet presentation style for modal-like interactions. This example demonstrates how to present screens as overlays that slide up from the bottom, useful for quick actions or secondary information without losing the parent screen context.',
      },
    ],
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Implement proper loading states:** Use the \`isLoading\` property to provide visual feedback during async operations. Set it to \`true\` when starting data fetching or processing, and \`false\` when operations complete to maintain user awareness.\n- **Handle navigation lifecycle appropriately:** Use \`onNavigate\` for screen initialization, \`onNavigateBack\` for cleanup operations, and \`onReceiveParams\` for handling passed data. Proper lifecycle management ensures smooth transitions and data consistency.\n- **Choose appropriate presentation styles:** Use sheet presentation for focused tasks, modal-style interactions, or when you want to maintain context with the previous screen. Reserve standard presentation for primary navigation flows.\n- **Design meaningful secondary actions:** When adding secondary actions, use clear, action-oriented text and ensure the action is relevant to the current screen's content. Disable actions when they're not applicable using the \`isEnabled\` property.\n- **Override back navigation judiciously:** Use \`overrideNavigateBack\` only when you need to prevent data loss or handle unsaved changes. Most screens should use the default back navigation behavior to maintain consistent user expectations.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- Screen components are designed for navigation stack contexts—they can't be used as general layout containers outside of navigation workflows.\n- Only one secondary action is supported for each screen to maintain clean header layouts that don't overwhelm the interface.\n- Screen presentation and styling are controlled by the POS navigation system—custom screen transitions or styling beyond the provided options aren't supported.\n- Navigation parameter handling is limited to the onReceiveParams callback—complex parameter validation or transformation requires custom implementation within the callback.\n`,
    },
  ],
};

export default data;
