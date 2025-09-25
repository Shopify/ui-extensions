import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/ChoiceList';
import choiceSharedContent from '../../../../docs/shared/components/Choice';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: 'choice-list-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ChoiceListElementProps',
    },
    {
      title: 'Events',
      description: '',
      type: 'ChoiceListElementEvents',
    },
    {
      title: choiceSharedContent.name,
      description: choiceSharedContent.description,
      type: 'ChoiceProps',
    },
    {
      title: 'Slots',
      description: '',
      type: 'ChoiceElementSlots',
    },
  ],
  defaultExample: {
    image: 'choice-list-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-choice-list.example.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [],
};

export default data;
