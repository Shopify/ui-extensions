import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'TimeField',
  description:
    'The `TimeField` component captures time input from merchants with a consistent interface for time selection and proper validation. Use it to collect time information in scheduling, booking, or data entry workflows.\n\nThe component supports both 12-hour and 24-hour time formats based on locale settings, with built-in validation to ensure valid time entries. It includes features like time picker integration, keyboard shortcuts, and formatted display to streamline time entry for scheduling, appointment booking, and time-sensitive operations in retail environments.\n\n`TimeField` components respects merchant locale settings for default time format preferences while allowing manual override for specific use cases that require alternative formats.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `TimeField` component.',
      type: 'TimeFieldProps',
    },
  ],
  category: 'Components',
  related: [],
  defaultExample: {
    image: 'time-field-default.png',
    codeblock: generateCodeBlock(
      'Capture time input with validation',
      'time-field',
      'time-input',
    ),
    description:
      'Collect time information using a text-based input field with built-in validation. This example shows a TimeField that supports both 12-hour and 24-hour formats based on locale, with time picker integration and keyboard shortcuts for scheduling and time-sensitive operations.',
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
