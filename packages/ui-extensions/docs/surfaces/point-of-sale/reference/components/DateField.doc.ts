import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'DateField',
  description:
    'The `DateField` component captures date input with a consistent interface for date selection and proper validation. Use it to collect date information in forms, scheduling interfaces, or data entry workflows.\n\n`DateField` components support both manual text entry and picker selection, giving merchants flexibility to choose their preferred input method based on personal preference and specific date entry scenarios.\n\nFor visual calendar-based selection, consider `DatePicker`. The component validates dates in real-time and provides clear error messages for invalid entries, preventing form submission errors and reducing the need for merchants to correct date inputs multiple times.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `DateField` component.',
      type: 'DateFieldProps',
    },
  ],
  category: 'Components',
  related: [],
  defaultExample: {
    image: 'date-field-default.png',
    codeblock: generateCodeBlock(
      'Capture date input with validation',
      'date-field',
      'date-input',
    ),
    description:
      'Collect date information using a text-based input field with built-in validation. This example shows how to implement a DateField that supports both manual text entry and picker selection, providing merchants with flexible date input options for scheduling, filtering, or data entry tasks.',
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
