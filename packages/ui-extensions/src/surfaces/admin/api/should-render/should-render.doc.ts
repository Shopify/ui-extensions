import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Should Render API',
  description:
    'The Should Render API lets you [conditionally show or hide admin action extensions](/docs/apps/build/admin/actions-blocks/hide-extensions) dynamically. Use this API to control action visibility based on resource state, user permissions, or business logic.',
  isVisualComponent: false,
  type: 'API',
  definitions: [
    {
      title: 'ShouldRenderApi',
      description:
        'The `ShouldRenderApi` object provides methods for controlling action extension visibility. Access these properties through the API to determine whether an associated action should appear based on the current context.',
      type: 'ShouldRenderApi',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Utility APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Keep logic simple and fast:** `shouldRender` runs on every page load, so use efficient checks and avoid expensive operations or API calls.\n' +
        '- **Validate context data:** Check the `api.data.selected` property to ensure resource IDs are available before evaluating rendering logic.\n' +
        '- **Return boolean values:** Always return `true` or `false` explicitly to control action visibility predictably.\n' +
        '- **Handle errors gracefully:** If evaluation fails, return `false` to hide the action rather than showing broken functionality.\n' +
        '- **Use for meaningful conditions:** Only implement `shouldRender` when you have specific criteria for showing/hiding actions.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- `should-render` targets execute synchronously on page load. Asynchronous operations like API calls aren't supported.\n" +
        '- Evaluation must complete quickly to avoid degrading page performance.',
    },
  ],
};

export default data;
