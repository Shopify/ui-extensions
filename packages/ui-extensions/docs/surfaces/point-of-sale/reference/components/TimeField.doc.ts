import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'TimeField',
  description:
    'Capture time input with a consistent interface for time selection and validation.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'TimeField',
      description: '',
      type: 'TimeFieldProps',
    },
  ],
  category: 'Components',
  related: [],
  defaultExample: {
    image: 'time-field-default.png',
    codeblock: generateCodeBlock('Time input', 'time-field', 'time-input'),
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'guidelines',
      title: 'Guidelines',
      sectionContent: `
- Use a smart default time for common selections.
      `,
    },
  ],
  thumbnail: 'time-field-thumbnail.png',
};

export default data;
