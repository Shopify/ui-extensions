import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/Link';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  requires: '',
  isVisualComponent: true,
  thumbnail: 'link-thumbnail.png',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'LinkProps',
    },
  ],
  defaultExample: {
    image: 'link-default.png',
    codeblock: {
      title: 'Default example',
      tabs: [
        {
          code: './examples/basic-link.example.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '- Use links primarily for navigation and use buttons primarily for actions.\n\n- The HTML that renders for the Button and `Link` components includes style and accessibility information. Use these components intentionally and consistently to provide a more inclusive experience for assistive technology users and a more cohesive visual experience for sighted users.',
    },
  ],
  related: [
    {
      name: 'Button',
      subtitle: 'Component',
      url: 'button',
      type: 'Component',
    },
  ],
};

export default data;
