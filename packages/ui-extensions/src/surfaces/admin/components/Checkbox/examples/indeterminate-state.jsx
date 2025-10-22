const [selectedItems, setSelectedItems] = useState([]);
const items = ['Item 1', 'Item 2', 'Item 3'];

const toggleItem = (value, checked) => setSelectedItems(checked ? [...selectedItems, value] : selectedItems.filter(item => item !== value));
const toggleAll = (checked) => setSelectedItems(checked ? items : []);
const isSelected = (item) => selectedItems.includes(item);

return (
  <s-stack gap="small">
    <s-checkbox
      label="Select all items"
      indeterminate={selectedItems.length !== 0 && selectedItems.length !== items.length}
      checked={selectedItems.length === items.length}
      onChange={e => toggleAll(e.currentTarget.checked)}
    />
    <s-divider />
    {items.map(i => (
      <s-checkbox key={i} label={i} checked={isSelected(i)} onChange={e => toggleItem(i, e.currentTarget.checked)} />
    ))}
  </s-stack>
);