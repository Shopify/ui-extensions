import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ConsentPhoneField',
  description:
    'Display a phone field for customers to sign up for text message marketing, noting that the phone field value will be automatically saved during checkout.',
  thumbnail: 'consent-phonefield-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ConsentPhoneFieldProps',
      description: '',
      type: 'ConsentPhoneFieldProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'consent-phonefield-default.png',
    codeblock: {
      title: 'Basic ConsentPhoneField',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/ConsentPhoneField/examples/basic-consent-phone-field.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-consent-phone-field.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [
    {
      name: 'ConsentCheckbox',
      subtitle: 'Component',
      url: 'consent-checkbox',
      type: 'Component',
    },
  ],
};

export default data;
