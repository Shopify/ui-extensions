import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'NumberField',
  description:
    'The `NumberField` component captures numeric input with built-in validation. Use it to collect quantity, price, or other numeric information with proper validation.\n\nThe component includes built-in number validation, optional min/max constraints, and step increments to ensure accurate numeric data entry. It supports various number formats including integers and decimals, with validation feedback to prevent entry errors during high-volume retail operations.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `NumberField` component.',
      type: 'NumberFieldProps',
    },
  ],
  category: 'Components',
  related: [],
  defaultExample: {
    image: 'number-field-default.png',
    codeblock: generateCodeBlock(
      'Capture numeric input with validation',
      'number-field',
      'number-input',
    ),
    description:
      'Collect numeric data with built-in validation and constraints. This example shows how to implement a NumberField that supports integers and decimals, enforces min/max values, and provides step increments for quantity, price, or measurement inputs.',
  },
  thumbnail: 'number-field-thumbnail.png',
};

export default data;
