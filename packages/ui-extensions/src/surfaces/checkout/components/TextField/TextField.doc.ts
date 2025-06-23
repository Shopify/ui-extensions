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
      type: 'TextFieldBaseProps',
    },
    {
      title: 'Events',
      description: '',
      type: 'TextFieldElementEvents',
    },
    {
      title: 'Slots',
      description: '',
      type: 'TextFieldElementSlots',
    },
  ],
  defaultExample: {
    image: 'textfield-default.png',
    codeblock: {
      title: 'Code',
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
      sectionContent: `
        - Clearly label text fields so that it’s obvious what customers should enter.
        - Label text fields as optional when input isn’t required. For example, use the label <b>First name (optional)</b>.
        - Don’t have optional fields pass true to the required property.
      `,
    },
  ],
};

export default data;
