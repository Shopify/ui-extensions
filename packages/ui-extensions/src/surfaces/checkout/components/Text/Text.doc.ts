import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Text',
  description:
    'The `s-text` component is used for inline text styling, similar to HTML `span` elements, not for paragraph-level content. Use it to apply different visual tones and text styles to specific words or phrases within a `s-paragraph`, such as a `strong` type or `critical` tone.',
  requires: '',
  thumbnail: 'text-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'TextProps',
    },
  ],
  category: 'Components',
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'text-default.png',
    codeblock: {
      title: 'Default example',
      tabs: [
        {
          code: './examples/basic-text.example.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'tone',
      title: 'Tone',
      sectionContent:
        '| Value | Description |\n| --- | --- |\n| <code>"info"</code> | Conveys that the element is informative or has information. |\n| <code>"success"</code> | Convey a successful interaction. |\n| <code>"warning"</code> | Convey something needs attention or an action needs to be taken. |\n| <code>"critical"</code> | Conveys a problem has arisen. |',
    },
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '- Create contrast between more and less important text with properties such as `color`.',
    },
  ],
  related: [
    {
      name: 'Heading',
      subtitle: 'Component',
      url: 'heading',
      type: 'Component',
    },
    {
      name: 'Paragraph',
      subtitle: 'Component',
      url: 'paragraph',
      type: 'Component',
    },
  ],
};

export default data;
