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
      'Navigate between multiple screens',
      'navigate',
    ),
    description:
      'Create a navigation hierarchy with multiple screens. This example demonstrates setting up a Navigator that manages navigation between screens, enabling multi-step workflows with proper back button behavior and navigation history management.',
  },
  examples: {
    description:
      'Learn how to create complex navigation flows with multiple screens, parameter passing, and different presentation styles.',
    examples: [
      {
        codeblock: generateCodeBlockForComponent(
          'Navigate to a screen with data',
          'navigate-params',
        ),
        description:
          'Navigate between screens while passing data through navigation parameters. This example shows how to pass information from one screen to another, enabling contextual workflows where subsequent screens depend on previous user choices or data.',
      },
      {
        codeblock: generateCodeBlockForComponent(
          'Navigate with slide-up presentation',
          'navigate-sheet',
        ),
        description:
          'Display a screen that slides up from the bottom and overlays the current view. This example demonstrates how to configure screen presentation for temporary tasks or confirmations that appear as an overlay, useful for quick actions or secondary workflows.',
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Use descriptive screen names for navigation:** Choose clear, unique screen names that accurately represent their content and purpose. These names are used by the Navigation API for programmatic navigation and should be meaningful for code maintainability.
- **Set appropriate initial screens:** Select initial screens that provide the most logical entry point for your workflow. Consider the context in which your extension will be launched and what users will most likely want to see first.
- **Implement proper navigation patterns:** Use the Navigation API methods consistently—\`navigate()\` for moving forward, \`pop()\` for going back, and \`dismiss()\` for closing the extension. This creates predictable navigation behavior that users can understand.
- **Handle screen parameters effectively:** When passing parameters between screens using \`navigation.navigate()\`, ensure receiving screens properly handle the data through their \`onReceiveParams\` callbacks. Design parameter structures that are maintainable and type-safe.
- **Consider navigation context and user flow:** Design navigation patterns that make sense within the broader POS workflow. Avoid deep navigation hierarchies that might confuse users or disrupt their primary tasks.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- Navigator requires Screen components as children—it can't manage navigation for other component types or standalone content.
- Navigation state is managed internally—external navigation state management or complex routing patterns require custom implementation using the Navigation API.
- The component is designed for modal-style navigation within POS UI extensions—it's not suitable for main application navigation or replacing core POS navigation patterns.
      `,
    },
  ],
};

export default data;
