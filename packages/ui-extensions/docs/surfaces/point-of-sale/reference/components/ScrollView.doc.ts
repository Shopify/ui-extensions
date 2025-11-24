import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForComponent = (title: string, fileName: string) =>
  generateCodeBlock(title, 'scroll-view', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'ScrollView',
  description:
    "The `ScrollView` component creates a scrollable container for content that exceeds the available display area. Use it to enable scrolling behavior for long content lists or detailed information that doesn't fit within screen constraints.\n\nThe component creates scrollable containers that automatically adjust to content size with optimized rendering for long lists and large content areas. It supports pull-to-refresh gestures, scroll position tracking, and lazy loading integration, providing smooth scrolling performance even with extensive content on resource-constrained POS hardware.\n\n`ScrollView` components provide scroll position tracking through callbacks, enabling features like back-to-top buttons, infinite scroll, and scroll-based animations that enhance the browsing experience.",
  isVisualComponent: true,
  type: 'component',
  definitions: [],
  category: 'Components',
  related: [],
  thumbnail: 'scroll-view-thumbnail.png',
  defaultExample: {
    image: 'scroll-view-default.png',
    codeblock: generateCodeBlockForComponent(
      'Scroll long content',
      'default.example',
    ),
    description:
      'Create a scrollable container for content that exceeds the display area. This example shows how to implement a ScrollView that enables smooth scrolling for long lists or detailed information, supporting pull-to-refresh and lazy loading for optimal performance.',
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Organize content for efficient scrolling:** Structure your scrollable content logically with clear visual hierarchy, consistent spacing, and logical grouping. This helps users navigate efficiently through longer content areas.
- **Consider touch interface optimization:** \`ScrollView\` is optimized for touch-based POS devices, providing smooth scrolling with appropriate momentum and bounce effects. Design your content layout to take advantage of these touch-optimized behaviors.
- **Combine with other layout components strategically:** Use \`ScrollView\` in combination with other layout components like \`Stack\` or \`Section\` to create well-organized scrollable content areas. \`ScrollView\` handles the scrolling behavior while other components manage content arrangement.
- **Design for various content types:** \`ScrollView\` supports any valid POS UI extension components as children, allowing for flexible content organization. Use this flexibility to create rich, interactive scrollable experiences.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- \`ScrollView\` automatically manage scroll behavior—manual scroll control or custom scroll physics are not available.
- Scroll styling and behavior are controlled by the POS design system—custom scroll bar appearance or scroll interactions beyond the default behavior aren't supported.
- The component provides basic scrolling functionality without advanced features like pull-to-refresh, infinite scrolling, or scroll position management that would require custom implementation.
      `,
    },
  ],
};

export default data;
