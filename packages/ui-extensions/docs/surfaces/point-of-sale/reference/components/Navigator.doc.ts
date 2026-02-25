import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForComponent = (title: string, fileName: string) =>
  generateCodeBlock(title, 'navigator-screen', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Navigator',
  description:
    'The Navigator component manages navigation between multiple Screen components within a POS UI extension. Use it to create multi-screen workflows with proper navigation stack management and initial screen configuration.\n\nNavigator works with the Navigation API to provide complete navigation control for complex POS workflows that require multiple views and user interactions.\n\nNavigator components maintain navigation history across app lifecycle events and supports deep linking to specific screens, enabling merchants to return to their exact workflow state after interruptions The component supports gesture-based navigation like swipe-to-go-back on platforms where this is standard, providing familiar interaction patterns that feel native to each platform.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the Navigator component.',
      type: 'NavigatorProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Navigation and content',
  related: [],
  thumbnail: 'navigator-thumbnail.png',
  defaultExample: {
    image: 'navigator-default.png',
    codeblock: generateCodeBlockForComponent(
      'Navigate between screens',
      'navigate',
    ),
    description:
      'Create a multi-screen navigation flow within your extension. This example shows how to set up a Navigator with multiple Screen components and navigate between them, enabling complex workflows, wizards, or detailed views with proper navigation stack management.',
  },
  examples: {
    description:
      'Learn how to create multi-screen workflows with navigation, parameters, and different presentation styles.',
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
      sectionContent: `\n- **Use descriptive screen names for navigation:** Choose clear, unique screen names that accurately represent their content and purpose. These names are used by the Navigation API for programmatic navigation and should be meaningful for code maintainability.\n- **Set appropriate initial screens:** Select initial screens that provide the most logical entry point for your workflow. Consider the context in which your extension will be launched and what users will most likely want to see first.\n- **Implement proper navigation patterns:** Use the Navigation API methods consistently—\`navigate()\` for moving forward, \`pop()\` for going back, and \`dismiss()\` for closing the extension. This creates predictable navigation behavior that users can understand.\n- **Handle screen parameters effectively:** When passing parameters between screens using \`navigation.navigate()\`, ensure receiving screens properly handle the data through their \`onReceiveParams\` callbacks. Design parameter structures that are maintainable and type-safe.\n- **Consider navigation context and user flow:** Design navigation patterns that make sense within the broader POS workflow. Avoid deep navigation hierarchies that might confuse users or disrupt their primary tasks.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- Navigator requires Screen components as children—it can't manage navigation for other component types or standalone content.\n- Navigation state is managed internally—external navigation state management or complex routing patterns require custom implementation using the Navigation API.\n- The component is designed for modal-style navigation within POS UI extensions—it's not suitable for main application navigation or replacing core POS navigation patterns.\n`,
    },
  ],
};

export default data;
