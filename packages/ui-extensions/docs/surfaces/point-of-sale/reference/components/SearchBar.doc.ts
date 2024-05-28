import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'SearchBar',
  description:
    'The search bar lets merchants enter search queries for objects throughout the app.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'SearchBar',
      description: '',
      type: 'SearchBarProps',
    },
  ],
  category: 'Components',
  related: [
    {
      name: 'ProductSearch API',
      subtitle:
        'See how to use the ProductSearch API with a SearchBar to search for products.',
      url: '/api/pos-ui-extensions/apis/productsearch-api#example-search-for-products-with-a-search-bar',
    },
  ],
  defaultExample: {
    codeblock: generateCodeBlock('SearchBar', 'searchbar', 'default.example'),
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'guidelines',
      title: 'Guidelines',
      sectionContent: `
- The global search bar should appear at the very top of a view, above the header. This is because it searches for things beyond the scope of that page.
- The inline search bar should appear at the top of a list, but under the header.
- The search bar should be sticky and remain at the top of the page when the merchant scrolls.
- When a merchant selects the search bar, the bar enters the focused state.
- When entering the focused state, the border turns blue and the search icon changes to a back arrow icon. Selecting the back arrow lets merchants return to the default state.
- If it's an inline search bar, entering focused state should also move the search bar to the top of the screen.
- When a merchant starts entering a search query, the bar enters the filled state.
- Selecting the **X** deletes the merchant's search query, but keeps them in the focused state so that they can immediately enter a new search query.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'content-guidelines',
      title: 'Content guidelines',
      sectionContent: `
For the placeholder text, use the pattern: "Search {items}"

✅ Search staff
❌ Search
      `,
    },
  ],
};

export default data;
