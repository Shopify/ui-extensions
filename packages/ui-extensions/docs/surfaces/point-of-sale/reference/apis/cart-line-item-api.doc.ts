import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForCartLineItemApi = (
  title: string,
  fileName: string,
) => generateJsxCodeBlock(title, 'cart-line-item-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Cart Line Item API',
  description:
    'The Cart Line Item API provides read-only access to a specific line item in the cart. Use this API to get line item details like product information, pricing, discounts, and custom properties. This allows you to build features that respond to the specific item a customer is viewing or interacting with.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'CartLineItemApi',
      description:
        'The `CartLineItemApi` object provides access to the current line item. Access this property through `api.cartLineItem` to interact with the current line item context.',
      type: 'CartLineItemApi',
    },
  ],
  examples: {
    description:
      'Learn how to access line item information in cart line item action contexts.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForCartLineItemApi(
          'Retrieve the line item ID',
          'id',
        ),
        description:
          'Access the unique identifier of the current cart line item in line item detail contexts. This example shows how to use `shopify.cartLineItem.id` to retrieve the line item ID. This can be used for modifying the item, applying discounts, or implementing item-specific functionality.',
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
      sectionContent: `
- **Handle optional properties:** Check for \`undefined\` in optional properties like \`price\`, \`productId\`, \`title\`, \`sku\`, and vendor before use.
- **Create contextual experiences:** Use line item data to show different interfaces for gift cards, subscriptions, or vendor-specific information.
- **Implement item-specific validation:** Use properties like \`taxable\`, \`isGiftCard\`, and \`requiresSellingPlan\` for appropriate business logic.
- **Handle selling plans:** When working with subscriptions, check \`requiresSellingPlan\` and \`sellingPlan\` to provide appropriate subscription management.
- **Access related data efficiently:** Use \`productId\` and \`variantId\` to fetch additional info when needed, but avoid unnecessary API calls.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- Line item data reflects the current state and may not include real-time inventory, pricing, or selling plan updates until the cart is refreshed.
- Selling plan information may be limited during refund or exchange operations where digest values aren't available.
`,
    },
  ],
};

export default data;
