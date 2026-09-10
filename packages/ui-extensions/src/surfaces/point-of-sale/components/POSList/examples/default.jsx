<s-pos-list
  imageDisplayStrategy="always"
  rows={[
    {
      id: 'graphic-tee',
      start: {
        label: 'Graphic tee',
        subtitles: ['Black / Medium', {content: 'Low stock', tone: 'critical'}],
        badges: [{text: 'Sale', tone: 'info'}],
      },
      end: {label: '$29.00', showChevron: true},
      onClick: (event) => {
        console.log('Selected row: graphic-tee', event);
      },
    },
    {
      id: 'canvas-tote',
      start: {
        label: 'Canvas tote',
        subtitles: ['Natural'],
      },
      end: {label: '$18.00', showChevron: true},
      onClick: (event) => {
        console.log('Selected row: canvas-tote', event);
      },
    },
  ]}
>
  <s-heading slot="header">Products</s-heading>
</s-pos-list>;
