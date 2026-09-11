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
    },
    {
      id: 'canvas-tote',
      start: {
        label: 'Canvas tote',
        subtitles: ['Natural'],
      },
      end: {label: '$18.00', showChevron: true},
    },
    {
      id: 'total',
      type: 'text',
      start: {label: 'Total'},
      end: {label: '$47.00'},
    },
  ]}
  onRowClick={(event) => {
    console.log('Selected row', event.detail.id);
  }}
>
  <s-heading slot="header">Products</s-heading>
</s-pos-list>;
