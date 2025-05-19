import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/Image';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'image-thumbnail.png',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ImageProps',
    },
  ],
  defaultExample: {
    image: 'image-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-image.example.html',
          language: '',
        },
      ],
    },
  },
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic',
      anchorLink: 'best-practices',
      sectionContent: `
- Use high-resolution images to ensure a professional and high-quality experience.
- Use optimized images so your app loads as fast as possible.
- Use images intentionally, these should add clarity and lead users to the next step.`,
    },
  ],
};

export default data;
