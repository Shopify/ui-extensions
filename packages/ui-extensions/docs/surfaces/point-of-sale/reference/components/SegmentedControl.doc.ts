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
      'Display mutually exclusive options in a compact horizontal control. This example demonstrates a SegmentedControl that allows users to switch between different views, filters, or content modes with clear visual selection states and smooth transitions.',
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Limit the number of segments appropriately:** Use two to five segments for optimal usability. Too few segments may not justify the component, while too many can overwhelm users and reduce touch target sizes on POS devices.
- **Implement meaningful selection logic:**  Provide immediate visual feedback by updating content, filters, or views based on the selection.
- **Handle disabled states strategically:** Use the \`disabled\` property on individual segments when options are temporarily unavailable or contextually inappropriate. Provide clear visual indication and consider alternative messaging when segments are disabled.
- **Design for touch interfaces:** Ensure segments are large enough for comfortable touch interaction on POS devices.
- **Maintain consistent selection patterns:** Keep the same segment selected when users navigate away and return to a screen, unless the context has changed significantly. This helps maintain user orientation and reduces cognitive load.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- SegmentedControl is designed for mutually exclusive selections—multiple selection scenarios require different components like checkbox lists or choice lists.
- The component provides the selection interface but doesn't manage content switching—you must implement the logic to show/hide or update content based on the selected segment.
- Visual styling and layout are controlled by the POS design system—custom segment styling or layout modifications beyond the provided properties are not supported.
      `,
    },
  ],
};

export default data;
