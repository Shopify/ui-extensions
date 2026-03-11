import type {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'Sheet',
  description: `
The Sheet component displays essential information for customers at the bottom of the screen, appearing above other elements. Use it sparingly to avoid distracting customers during checkout. This component requires access to [Customer Privacy API](/docs/api/checkout-ui-extensions/latest/configuration#collect-buyer-consent) to be rendered.

The library automatically applies the [WAI-ARIA Dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) to both the activator and the sheet content.`,
  category: 'Polaris web components',
  subCategory: 'Overlays',
  related: [],
};

export default data;
