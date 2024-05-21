import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'List',
  description:
    'The list is a scrollable component in which the list rows are rendered.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'List',
      description: '',
      type: 'ListProps',
    },
  ],
  category: 'Components',
  related: [],
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
