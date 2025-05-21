import type {LandingTemplateSchema} from '@shopify/generate-docs';

// Order of data shape mimics visual structure of page
// Anything in an array can have multiple objects

const data: LandingTemplateSchema = {
  title: 'Upgrading to 2025-10',
  description: `This guide describes how to upgrade your customer account UI extension to API version \`2025-10\`.`,
  // The id for the page that is used for routing. If this documentation is for a primary landing page, confirm the id matches the reference name.
  id: 'upgrading-to-2025-10-rc',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'migrating-to-polaris-web-components',
      title: 'Migrating to Polaris web components',
      sectionContent:
        'Set the API version to `2025-10` in `shopify.extension.toml` to use the new Polaris UI framework (still in early preview). Use the comparison table below to see what Polaris web components are available today and how they map to legacy components.',
      sectionNotice: [
        {
          title: 'Early access preview',
          sectionContent: `These components are an early access preview of the [Polaris](https://shopify.dev/beta/next-gen-dev-platform/polaris) UI framework. We do not recommend migrating your production customer account UI extension to Polaris until the release is stable. However, now is a great time to explore this new version to begin mapping our your migration.`,
          type: 'info',
        },
      ],
    },
    {
      type: 'Markdown',
      anchorLink: 'mapping-legacy-components-to-polaris-web',
      title: 'Mapping Legacy components to Polaris web',
      sectionContent: `
|   **Legacy Component**   |   **Polaris Web Component**   |   **Migration Notes**   |
| :----------------------: | :-------------------------------: | :---------------------: |
|   \`Avatar\`                |   \`Avatar\`                                               |   Coming soon.                         |
|   \`Card\`                  |  [Section](/api/checkout-ui-extensions/2025-10-rc/polaris-web-components/section)                                             |   Available today.                     |
|   \`CustomerAccountAction\`  |  [CustomerAccountAction](/api/customer-account-ui-extensions/2025-10-rc/polaris-web-components/customeraccountaction)   |   Available today.       |
|   \`ImageGroup\`            |  [ImageGroup](/api/customer-account-ui-extensions/2025-10-rc/polaris-web-components/imagegroup)                         |   Available today.       |
|   \`Menu\`                  |  \`Menu\`                                                      |   Coming soon.       |
|   \`Page\`                  |  [Page](/api/customer-account-ui-extensions/2025-10-rc/polaris-web-components/page)    |   Available today. |
|   \`ResourceItem\`          |                                        |   Coming soon.  |
`,
    },
    {
      type: 'Generic',
      anchorLink: 'additional-components',
      title: 'Additional components',
      sectionContent:
        'In addition to the components above, you can also use Polaris web components in the Checkout library to build customer account UI extensions.',
      sectionCard: [
        {
          type: 'blocks',
          name: 'Checkout components',
          subtitle: 'More Polaris web components',
          url: '/docs/api/checkout-ui-extensions/2025-10-rc/upgrading-to-2025-10',
        },
      ],
    },
  ],
};

export default data;
