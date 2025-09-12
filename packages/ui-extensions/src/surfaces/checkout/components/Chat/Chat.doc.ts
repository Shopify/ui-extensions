import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Chat',
  description: `
Use the Chat component to create real-time chat applications.

> Note: The Chat component can only be added to the chat targets of [checkout](/docs/api/checkout-ui-extensions/latest/targets/overlays/purchase-checkout-chat-render) and [Thank you](/docs/api/checkout-ui-extensions/latest/targets/overlays/purchase-thank-you-chat-render) pages.
`,
  requires:
    'access to the **Chat in checkout extensions** scope. Request access in the Partner Dashboard.',
  category: 'Polaris web components',
  subCategory: 'Overlays',
  related: [],
  isVisualComponent: true,
  thumbnail: 'chat-thumbnail.png',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ChatProps',
    },
  ],
  defaultExample: {
    image: 'chat-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-chat.example.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [],
};

export default data;
