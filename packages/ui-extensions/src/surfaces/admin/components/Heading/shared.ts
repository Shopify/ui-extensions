const shared = {
  name: 'Heading',
  description: `
  Use \`s-heading\` to create hierarchical titles similar to HTML's \`h1-h6\` elements.

  #### Useful for:
  - Creating titles and subtitles for your content that are consistent across your app.
  - Helping users with visual impairments navigate through content effectively using assistive technologies like screen readers.

  #### Considerations
  - The level of the heading is automatically determined by how deeply it's nested inside other components, starting from h2.
  - Default to using the \`heading\` property in \`s-section\`. The \`s-heading\` component should only be used if you need to implement a custom layout for your heading in the UI.

  #### Best practices
  - Use short headings to make your content scannable.
  - Use plain and clear terms.
  - Don't use jargon or technical language.
  - Don't use different terms to describe the same thing.
  - Don't duplicate content.

  `,
  thumbnail: 'heading-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Heading',
    },
  ],
  subCategory: 'Titles and text',
  related: [
    {
      type: 'component',
      name: 'Text',
      url: '/docs/api/admin-extensions/polaris-web-components/titles-and-text/text',
    },
  ],
  defaultExample: {
    image: 'heading-default.png',
    codeblock: {
      title: '',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
        },
      ],
    },
  },
};

export default shared;
