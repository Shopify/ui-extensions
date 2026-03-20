import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Select';
import optionSharedContent from '../../../../docs/shared/components/Option';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'select-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'SelectElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'SelectElementEvents',
    },
    {
      title: optionSharedContent.name,
      description: optionSharedContent.description,
      type: 'OptionProps',
    },
  ],
  defaultExample: {
    image: 'select-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-select.example.html',
          language: 'html',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Display hint text when no option is selected to guide the buyer. This example displays a language select with `placeholder` prompting the user to choose.',
        codeblock: {
          title: 'Add placeholder text to a select',
          tabs: [
            {
              code: './examples/select-placeholder.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;
