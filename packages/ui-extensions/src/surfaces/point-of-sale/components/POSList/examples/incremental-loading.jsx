const itemTemplates = `
  <s-pos-list-item templateId="product">
    <s-text>{{name}}</s-text>
  </s-pos-list-item>
`;

<s-pos-list
  rows={products}
  itemTemplates={itemTemplates}
  loadingMore={loadingMore}
  onLoadMore={() => {
    void loadMoreProducts();
  }}
/>;
