import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextField',
  description:
    'The `TextField` component captures single-line text input. Use it to collect short, free-form information in forms and data entry workflows.\n\nThe component supports various input configurations including placeholders, character limits, and validation. It includes built-in support for labels, helper text, and error states to guide merchants through data entry, ensuring accurate and efficient information capture across different retail scenarios.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `TextField` component.',
      type: 'NewTextFieldProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'text-field-thumbnail.png',
  defaultExample: {
    image: 'text-field-default.png',
    codeblock: generateCodeBlock('Name Input', 'text-field', 'name'),
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'guidelines',
      title: 'Guidelines',
      sectionContent: `
- When a merchant opens a new form, the first text field should be in a focused state.
- If the merchant is actively focused in a text field, then the keyboard should come up and the label should move to the top of the field.
- If focus goes away from the text field, then the keyboard should hide.
- Text fields always take up the full screen width.
- Text fields don’t change height. If text entered is longer than the width of the text field, then the oldest text on the left should be hidden to make room.
- When it makes sense, provide autocomplete options (for example, entering an address).
    `,
    },
    {
      type: 'Generic',
      anchorLink: 'content-guidelines',
      title: 'Content Guidelines',
      sectionContent: `
- If a text field is required, then it should indicate \`Required\`.
- Label titles should be brief and written in sentence case.
- Use the same terms for similar label titles throughout the app.
    `,
    },
  ],
};

export default data;
