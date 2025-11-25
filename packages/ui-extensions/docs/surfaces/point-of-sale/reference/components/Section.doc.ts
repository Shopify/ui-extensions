import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForComponent = (title: string, fileName: string) =>
  generateCodeBlock(title, 'section', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Section',
  description:
    'The `Section` component groups related content into clearly-defined thematic areas. Sections provide visual boundaries and optional actions to organize content within POS interfaces.\n\nUse sections to create structured layouts with clear titles and actionable elements that help users navigate and interact with grouped content.\n\nThe component supports customizable section dividers and spacing between sections, allowing you to create visual rhythm and hierarchy that guides merchants through complex forms and settings interfaces. Sections can be nested to create hierarchical content organization, with each level automatically adjusting its visual styling and semantic meaning to maintain clear structure and relationships throughout complex interfaces.\n\nThe `Section` component no longer has a border as of POS version 10.0.0.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Section` component.',
      type: 'SectionProps',
    },
    {
      title: 'SectionHeaderAction',
      description: '',
      type: 'SectionHeaderAction',
    },
  ],
  category: 'UI components',
  subCategory: 'Layout and structure',
  related: [],
  thumbnail: 'section-header-thumbnail.png',
  defaultExample: {
    image: 'section-header-default.png',
    codeblock: generateCodeBlockForComponent(
      'Group related content',
      'default.example',
    ),
    description:
      'Group related content with clear visual boundaries and optional actions. This example shows how to use Section components to create structured layouts with titles and headers that organize content into logical thematic areas for better navigation and comprehension.',
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Design meaningful action buttons:** When providing an action, use clear and descriptive button titles that indicate exactly what will happen when pressed. Avoid generic terms like "Action" in favor of specific actions like "Edit Settings" or "Add Item."
- **Group related content logically:** Use sections to group content that belongs together conceptually. Each section should contain related information or controls that users would expect to find together, creating intuitive content organization.
- **Implement responsive action callbacks:**  Consider showing loading states or confirmation messages when actions require network requests or significant processing time.
- **Maintain consistent section patterns:** Establish consistent patterns for how you use sections across your POS UI extension. Similar types of content should be structured similarly, helping users develop familiarity with your interface organization.
- **Consider visual hierarchy and spacing:** Use sections strategically to create clear visual hierarchy in your interface.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- Section content is determined by child components rather than direct content properties—organize your content structure through component composition.
- Only one action button is supported per section to maintain clean, focused interfaces that integrate well with existing POS workflows.
- The component's visual styling and layout are controlled by the POS design system—custom section styling beyond the provided properties is not supported.
      `,
    },
  ],
};

export default data;
