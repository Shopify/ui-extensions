import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getLinksByTag,
  STANDARD_API_PROPERTIES_DESCRIPTION,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Extension',
  description: 'The API for interacting with the metadata of an extension.',
  isVisualComponent: false,
  category: 'APIs',
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description: STANDARD_API_PROPERTIES_DESCRIPTION,
      type: 'Docs_Standard_ExtensionMetaApi',
    },
    {
      title: 'useExtension',
      description: 'Returns the metadata about the extension.',
      type: 'UseExtensionGeneratedType',
    },
    {
      title: 'useExtensionData',
      description: `Returns the metadata about the extension. This is deprecated, use \`useExtension()\` instead.`,
      type: 'UseExtensionDataGeneratedType',
    },
    {
      title: 'useExtensionCapabilities',
      description: "Returns a list of an extension's granted capabilities.",
      type: 'UseExtensionCapabilitiesGeneratedType',
    },
    {
      title: 'useExtensionCapability',
      description:
        'Returns whether or not a given capability of an extension is granted.',
      type: 'UseExtensionCapabilityGeneratedType',
    },
    {
      title: 'useExtensionEditor',
      description:
        'Returns information about the editor where the extension is being rendered.',
      type: 'UseExtensionEditorGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
