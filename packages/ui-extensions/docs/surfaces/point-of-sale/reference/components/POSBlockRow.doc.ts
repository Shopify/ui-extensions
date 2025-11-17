import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPOSBlockRow = (title: string, fileName: string) =>
  generateCodeBlock(title, 'pos-block-row', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'POSBlockRow',
  description:
    "The `POSBlockRow` component renders individual rows within a `POSBlock` container. Use it to create structured content rows with optional tap interactions inside `POSBlock` components.\n\nThe component follows Shopify's design system specifications to ensure visual consistency across the POS interface. It includes built-in support for different device sizes and orientations, providing a reliable and familiar experience for merchants across various retail environments and use cases.\n\n`POSBlockRow` components handle edge cases and loading states gracefully, providing clear feedback during operations and maintaining interface responsiveness even when processing intensive tasks or handling large datasets.",
  isVisualComponent: true,
  type: 'component',
  thumbnail: 'pos-block-row-thumbnail.png',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `POSBlockRow` component.',
      type: 'POSBlockRowProps',
    },
  ],
  category: 'Components',
  related: [],
  defaultExample: {
    image: 'pos-block-row-default.png',
    codeblock: generateCodeBlockForPOSBlockRow(
      'Render a POSBlockRow in a POSBlock',
      'default.example',
    ),
  },
};

export default data;
