import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Banner',
  description:
    'A banner informs merchants about important changes or persistent conditions. Use if you need to communicate to merchants in a prominent way, without blocking other actions.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Banner',
      description: '',
      type: 'BannerProps',
    },
  ],
  category: 'Components',
  related: [],
};

export default data;
