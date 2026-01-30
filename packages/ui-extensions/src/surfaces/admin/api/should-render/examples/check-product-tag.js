const {data} = useApi(TARGET);

const hasSelection = data.selected.length > 0;

return {display: hasSelection};
