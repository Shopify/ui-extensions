import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'CustomerSegmentTemplate',
  description:
    'CustomerSegmentTemplate is used to configure a template rendered in the **Customers** section of the Shopify admin. Templates can be applied in the [customer segment editor](https://help.shopify.com/en/manual/customers/customer-segmentation/customer-segments) and used to create segments.',
  requires:
    'use of the [admin.customers.segmentation-templates.render](/docs/api/admin-extensions/api/extension-targets#extensiontargets-propertydetail-admincustomerssegmentationtemplatesrender) target.',
  isVisualComponent: true,
  thumbnail: 'customersegmenttemplate-thumbnail.png',
  type: '',
  definitions: [
    {
      title: 'CustomerSegmentTemplateProps',
      description: '',
      type: 'CustomerSegmentTemplateProps',
    },
  ],
  category: 'Components',
  subCategory: 'Other',
  defaultExample: {
    image: 'customersegmenttemplate-default',
    codeblock: {
      title: 'Simple CustomerSegmentTemplate implementation',
      tabs: [
        {
          title: 'JS',
          code: './examples/customersegmenttemplate.example.ts',
          language: 'js',
        },
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/CustomerSegmentTemplate/examples/customersegmenttemplate.example.tsx',
          language: 'tsx',
        },
      ],
    },
  },
  related: [],
};

export default data;
