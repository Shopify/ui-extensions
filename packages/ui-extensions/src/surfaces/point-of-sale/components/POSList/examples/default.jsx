<s-pos-list
  imageDisplayStrategy="always"
  rows={[
    {
      id: 'graphic-tee',
      start: {
        label: 'Graphic tee',
        subtitles: [
          'Black / Medium',
          {content: 'Low stock', color: 'critical'},
        ],
        badges: [{text: 'Sale', tone: 'highlight'}],
      },
      end: {label: '$29.00', showChevron: true},
      onClick: () => console.log('Selected row: graphic-tee'),
    },
    {
      id: 'canvas-tote',
      start: {
        label: 'Canvas tote',
        subtitles: ['Natural'],
      },
      end: {label: '$18.00', showChevron: true},
      onClick: () => console.log('Selected row: canvas-tote'),
    },
  ]}
>
  <s-heading slot="header">Products</s-heading>
</s-pos-list>;
