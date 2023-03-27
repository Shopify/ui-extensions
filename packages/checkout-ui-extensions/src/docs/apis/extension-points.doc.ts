import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ExtensionPoints',
  overviewPreviewDescription: 'The extension points and the APIs they provide.',
  description: `
A UI extension will register for one or more [extension points](/docs/api/checkout-ui-extensions/extension-points-overview) using \`shopify.extend()\`.

An extension point in a UI extension is a plain JavaScript function. This function receives some API for interacting with the application, and is expected to return a value in a specific shape.

The input arguments and the output type are different for each extension point.
  `,
  isVisualComponent: false,
  category: 'APIs',
  definitions: [
    {
      title: 'Types of extension points',
      description:
        'See a [visual representation](/docs/api/checkout-ui-extensions/extension-points-overview#supported-locations) of each extension point.',
      type: 'ExtensionPoints',
    },
  ],
  defaultExample: getExample('extension-points', ['jsx', 'js']),
  related: getLinksByTag('apis', 'ExtensionPoints'),
};

export default data;
