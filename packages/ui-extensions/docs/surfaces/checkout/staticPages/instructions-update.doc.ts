import type {LandingTemplateSchema} from '@shopify/generate-docs';

const exampleCodePath = '../reference/examples/cart-instructions';

const data: LandingTemplateSchema = {
  title: 'Updating to 2024-10',
  description: `
Some checkouts may be created with [cart instructions](/docs/api/checkout-ui-extensions/apis/cart-instructions) that prevent buyers from making certain changes to their checkout.

As of version \`2024-07\`, UI extensions must check for instructions before calling select APIs, to properly handle checkouts where those APIs are not available.

> Caution: As of **July 22nd, 2024**, all UI extensions on this version will render in **draft order** invoice checkouts. As draft order invoice checkouts have restrictions on what buyers can edit, UI extensions in draft order invoice checkouts will be subject to cart instructions.

`,
  id: 'instructions-update',

  sections: [
    {
      type: 'Generic',
      anchorLink: 'instruction-checking',
      title: 'Required instruction checking',
      sectionCard: [
        {
          name: 'Cart Instructions API',
          subtitle: 'Learn more',
          url: '/docs/api/checkout-ui-extensions/apis/cart-instructions',
          type: 'blocks',
        },
      ],
      sectionNotice: [
        {
          type: 'warning',
          title: 'Caution',
          sectionContent:
            "If you don't check for instructions, the APIs will return an error when they're not available in a given checkout",
        },
      ],
      sectionContent: `
    You will need to check for cart instructions before calling the following APIs:

| Extension API | As of July 2024 |
|  ----  |  ----- |
| applyAttributeChange() | Attributes cannot be modified on draft order checkouts. |
| applyShippingAddressChange() | Buyers cannot change the address on a draft order checkout if it has fixed shipping rates. |
| applyDiscountCodeChange() | By default, discounts cannot be modified in draft order checkouts. Merchants must allow it via a setting on the draft order. |
| applyCartLinesChange() | Cart lines cannot be modified on draft order checkouts. |
| applyMetafieldChange() | Cart metafields cannot be modified on draft order checkouts. Metafields can still be modified. |
| applyNoteChange() | Notes cannot be modified on draft order checkouts. |
  `,
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'migrating-apis',
      title: 'Checking for cart instructions',
      sectionContent:
        'Use the cart instructions API to determine if the affected APIs are available in checkout.',
      accordionContent: [
        {
          title: 'Changes to applyAttributeChange()',
          description: `
  Check \`instructions.attributes.canUpdateAttributes\` before calling \`applyAttributeChange()\`.
  `,
          codeblock: {
            title: 'Migrating applyAttributeChange()',
            tabs: [
              {
                title: 'React',
                code: `${exampleCodePath}/attributes.example.tsx`,
                language: 'jsx',
              },
              {
                title: 'JavaScript',
                code: `${exampleCodePath}/attributes.example.ts`,
                language: 'js',
              },
            ],
          },
        },
        {
          title: 'Changes to applyShippingAddressChange()',
          description: `
  Check \`instructions.delivery.canSelectCustomAddress\` before calling \`applyShippingAddressChange()\`. When \`true\`, this instruction implies that extensions can change the shipping address.
  `,
          codeblock: {
            title: 'Migrating applyShippingAddressChange()',
            tabs: [
              {
                title: 'React',
                code: `${exampleCodePath}/delivery.example.tsx`,
                language: 'jsx',
              },
              {
                title: 'JavaScript',
                code: `${exampleCodePath}/delivery.example.ts`,
                language: 'js',
              },
            ],
          },
        },
        {
          title: 'Changes to applyDiscountCodeChange()',
          description: `
  Check \`instructions.discounts.canUpdateDiscountCodes\` before calling \`applyDiscountCodeChange()\`.
  `,
          codeblock: {
            title: 'Migrating applyDiscountCodeChange()',
            tabs: [
              {
                title: 'React',
                code: `${exampleCodePath}/discounts.example.tsx`,
                language: 'jsx',
              },
              {
                title: 'JavaScript',
                code: `${exampleCodePath}/discounts.example.ts`,
                language: 'js',
              },
            ],
          },
        },
        {
          title: 'Changes to applyCartLinesChange()',
          description: `
Check \`instructions.lines.canAddCartLine\` or \`instructions.lines.canRemoveCartLine\` or \`instructions.lines.canUpdateCartLine\` before calling \`applyCartLinesChange()\`.
`,
          codeblock: {
            title: 'Migrating applyCartLinesChange()',
            tabs: [
              {
                title: 'React',
                code: `${exampleCodePath}/cart-lines-add.example.tsx`,
                language: 'jsx',
              },
              {
                title: 'JavaScript',
                code: `${exampleCodePath}/cart-lines-add.example.ts`,
                language: 'js',
              },
            ],
          },
        },
        {
          title: 'Changes to applyMetafieldChange()',
          description: `
Check \`instructions.metafields.canSetCartMetafields\` or \`instructions.metafields.canDeleteCartMetafields\` before calling \`applyMetafieldChange()\` if you are working with cart metafields.
`,
          codeblock: {
            title: 'Migrating applyMetafieldChange()',
            tabs: [
              {
                title: 'React',
                code: `${exampleCodePath}/metafields.example.tsx`,
                language: 'jsx',
              },
              {
                title: 'JavaScript',
                code: `${exampleCodePath}/metafields.example.ts`,
                language: 'js',
              },
            ],
          },
        },
        {
          title: 'Changes to applyNoteChange()',
          description: `
Check \`instructions.notes.canUpdateNote\` before calling \`applyNoteChange()\`.
`,
          codeblock: {
            title: 'Migrating applyNoteChange()',
            tabs: [
              {
                title: 'React',
                code: `${exampleCodePath}/notes.example.tsx`,
                language: 'jsx',
              },
              {
                title: 'JavaScript',
                code: `${exampleCodePath}/notes.example.ts`,
                language: 'js',
              },
            ],
          },
        },
      ],
    },
  ],
};

export default data;
