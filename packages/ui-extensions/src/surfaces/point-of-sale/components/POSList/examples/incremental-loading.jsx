<s-pos-list
  rows={products}
  itemTemplates={itemTemplates}
  loadingMore={loadingMore}
  onLoadMore={() => {
    void loadMoreProducts();
  }}
/>;
