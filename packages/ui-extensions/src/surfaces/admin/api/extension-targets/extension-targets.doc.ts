import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Targets',
  description:
    'This is a list of all the available extension targets for Admin UI extensions.',
  isVisualComponent: false,
  type: 'API',
  definitions: [
    {
      title: 'ExtensionTargets',
      description: '',
      type: 'ExtensionTargets',
    },
  ],
  category: 'API',
  related: [],
};

export default data;
