import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Icon',
  description: 'A component that renders an icon from the POS asset catalog.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Icon',
      description: '',
      type: 'IconProps',
    },
  ],
  category: 'Components',
  related: [
    {
      name: 'Figma UI Kit Icons',
      subtitle:
        'See the Figma UI Kit to get a full list of icons to design your extension',
      url: 'https://www.figma.com/design/0UcHY7C4hqrhvA5tjynunA/Shopify-POS-UI-Kit-(Community)?node-id=15-15&t=Ygce7CbfazMNpKsA-0',
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
    codeblock: generateCodeBlock('Example icons', 'icon', 'default-example'),
  },
  thumbnail: 'icon-thumbnail.png',
};

export default data;
