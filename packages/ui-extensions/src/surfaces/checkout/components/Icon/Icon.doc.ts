import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Icon',
  description:
    'Icons are pictograms or graphic symbols. They can act as wayfinding tools or as a means of communicating functionality.',
  thumbnail: 'icon-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'IconProps',
    },
  ],
  category: 'Components',
  subCategory: 'Media',
  defaultExample: {
    image: 'icon-default.png',
    codeblock: {
      title: 'Basic Icon',
      tabs: [
        {
          code: './examples/basic-icon.example.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'icons',
      title: 'Icons',
      sectionContent:
        '<img src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/icon-all.png" />',
    },
  ],
  related: [],
};

export default data;
