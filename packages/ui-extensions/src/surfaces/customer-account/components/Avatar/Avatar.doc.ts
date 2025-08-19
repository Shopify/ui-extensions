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
      title: 'AvatarProps',
      description: '',
      type: 'AvatarElementPropsDocs',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'AvatarEventsDocs',
    },
  ],
  category: 'Polaris web components',
  defaultExample: {
    image: 'avatar-preview.png',
    altText:
      'An example of the avatar with two variants: one with initials and the other with an icon.',
    codeblock: {
      title: 'Basic Avatar',
      tabs: [
        {
          title: 'Preact',
          code: './examples/basic-Avatar-preact.example.tsx',
          language: 'tsx',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent: `
  - By default, if a user does not provide their first or last name, the avatar component will display a placeholder icon. However, if at least one of the names is provided, the avatar will be replaced with one or two initials representing the user.
  - There are 5 sizes for the avatar component:
    * small-200 (21x21 px): Use when showing avatars in tables / lists where space is limited.
    * small (26x26 px): Use when you want to conserve space but want a larger size than small-200.
    * base (32x32 px): Use by default.
    * large (39×39 px): Use when the avatar is a focal point, such as a customer details card.
    * large-200 (47x47 px): Use when placing more emphasis on the avatar.

  - Provide alt text for avatars to assist customers using assistive technologies.

  **Dos**
  - When using multiple avatars on the same page, maintain a consistent style and size to create a unified visual pattern for users.

  **Don'ts**
  - Don't use different size avatars on the same page.

  <img src='/assets/templated-apis-screenshots/customer-account-ui-extensions/unstable/avatar-best-practices.png' alt="An example showing dos and don'ts of the Avatar component" />
  `,
    },
  ],
  related: [],
};

export default data;
