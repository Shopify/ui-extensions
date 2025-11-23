import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Icon',
  description:
    'The `Icon` component displays standardized visual symbols from the POS catalog to represent actions, statuses, or categories consistently. Use icons to enhance navigation or provide visual context alongside text in POS interfaces.\n\nIcons help merchants quickly understand interface elements and actions without relying solely on text labels. Icons are optimized for readability at standard sizes and automatically scale to maintain visual consistency across different screen densities and device types.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Icon` component.',
      type: 'IconProps',
    },
  ],
  category: 'Components',
  related: [
    {
      name: 'Figma UI Kit',
      subtitle:
        'See the Figma UI Kit to get a full list of icons to design your extension',
      url: 'https://www.figma.com/community/file/1493617217926107705/shopify-pos-ui-kit',
      type: 'star',
    },
  ],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'guidelines',
      title: 'Guidelines',
      sectionContent: `
- Icons in POS are used in areas where they specifically add clarity and structure to the UI, aiding in creating a deeper understanding of the product and common interaction points nested throughout the experience.`,
    },
  ],
  defaultExample: {
    image: 'icon-default.png',
    codeblock: generateCodeBlock('Show icons', 'icon', 'default-example'),
    description:
      'Show icons from the POS catalog to represent actions or statuses consistently. This example demonstrates rendering icons that enhance navigation, provide visual context alongside text, and maintain visual consistency across the interface with automatic scaling for different screen densities.',
  },
  thumbnail: 'icon-thumbnail.png',
};

export default data;
