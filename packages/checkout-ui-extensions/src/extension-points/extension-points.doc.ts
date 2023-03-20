import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ExtensionPoints',
  overviewPreviewDescription: 'The extension points and the APIs they provide.',
  description:
    'A UI extension will register for one or more [extension points](/docs/api/checkout-ui-extensions/extension-points-overview) using `shopify.extend()`. \n\nAn extension point in a UI extension is a plain JavaScript function. This function receives some API for interacting with the application, and is expected to return a value in a specific shape. \n\nThe input arguments and the output type are different for each extension point.',
  isVisualComponent: false,
  category: 'APIs',

  definitions: [
    {
      title: 'Types of extension points',
      description:
        'To see a visual representation of the extension points, see [Extension points overview](/docs/api/checkout-ui-extensions/extension-points-overview#supported-locations).',
      type: 'ExtensionPoints',
    },
  ],
  defaultExample: getExample('extension-points', ['react', 'js'], __dirname),

  related: getLinksByTag('apis', 'ExtensionPoints'),
};

export default data;
