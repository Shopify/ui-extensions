export default () => {
  const {data} = shopify;

  const selectedCount = data.selected.length;
  const isWithinLimit = selectedCount > 0 && selectedCount <= 50;

  return {display: isWithinLimit};
};
