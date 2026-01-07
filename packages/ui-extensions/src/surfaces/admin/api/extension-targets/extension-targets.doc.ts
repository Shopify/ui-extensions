import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Targets',
  description:
    'This is a list of all the available targets for Admin UI extensions.',
  isVisualComponent: false,
  type: 'ExtensionTargets',
  definitions: [
    {
      title: 'ExtensionTargets',
      description: '',
      type: 'ExtensionTargets',
    },
  ],
  category: 'Targets',
  related: [],
};

export default data;
