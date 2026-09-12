import {posListTemplate} from '@shopify/ui-extensions/point-of-sale';

const itemTemplates = posListTemplate`
  <s-pos-list-item templateId="section-header" type="text">
    <s-heading>{{title}}</s-heading>
  </s-pos-list-item>

  <s-pos-list-item templateId="product">
    <s-stack direction="inline" gap="base" alignItems="center">
      <s-image src="{{image.src}}" alt="{{name}}" />
      <s-stack gap="small-200">
        <s-text>{{name}}</s-text>
        <s-text tone="subdued">{{variant}}</s-text>
        {{#if onSale}}<s-badge tone="success">Sale</s-badge>{{/if}}
      </s-stack>
      <s-switch bind:checked="active" label="Available" />
    </s-stack>
  </s-pos-list-item>
`;

<s-pos-list
  rows={[
    {id: 'summer', templateFor: 'section-header', title: 'Summer collection'},
    {
      id: 'graphic-tee',
      templateFor: 'product',
      name: 'Graphic tee',
      variant: 'Black / Medium',
      image: {src: 'https://cdn.shopify.com/graphic-tee.png'},
      onSale: true,
      active: true,
    },
    {
      id: 'canvas-tote',
      templateFor: 'product',
      name: 'Canvas tote',
      variant: 'Natural',
      image: {src: 'https://cdn.shopify.com/canvas-tote.png'},
      onSale: false,
      active: false,
    },
  ]}
  itemTemplates={itemTemplates}
  onRowClick={(event) => {
    console.log(
      'Selected row',
      event.detail.item.id,
      'at index',
      event.detail.index,
    );
  }}
>
  <s-search-field slot="header" label="Search products" />
</s-pos-list>;
