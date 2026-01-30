const {data} = useApi(TARGET);

const selectedCount = data.selected.length;

return {display: selectedCount === 1};
