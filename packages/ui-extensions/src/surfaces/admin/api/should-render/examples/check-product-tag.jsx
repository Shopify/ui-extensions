export default () => {
  const {data} = shopify;

  const hasSelection = data.selected.length > 0;

  return {display: hasSelection};
};
