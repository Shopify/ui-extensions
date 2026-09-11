<s-pos-list
  rows={products}
  loadingMore={loadingMore}
  onLoadMore={(event) => {
    console.log('Load more requested', event);
    void loadMoreProducts();
  }}
/>;
