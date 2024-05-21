import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'DateField',
  description:
    'A component that enables users to open a dialog and select a date through a text input.',
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
    codeblock: generateCodeBlock('Date Input', 'date-field', 'date-input'),
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
};

export default data;
