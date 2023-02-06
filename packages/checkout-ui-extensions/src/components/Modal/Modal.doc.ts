import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Modal',
  description:
    'Modals are a special type of overlay that shift focus towards a specific action/set of information before the main flow can proceed. They must be specified inside the `overlay` prop of an activator component (`Button`, `Link` or `Pressable`).\n\nThe library takes care of applying the WAI-ARIA Dialog pattern automatically for the activator and the modal content.',
  requires: '',
  thumbnail: 'modal-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ModalProps',
      description: '',
      type: 'ModalProps',
    },
  ],
  category: 'Components',
  subCategory: 'Overlays',
  defaultExample: {
    image: 'modal-default.png',
    codeblock: {
      title: 'Basic Modal',
      tabs: [
        {
          title: 'React',
          code: '../../../../checkout-ui-extensions-react/src/components/Modal/examples/basic-modal.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-modal.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [],
};

export default data;
