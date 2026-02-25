import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPOSBlock = (title: string, fileName: string) =>
  generateCodeBlock(title, 'pos-block', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'POSBlock',
  description:
    'The POSBlock component creates a container to place content with an action button. Use it to display structured content within POS block targets.\n\nThe component provides a standardized layout specifically designed for content blocks within POS detail views, with consistent padding, spacing, and optional action buttons. It integrates with the native POS design language, ensuring extension content feels cohesive with the core POS interface while maintaining clear content boundaries.\n\nPosBlock components provide consistent interaction patterns for action buttons across different block types, ensuring merchants can predict button behavior and location regardless of the specific POS context.',
  isVisualComponent: true,
  type: 'component',
  thumbnail: 'pos-block-thumbnail.png',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the POSBlock component.',
      type: 'POSBlockProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Layout and structure',
  related: [],
  defaultExample: {
    image: 'pos-block-default.png',
    codeblock: generateCodeBlockForPOSBlock(
      'Show content in a block container',
      'default.example',
    ),
    description:
      'Display structured content within POS block targets using a standardized container. This example demonstrates a POSBlock with consistent padding, spacing, and an optional action button, ensuring extension content feels cohesive with the core POS interface.',
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Design meaningful action buttons:** When providing an action, use clear and descriptive button titles that indicate exactly what will happen when pressed. Avoid generic terms like "Click here" in favor of specific actions like "View Details" or "Update Status."\n- **Handle action states appropriately:** Use the disabled property to prevent user interaction when actions are not available or appropriate. Provide clear feedback through your extension's description or other UI elements when actions are disabled.\n- **Design for the block context:** POSBlock appears within existing POS screens alongside other content.\n- **Implement responsive action callbacks:**  Consider showing loading states or confirmation messages when actions require network requests or significant processing time.\n- **Maintain consistent action patterns:** Use similar action patterns across different POSBlock instances in your extension to create predictable user experiences. Consistent button titles and behaviors help merchants understand and trust your extension.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- POSBlock is designed specifically for block targets—it can't be used in modal or action (menu item) targets.\n- The component's visual styling and layout are controlled by the POS design system—custom styling isn't supported.\n- Content display is determined by the extension's description rather than custom content properties—ensure your extension description is clear and informative.\n- Only one action button is supported for each POSBlock instance to maintain clean, focused interfaces that integrate well with existing POS workflows.\n`,
    },
  ],
};

export default data;
