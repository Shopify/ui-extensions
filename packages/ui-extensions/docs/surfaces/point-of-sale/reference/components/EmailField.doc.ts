import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'EmailField',
  description:
    'The `EmailField` component captures email address input from customers with built-in validation. Use it to collect email information in forms, customer profiles, or contact workflows.\n\nThe component includes built-in email format validation using standard email patterns to ensure data quality. It provides real-time feedback on invalid entries and supports features like autocomplete and keyboard optimization for email input, helping merchants quickly capture valid customer contact information during checkout or registration workflows.\n\n`EmailField` components integrate with browser autocomplete features to speed up email entry by suggesting previously used addresses, significantly reducing typing time during customer registration workflows.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `EmailField` component.',
      type: 'EmailFieldProps',
    },
  ],
  defaultExample: {
    image: 'email-field-default.png',
    codeblock: generateCodeBlock(
      'Capture email input with validation',
      'email-field',
      'email-input',
    ),
    description:
      'Capture customer email addresses with built-in format validation. This example shows how to implement an EmailField that validates email syntax in real-time, provides autocomplete support, and optimizes the keyboard for email entry, ensuring accurate customer contact information.',
  },
  category: 'Components',
  related: [],
  thumbnail: 'email-field-thumbnail.png',
};

export default data;
