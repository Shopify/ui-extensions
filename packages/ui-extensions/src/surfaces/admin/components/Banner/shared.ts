const shared = {
  thumbnail: '/assets/templated-apis-screenshots/admin/components/banner.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Outside of a section',
      type: 'Generic' as const,
      anchorLink: 'outside-of-a-section',
      sectionContent: `Banners placed outside of a section will display in their own card and should be located at the top of the page. They're useful for conveying messages that apply to the entire page or areas not visible within the viewport, such as validation errors further down the page.`,
    },
    {
      title: 'In a section',
      type: 'Generic' as const,
      anchorLink: 'in-a-section',
      sectionContent: `Banners placed inside a section will have styles applied contextually. They're useful for conveying messages relevant to a specific section or piece of content.`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Seeing these banners can be stressful, so use them sparingly to avoid overwhelming users.
- Focus on a single piece of information or required action to avoid overwhelming users.
- Make the message concise and scannable. Users shouldn’t need to spend a lot of time figuring out what they need to know and do.
- Info, Warning and Critical banners should contain a call to action and clear next steps. Users should know what to do after seeing the banner.
- Avoid banners that can't be dismissed unless the user is required to take action.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Banner',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'BannerEvents',
    },
    {
      title: 'Slots',
      description: '',
      type: 'BannerSlots',
    },
  ],
  defaultExample: {
    image: 'banner-default.png',
    codeblock: {
      title: 'Code',
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
