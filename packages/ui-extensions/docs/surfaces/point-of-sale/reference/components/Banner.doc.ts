import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForBanner = (title: string, fileName: string) =>
  generateCodeBlock(title, 'banner', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Banner',
  description:
    'The `Banner` component highlights important information or required actions prominently within the POS interface. Use banners to communicate critical updates, warnings, informational messages, or success notifications that require merchant attention in a persistent but non-interruptive way.\n\nThe component provides persistent visibility for important messages while remaining non-intrusive to the main workflow, with support for dismissible and non-dismissible states. It includes automatic color coding based on message severity and integrates with the POS design system to maintain visual consistency across different alert types and use cases.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Banner` component.',
      type: 'BannerProps',
    },
  ],
  category: 'Components',
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
      anchorLink: 'guidelines',
      title: 'Guidelines',
      sectionContent: `
- Use when needing to communicate to merchants in a way that is persistent but non-interruptive.
- Only one banner should be visible at a time.
`,
    },
  ],
};

export default data;
