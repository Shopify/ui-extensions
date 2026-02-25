import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'SegmentedControl',
  description:
    'The SegmentedControl component displays a horizontal row of segments that allow users to switch between different views or filter content. Use it to provide mutually exclusive options with clear visual selection states.\n\nThe component provides mutually exclusive selection within a compact horizontal layout, with visual highlighting of the active segment and smooth transition animations, making it ideal for view switching, filter controls, or any interface requiring clear, space-efficient option selection.\n\nSegmentedControl components provide animated transitions between segments that clearly indicate state changes without being distracting, helping merchants confirm their selection while maintaining focus on content.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the SegmentedControl component.',
      type: 'SegmentedControlProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Navigation and content',
  related: [],
  thumbnail: 'segmented-control-thumbnail.png',
  defaultExample: {
    image: 'segmented-control-default.png',
    codeblock: generateCodeBlock(
      'Switch between views or filters',
      'segmented-control',
      'default.example',
    ),
    description:
      'Enable view switching or content filtering with mutually exclusive segments. This example shows a SegmentedControl that displays options in a compact horizontal layout with clear visual selection states and smooth transitions, ideal for view toggles or filter controls.',
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Limit the number of segments appropriately:** Use two to five segments for optimal usability. Too few segments may not justify the component, while too many can overwhelm users and reduce touch target sizes on POS devices.\n- **Implement meaningful selection logic:**  Provide immediate visual feedback by updating content, filters, or views based on the selection.\n- **Handle disabled states strategically:** Use the \`disabled\` property on individual segments when options are temporarily unavailable or contextually inappropriate. Provide clear visual indication and consider alternative messaging when segments are disabled.\n- **Design for touch interfaces:** Ensure segments are large enough for comfortable touch interaction on POS devices.\n- **Maintain consistent selection patterns:** Keep the same segment selected when users navigate away and return to a screen, unless the context has changed significantly. This helps maintain user orientation and reduces cognitive load.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- SegmentedControl is designed for mutually exclusive selections—multiple selection scenarios require different components like checkbox lists or choice lists.\n- The component provides the selection interface but doesn't manage content switching—you must implement the logic to show/hide or update content based on the selected segment.\n- Visual styling and layout are controlled by the POS design system—custom segment styling or layout modifications beyond the provided properties are not supported.\n`,
    },
  ],
};

export default data;
