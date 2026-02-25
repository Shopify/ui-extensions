import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForCartLineItemApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'cart-line-item-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Cart Line Item API',
  description:
    'The Cart Line Item API provides read-only access to a specific line item in the cart. Use this API to get line item details like product information, pricing, discounts, and custom properties. This allows you to build features that respond to the specific item a customer is viewing or interacting with.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `CartLineItemApi` object provides access to line item data. Access these properties through `api.lineItem` to retrieve information about the specific cart line item in context.',
      type: 'CartLineItemApi',
    },
  ],
  examples: {
    description:
      'Learn how to access line item information and build contextual experiences based on specific cart items.',
    examples: [
      {
        codeblock: generateCodeBlockForCartLineItemApi(
          'Get the current line item ID',
          'id',
        ),
        description:
          "Retrieve the unique identifier of the cart line item currently associated with the extension's context. This example shows how to access the line item ID from line item detail screens, enabling you to fetch additional item data, implement custom actions, or track item-specific operations.",
      },
    ],
  },
  category: 'Target APIs',
  subCategory: 'Contextual APIs',
  related: [],

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Use line item context effectively:** Use the line item data to create contextual experiences—for example, showing different interfaces for gift cards versus regular products, or displaying vendor-specific information.\n- **Implement item-specific validation:** Use line item properties like \`taxable\` and \`isGiftCard\` to implement appropriate validation and business logic for different item types.\n- **Access related data efficiently:** Use \`productId\` and \`variantId\` to fetch additional product information when needed, but avoid unnecessary API calls by using the data already available in the line item.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- The API provides read-only access to line item data—use the Cart API for modifying line item properties, discounts, or other attributes.\n- Line item data reflects the current state and may not include real-time inventory or pricing updates until the cart is refreshed.\n`,
    },
  ],
};

export default data;
