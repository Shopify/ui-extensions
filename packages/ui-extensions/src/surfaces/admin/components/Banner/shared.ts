const shared = {
  name: 'Banner',
  description: `
  Use \`s-banner\` to communicate important status updates or required actions that users must take. Banners will automatically adjust their design to match the context in which they are used.

#### Outside of a section
Banners placed outside of a section will display in their own card and should be located at the top of the page. 
They're useful for conveying messages that apply to the entire page or areas not visible within the viewport, such as validation errors further down the page.

#### In a section
Banners placed inside a section will have styles applied contextually. They're useful for conveying messages relevant to a specific section or piece of content.

#### Best practices
- Seeing these banners can be stressful, so use them sparingly to avoid overwhelming users.
- Focus on a single piece of information or required action to avoid overwhelming users.
- Make the message concise and scannable. Users shouldn’t need to spend a lot of time figuring out what they need to know and do. 
- Info, Warning and Critical banners should contain a call to action and clear next steps. Users should know what to do after seeing the banner.
- Avoid banners that can't be dismissed unless the user is required to take action.

  `,
  thumbnail: 'banner-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Banner',
    },
  ],
  subCategory: 'Feedback',
  related: [
    {
      type: 'component',
      name: 'Badge',
      url: '/docs/api/admin-extensions/components/feedback/badge',
    },
  ],
  defaultExample: {
    image: 'banner-default.png',
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
