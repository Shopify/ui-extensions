import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'RadioButtonList',
  description:
    'The `RadioButtonList` component presents radio button options for single selection from a list of string values. Use it when merchants need to choose exactly one option from a defined set of choices.\n\nThe component ensures single-selection behavior with clear visual indication of the selected option and disabled states for unavailable choices, making it suitable for settings, preferences, and any scenario requiring exclusive choice from multiple options.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `RadioButtonList` component.',
      type: 'RadioButtonListProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'radio-button-list-thumbnail.png',
  defaultExample: {
    image: 'radio-button-list-default.png',
    codeblock: generateCodeBlock(
      'Select one option from a list',
      'radio-button-list',
      'default.example',
    ),
    description:
      'Enable single selection from multiple options using radio buttons. This example demonstrates a RadioButtonList that presents exclusive choices with clear visual indication of the selected option, ideal for settings, preferences, or any scenario requiring one choice from several options.',
  },
};

export default data;
