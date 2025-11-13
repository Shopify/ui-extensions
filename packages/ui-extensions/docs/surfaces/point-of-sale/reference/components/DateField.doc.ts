import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'DateField',
  description:
    'Capture date input with a consistent interface for date selection and proper validation.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'DateField',
      description: '',
      type: 'DateFieldProps',
    },
  ],
  category: 'Components',
  related: [],
  defaultExample: {
    image: 'date-field-default.png',
    codeblock: generateCodeBlock('Date input', 'date-field', 'date-input'),
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'guidelines',
      title: 'Guidelines',
      sectionContent: `
- Use a smart default date for common selections.
      `,
    },
  ],
  thumbnail: 'date-field-thumbnail.png',
};

export default data;
