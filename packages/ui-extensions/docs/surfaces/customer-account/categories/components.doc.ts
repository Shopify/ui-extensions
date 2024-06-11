import {CategoryTemplateSchema} from '@shopify/generate-docs';

const data: CategoryTemplateSchema = {
  category: 'components',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'additional-components',
      title: 'Additional components',
      sectionContent:
        'In addition to the components below, you can also use checkout components to build customer account UI extensions.',
      sectionCard: [
        {
          type: 'blocks',
          name: 'Checkout components',
          subtitle: 'More components',
          url: 'https://shopify.dev/docs/api/checkout-ui-extensions/unstable/components',
        },
      ],
    },
  ],
};

export default data;
