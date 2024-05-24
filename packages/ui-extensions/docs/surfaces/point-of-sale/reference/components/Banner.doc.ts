import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForBanner = (title: string, fileName: string) =>
  generateCodeBlock(title, 'banner', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Banner',
  description:
    'A banner informs merchants about important changes or persistent conditions. Use if you need to communicate to merchants in a prominent way, without blocking other actions.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Banner',
      description: '',
      type: 'BannerProps',
    },
  ],
  category: 'Components',
  related: [],
  defaultExample: {
    codeblock: generateCodeBlockForBanner('Banner', 'default.example'),
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
