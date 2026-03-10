import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/QRCode';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  bestPractices: `- Always test that the QR code scans correctly from a smartphone.
- Use a square logo when customers expect one.
- Add a short text description of what the QR code does.
- Provide an alternative way to access the content:
  - For URLs: add an \`s-link\` nearby.
  - For data: add an \`s-button\` to copy to clipboard, or show it in a readonly \`s-text-field\`.`,
});

export default data;
