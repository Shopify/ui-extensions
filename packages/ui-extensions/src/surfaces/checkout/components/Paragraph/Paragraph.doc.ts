import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/Paragraph';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  requires: '',
  thumbnail: 'paragraph-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ParagraphProps',
    },
  ],
  defaultExample: {
    image: 'paragraph-default.png',
    codeblock: {
      title: 'Default example',
      tabs: [
        {
          code: './examples/basic-paragraph.example.html',
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
        '- Create contrast between more and less important text with properties such as `color` and `tone`.',
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
      name: 'Text',
      subtitle: 'Component',
      url: 'text',
      type: 'Component',
    },
  ],
};

export default data;
