export default () => {
  const {data} = shopify;

  const selectedCount = data.selected.length;

  return {display: selectedCount === 1};
};
