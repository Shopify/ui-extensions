import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {createComponentDoc} from '../../../../docs/shared/component-definitions';
import sharedContent from '../../../../docs/shared/components/Sheet';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  requires:
    'configuration of the [Customer Privacy](/docs/api/checkout-ui-extensions/latest/configuration#collect-buyer-consent) capability to be rendered.',
  definitions: {
    properties: true,
    events: true,
    slots: true,
    methods: true,
  },
  extraExamples: {
    description: '',
    examples: [
      {
        description:
          'Add decision buttons to a consent sheet for cookie preferences. This example demonstrates primary and secondary action slots with accept, reject, and learn-more buttons, plus an `accessibilityLabel` for screen readers.',
        codeblock: {
          title: 'Add action buttons to a consent sheet',
          tabs: [
            {
              code: './examples/sheet-with-actions.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  extraContent: [
    {
      type: 'Generic',
      anchorLink: 'shopify-controlled-surfaces',
      title: 'Shopify-controlled surfaces',
      sectionContent: `To prevent disruptions during checkout, we maintain strict design control over key areas of the Sheet component. These Shopify-controlled elements include:

<h3>Locations of elements</h3>

The Sheet elements (header, content, action buttons, and dismiss button) are strategically positioned and sized to present vital information upfront.

<img alt="Locations of header and content" src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-controlled-surfaces1.png" />

<img alt="Locations of dismiss button and actions" src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-controlled-surfaces2.png" />

<br>

<h3>Padding and spacing</h3>

<img alt="Padding and spacing" src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-controlled-surfaces3.png" />

<br>

<h3>Maximum height</h3>

To balance customer attention and task completion, a maximum height is set for the Sheet component.

<img alt="Small screen maximum height" src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-controlled-surfaces4.png" />

<img alt="Large screen maximum height" src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-controlled-surfaces5.png" />

When content pushes the sheet to exceed this limit, the following UI behaviors are triggered:

<br>

<h3>Heading and content are scrollable</h3>

<img alt="Heading and content are scrollable" src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-controlled-surfaces6.png" />

<br>

<h3>Expand pill appears to allow customers to view the entire content</h3>

<img alt="Expand pill to allow maximum height" src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-controlled-surfaces7.png" />

<br>

<h3>Actions slot and dismiss button remain fixed</h3>

<img alt="Actions slot and dismiss button remain fixed" src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-controlled-surfaces8.png" />
`,
    },
    {
      type: 'Generic',
      anchorLink: 'privacy-consent-requirements',
      title: 'Privacy consent requirements',
      sectionContent: `<h3>Content</h3>

For the best customer experience, ensure content is brief and to the point.

<img alt="Shows content that is brief and to the point" src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-content-recommendations1.png" />

Various strategies can be employed to avoid content scrolling.

<br>

<h4>Use short content</h4>

<img alt="Use short content" src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-content-recommendations2.png" />

<br>

<h4>Use small text size</h4>

<img alt="Use small text size" src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-content-recommendations3.png" />

<br>

<h4>Remove the header</h4>

<img alt="Remove the header" src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-content-recommendations4.png" />

<br>

<h3>Actions slot</h3>

The actions slots allows customers to make decisions and is split into primary and secondary sections.

<img alt="Actions slot" src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-content-recommendations5.png" />

<br>

<h3>Primary section</h3>

 Contains primary actions for customer decisions on the sheet's prompt. Up to two buttons are allowed. Keep the button's content brief so that it doesn't wrap to more than one line.

<img alt="Primary section" src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-content-recommendations6.png" />

<br>

<h3>Secondary section</h3>

Contains action that is unrelated to the sheet's prompt. Only one button is allowed. A modal can be activated when engaging with the secondary action. Keep the button's content brief so that it doesn't wrap to more than one line.

<img alt="Secondary section" src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-content-recommendations7.png" />

<br>

<h3>Consent, denial of consent, and sheet dismissal</h3>

 <h4>Consent</h4>

When a customer expresses consent by pressing the acceptance button, cookies will load and the sheet should not re-appear on refresh.

<br>

<h4>Denial of consent</h4>

When a customer expresses denial of consent by pressing the rejection button, cookies will not load and the sheet will not re-appear on refresh.

<br>

<h4>Sheet dismissal</h4>

When a customer neither grants nor denies consent by pressing the dismiss button, cookies will not load and the sheet will re-appear on refresh.

<img alt="Sheet dismissal" src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-content-recommendations8.png" />`,
    },
  ],
});

export default data;
