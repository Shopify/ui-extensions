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
          'Display the line item ID',
          'id',
        ),
        description:
          'Access the unique identifier of the current line item in a cart line item action context. This example shows how to use `shopify.cartLineItem.id` to retrieve the line item ID, which can be used for tracking, analytics, or performing operations on the specific item.',
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
      sectionContent:
        '- **Handle optional properties gracefully:** Check for `undefined` values in optional properties like `price`, `productId`, `title`, `sku`, `vendor`, and selling plan-related fields before using them in your extension logic.\n' +
        '- **Use line item context effectively:** Use the line item data to create contextual experiences—for example, showing different interfaces for gift cards versus regular products, subscription items versus one-time purchases, or displaying vendor-specific information.\n' +
        '- **Implement item-specific validation:** Use line item properties like `taxable`, `isGiftCard`, `requiresSellingPlan`, and `hasSellingPlanGroups` to implement appropriate validation and business logic for different item types.\n' +
        '- **Handle selling plans appropriately:** When working with subscription products, check `requiresSellingPlan` and `sellingPlan` properties.\n' +
        '- **Access related data efficiently:** Use `productId` and `variantId` to fetch additional product information when needed, but avoid unnecessary API calls by using the data already available in the line item.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- The API provides read-only access to line item data—use the Cart API for modifying line item properties, discounts, selling plans, or other attributes.\n' +
        '- Line item data reflects the current state and may not include real-time inventory, pricing, or selling plan updates until the cart is refreshed.\n' +
        "- Selling plan information may be limited during refund or exchange operations where digest values aren't available.",
    },
  ],
};

export default data;
