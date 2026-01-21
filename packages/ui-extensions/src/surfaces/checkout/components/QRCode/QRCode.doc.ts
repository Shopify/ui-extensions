import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/QRCode';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  bestPractices: `
- Always test that the QR code is scannable from a smartphone.
- Include a square logo if that’s what your customers are familiar with.
- Increase usability by adding a text description of what the QR code does.
- Always provide an alternate method for customers to access the content of the QR code.
- If the content is a URL, provide a [\`s-link\`](/docs/api/checkout-ui-extensions/components/link) nearby.
- If the content is data, provide a [\`s-button\`](/docs/api/checkout-ui-extensions/components/button) to copy the data to the clipboard, or show the data in a readonly [\`s-text-field\`](/docs/api/checkout-ui-extensions/components/textfield).`,
});

export default data;
