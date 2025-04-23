import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Link',
  description:
    '`s-link` is an interactive component that directs users to a specified URL. It even supports custom protocols.',
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
  category: 'Components',
  subCategory: 'Actions',
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
