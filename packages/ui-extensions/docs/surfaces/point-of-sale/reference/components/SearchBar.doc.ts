import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'SearchBar',
  description:
    'The SearchBar component provides a specialized input field for search functionality with built-in search button and text change handling. Use it to enable product searches, customer lookups, or other search-driven workflows in POS interfaces.\n\nThe component includes a dedicated search input with built-in search icon, clear button, and cancel functionality following platform-specific search patterns. It provides visual feedback for search states, supports voice input where available, and integrates with platform search behaviors to deliver familiar search experiences on both iOS and Android POS devices.\n\nSearchBar components maintain search focus during typing and automatically dismisses the keyboard when search is submitted, streamlining the search workflow and reducing unnecessary interaction steps.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the SearchBar component.',
      type: 'SearchBarProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Navigation and content',
  related: [],
  thumbnail: 'search-bar-thumbnail.png',
  defaultExample: {
    image: 'search-bar-default.png',
    codeblock: generateCodeBlock(
      'Add search functionality',
      'search-bar',
      'default.example',
    ),
    description:
      'Implement search functionality with a specialized input field. This example shows a SearchBar with built-in search icon, clear button, and text change handling, enabling product searches, customer lookups, or other search-driven workflows following platform-specific patterns.',
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Implement sticky behavior for persistent access:** Make search bars sticky so they remain at the top of the page when merchants scroll.\n- **Handle focus states with proper visual feedback:** When merchants select the search bar, ensure it enters the focused state with a blue border and the search icon changes to a back arrow.\n- **Optimize inline search bar positioning:** For inline search bars, entering the focused state should move the search bar to the top of the screen for better visibility and easier interaction, especially when the on-screen keyboard appears.\n- **Manage search query states effectively:** When merchants start entering text, transition the search bar to the filled state. Implement clear functionality (X button) that deletes the search query but keeps the search bar in focused state, allowing immediate entry of new search terms.\n- **Write effective placeholder text:** Use the pattern Search \`{items}\` for placeholder text (for example, Search staff not just Search). This clearly communicates what type of content can be searched and sets proper user expectations.\n- **Implement responsive search patterns:** Use \`onTextChange\` for real-time search experiences like autocomplete or instant filtering, and \`onSearch\` for explicit search actions. Consider implementing debouncing for text change events to avoid excessive API calls during typing.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- SearchBar provides the input interface but requires integration with the Product Search API or custom search logic for actual search functionality.\n- The component handles basic text input and search button interactions—advanced search features like filters, sorting controls, or search history require additional components or custom implementation.\n- Search result display and management are not included in the SearchBar component—use other components like List or custom layouts to present search results to users.\n`,
    },
  ],
};

export default data;
