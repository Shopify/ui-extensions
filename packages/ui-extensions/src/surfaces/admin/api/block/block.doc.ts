import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Block Extension API',
  description:
    'The Block Extension API lets you [build block extensions](/docs/apps/build/admin/actions-blocks/build-admin-block) that display inline content directly within admin pages. Use this API to show contextual information, tools, or actions related to the current page without requiring merchants to open a modal.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [`AdminBlock`](/docs/api/admin-extensions/{API_VERSION}/polaris-web-components/settings-and-templates/adminblock) component.',
  definitions: [
    {
      title: 'BlockExtensionApi',
      description:
        'The `BlockExtensionApi` object provides methods for block extensions that render inline content on admin pages. Access these properties through the API to interact with the current context and navigate to other extensions.',
      type: 'BlockExtensionApi',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Core APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Keep content contextual:** Display information relevant to the current page and resource being viewed to provide immediate value to merchants.\n' +
        '- **Validate context data:** Check the `api.data.selected` property to ensure you have the expected resource IDs before fetching or displaying data.\n' +
        '- **Handle loading states:** Display appropriate loading indicators when your block is fetching data or processing operations.\n' +
        '- **Design for varied placements:** Blocks can appear alongside other extensions, so design UI that works in different contexts and viewport sizes.\n' +
        '- **Use navigation effectively:** Use the `api.navigation` property to navigate between extensions and create seamless workflows within your block.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- Block extensions render inline within Shopify admin pages and share space with other extensions.\n' +
        "- You can't configure a block's placement order or exclusive positioning on the page.",
    },
  ],
};

export default data;
