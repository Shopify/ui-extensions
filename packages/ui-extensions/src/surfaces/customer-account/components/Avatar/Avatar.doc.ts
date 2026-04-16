import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Avatar',
  description:
    'Avatar component is used to show a thumbnail representation of an individual or business in the interface. It can be a graphical representation or visual depiction, such as an image, initials, or an icon.',
  thumbnail: 'avatar-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'AvatarElementPropsDocs',
    },
    {
      title: 'Events',
      description:
        'Learn more about [handling events](/docs/api/customer-account-ui-extensions/{API_VERSION}/using-web-components#handling-events).',
      type: 'AvatarEventsDocs',
    },
  ],
  category: 'Web components',
  subCategory: 'Media and visuals',
  defaultExample: {
    image: 'avatar-default.png',
    altText:
      'An example of the Avatar component shows the initials of the user.',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-Avatar.example.html',
          language: 'jsx',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
Use these best practices to deliver a clear and accessible experience in your extensions.

### Show initials by default

When no first or last name is provided, display the placeholder icon. If either name exists, show one or two initials.

### Choose an appropriate size

Select a size based on context: 
- small‑200 (21×21) for tight tables or lists
- small (26×26) when slightly larger is needed
- base (32×32) as the default
- large (39×39) when the avatar is a focal point (for example, a customer card)
- large‑200 (47×47) when extra emphasis is required

### Provide descriptive alt text

Write alt text that meaningfully describes the avatar so assistive technologies can convey the same context.

### Keep sizes consistent on a page

Use the same style and size for multiple avatars in one view to create a unified visual pattern and avoid mixing sizes.
  `,
    },
  ],
  related: [],
};

export default data;
