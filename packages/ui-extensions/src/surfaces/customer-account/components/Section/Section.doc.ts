import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Section';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'section-thumbnail.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic',
      anchorLink: 'useful-for',
      sectionContent: `- Organizing your page in a logical structure based on nesting levels.
- Creating consistency across pages.`,
    },
    {
      title: 'Considerations',
      type: 'Generic',
      anchorLink: 'considerations',
      sectionContent: `- When adding headings inside sections they automatically use a specific style, which helps keep the content organized and clear.`,
    },
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
Use these best practices to deliver a clear and accessible experience in your extensions.

### Describe each section with a clear heading

Use concise, sentence‑case headings that reflect the section’s purpose.

### Provide an accessible name when no heading exists

If a visual heading isn’t present, set an accessibilityLabel so assistive technologies can identify the section.

### Align actions to the section’s content

Only include primary and secondary actions that relate directly to what’s in the section.

### Limit and prioritize actions

Keep the number of actions small to reduce noise and emphasize what matters most.

### Keep layout and styling consistent

Maintain consistent spacing, typography, and alignment between sections for a coherent experience.
`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'SectionPropsDocs',
    },
    {
      title: 'Slots',
      description: '',
      type: 'SectionElementSlotsDocs',
    },
  ],
  defaultExample: {
    image: 'section-default.png',
    altText:
      'An example of the Section component shows a header, some text, a primary action, and a secondary action.',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-Section.example.html',
          language: 'jsx',
        },
      ],
    },
  },
};

export default data;
