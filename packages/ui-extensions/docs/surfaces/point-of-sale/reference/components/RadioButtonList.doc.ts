import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'RadioButtonList',
  description:
    'The RadioButtonList component presents radio button options for single selection from a list of string values. Use it when merchants need to choose exactly one option from a defined set of choices.\n\nThe component ensures single-selection behavior with clear visual indication of the selected option and disabled states for unavailable choices, making it suitable for settings, preferences, and any scenario requiring exclusive choice from multiple options.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the RadioButtonList component.',
      type: 'RadioButtonListProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
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

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Manage selection state in your app:** Use \`initialSelectedItem\` and \`onItemSelected\` together to manage selection state. When a user selects an item, \`onItemSelected\` fires with the selected value—you must then update \`initialSelectedItem\` with this new value to reflect the selection in the UI.\n- **Enable auto-scrolling for better UX:** Set \`initialOffsetToShowSelectedItem\` to true when you have long lists and want. This improves usability by eliminating the need for users to scroll to find their current selection.\n- **Track selections in your app code:** Maintain the selected item value in your app state (for example, using React [\`useState\`](https://react.dev/reference/react/useState)). When \`onItemSelected\` fires, update your state with the new selection, which will then update the \`initialSelectedItem\` property to reflect the change.\n- **Consider list length and scrolling:** For long option lists, use the \`initialOffsetToShowSelectedItem\` property to improve initial display. Design your interface to handle scrollable lists gracefully, especially on smaller POS device screens.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- RadioButtonList accepts only string arrays for options—complex option objects with additional metadata or custom rendering require alternative components or additional state management.\n- The component is designed for single selection only—multiple selection scenarios require alternative approaches or custom implementation.\n- RadioButtonList requires you to manage the selected value in your app must update \`initialSelectedItem\` in response to \`onItemSelected\` events to reflect the new selection in the UI.\n`,
    },
  ],
};

export default data;
