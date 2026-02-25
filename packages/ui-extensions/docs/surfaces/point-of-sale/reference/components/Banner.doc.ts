import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForBanner = (title: string, fileName: string) =>
  generateCodeBlock(title, 'banner', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Banner',
  description:
    'The Banner component highlights important information or required actions prominently within the POS interface. Use banners to communicate critical updates, warnings, informational messages, or success notifications that require merchant attention in a persistent but non-interruptive way.\n\nThe component provides persistent visibility for important messages while remaining non-intrusive to the main workflow, with support for dismissible and non-dismissible states. It includes automatic color coding based on message severity and integrates with the POS design system to maintain visual consistency across different alert types and use cases.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the Banner component.',
      type: 'BannerProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Feedback and status indicators',
  related: [],
  thumbnail: 'banner-thumbnail.png',
  defaultExample: {
    image: 'banner-default.png',
    codeblock: generateCodeBlockForBanner(
      'Show an information banner',
      'default.example',
    ),
    description:
      'Show a persistent informational message using a banner. This example demonstrates rendering a banner with different status variants (info, success, warning, critical) to communicate important information to merchants without interrupting their workflow.',
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Keep banner content concise and actionable:** Banner titles should be brief and clearly communicate the main message. If additional detail is needed, consider providing it through the action button or in a subsequent screen. Avoid overwhelming merchants with too much information in a single banner.\n- **Manage banner visibility thoughtfully:** Use the \`visible\` property to control when banners appear and disappear. Show banners when relevant conditions occur and hide them once the situation is resolved or acknowledged. Avoid leaving stale banners visible that no longer apply to the current context.\n- **Provide clear actions when needed:** When a banner requires user action, set \`hideAction\` to \`false\` and provide clear, actionable text for the action button. Make it obvious what steps merchants need to take to address the situation or get more information.\n- **Handle banner interactions appropriately:** Implement meaningful \`onPress\` handlers that either resolve the banner's condition, provide more information, or guide merchants to the appropriate next steps. For simple informational banners, the default dismiss behavior may be sufficient.\n- **Limit banner frequency:** Avoid showing multiple banners simultaneously or in rapid succession, as this can overwhelm the interface and reduce the effectiveness of important messages. Queue banners appropriately and prioritize critical messages.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- Banners require explicit visibility management through the \`visible\` property—they don't automatically dismiss based on time or user actions unless programmed to do so.\n- The action button functionality is limited to a single action per banner—complex workflows may require navigation to dedicated screens.\n`,
    },
  ],
};

export default data;
