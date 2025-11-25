import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Modal',
  description:
    'The `Modal` component displays content in an overlay that requires merchant attention. Use modals to present critical information, confirmations, or focused tasks while maintaining page context.' +
    '\n\nModals block interaction with the underlying interface until the merchant resolves the modal content. The component maintains focus within the modal boundary and returns focus to the trigger element on close, ensuring keyboard navigation remains predictable throughout the modal lifecycle.',
  thumbnail: 'modal-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Modal` component.',
      type: 'Modal',
    },
    {
      title: 'Slots',
      description:
        'The `Modal` component supports slots for additional content placement within the modal. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'ModalSlots',
    },
    {
      title: 'Events',
      description:
        'The `Modal` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'ModalEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Feedback and status indicators',
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Use for focused interactions:** Reserve modals for confirmations, critical information, or tasks requiring immediate attention.\n' +
        '- **Write clear headings:** Use concise titles that communicate the purpose or action.\n' +
        "- **Choose appropriate button tones:** The `primary-action` button's `tone` determines the modal's overall tone. Use `critical` for destructive actions, `success` for confirmations.\n" +
        '- **Include secondary actions:** Provide options like "Cancel" or "Go Back" to give merchants flexibility.\n' +
        '- **Keep content focused:** Limit to essential information and actions. For complex workflows, break into multiple steps.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Multiple modals can't be displayed simultaneously—showing a new modal while another is visible may cause unexpected behavior or poor user experience.\n" +
        "- Modal visibility and lifecycle must be managed programmatically through events and commands—they don't automatically handle state management or persistence.",
    },
  ],
  defaultExample: {
    image: 'modal-default.png',
    description:
      'Display focused content in an overlay using a `Modal` component that requires merchant attention. This example shows a basic modal with header, content area, and action buttons.',
    codeblock: {
      title: 'Display content in a modal overlay',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  related: [],
};

export default data;
