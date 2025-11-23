import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'List',
  description:
    'The `List` component displays structured data in rows with rich content including labels, subtitles, badges, images, and interactive elements. Use it to present organized information with consistent formatting and user interaction capabilities.\n\nList items no longer have dividers as of POS version 10.0.0.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `List` component.',
      type: 'ListProps',
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
  thumbnail: 'list-thumbnail.png',
  defaultExample: {
    image: 'list-default.png',
    codeblock: generateCodeBlock('Show a list of items', 'list', 'products'),
    description:
      'Present organized information with rich content in a consistent format. This example shows how to create a List with labels, subtitles, badges, images, and interactive elements, ideal for displaying products, orders, customers, or other structured data with tap interactions.',
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'guidelines',
      title: 'Guidelines',
      sectionContent: `
List items have a wide variety of use cases:

- To display and link to an object | Examples: an item in the cart, a customer in the customer list
- To display information | Examples: the payment breakdown in an order, staff contact information
- To display a menu item | Examples: an item on the first page of settings, an item in “More actions”
- To display a setting
- To display an action related to other items in the section
- To show a selectable option | Example: one filter option
- To display an external link
    `,
    },
    {
      type: 'Generic',
      anchorLink: 'content-guidelines',
      title: 'Content Guidelines',
      sectionContent: `
Subtitles:

- Each subtitle should have a different piece of information. Don't use dashes to display more than one type of information on the same line.
- Subtitles should be shown in order of relevance.
- If you're showing the results of the form, the label should be the form field title and the subtitle should be the information the merchant entered.
    `,
    },
  ],
};

export default data;
