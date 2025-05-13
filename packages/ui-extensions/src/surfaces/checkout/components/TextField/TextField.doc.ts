import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/TextField';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  requires: '',
  thumbnail: 'textfield-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'TextFieldProps',
    },
  ],
  defaultExample: {
    image: 'textfield-default.png',
    codeblock: {
      title: 'Default example',
      tabs: [
        {
          code: './examples/basic-textfield.example.html',
          language: '',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '- Clearly label text fields so that it’s obvious what customers should enter.\n\n- Label text fields as Optional when input isn’t required. For example, use the label <b>First name (optional)</b>.\n\n- Don’t have optional fields pass true to the required property.',
    },
  ],
  related: [],
};

export default data;
