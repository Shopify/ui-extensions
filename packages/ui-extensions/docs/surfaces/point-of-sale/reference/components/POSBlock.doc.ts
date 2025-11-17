import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPOSBlock = (title: string, fileName: string) =>
  generateCodeBlock(title, 'pos-block', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'POSBlock',
  description:
    'The `POSBlock` component creates a container to place content with an action button. Use it to display structured content within POS block targets.\n\nThe component provides a standardized layout specifically designed for content blocks within POS detail views, with consistent padding, spacing, and optional action buttons. It integrates with the native POS design language, ensuring extension content feels cohesive with the core POS interface while maintaining clear content boundaries.\n\n`PosBlock` components provide consistent interaction patterns for action buttons across different block types, ensuring merchants can predict button behavior and location regardless of the specific POS context.',
  isVisualComponent: true,
  type: 'component',
  thumbnail: 'pos-block-thumbnail.png',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `POSBlock` component.',
      type: 'POSBlockProps',
    },
  ],
  category: 'Components',
  related: [],
  defaultExample: {
    image: 'pos-block-default.png',
    codeblock: generateCodeBlockForPOSBlock(
      'Render a POSBlock in post purchase',
      'default.example',
    ),
  },
};

export default data;
