const [sortBy, setSortBy] = useState('newest');
const [message, setMessage] = useState('Showing newest products first');

const handleChange = (e) => {
  const value = e.currentTarget.value;
  setSortBy(value);
  
  const messages = {
    newest: 'Showing newest products first',
    oldest: 'Showing oldest products first',
    'price-low': 'Showing lowest priced products first',
    'price-high': 'Showing highest priced products first',
  };
  setMessage(messages[value]);
};

return (
  <s-stack gap="base">
    <s-select label="Sort products by" value={sortBy} onChange={handleChange}>
      <s-option value="newest">Newest first</s-option>
      <s-option value="oldest">Oldest first</s-option>
      <s-option value="price-low">Price: low to high</s-option>
      <s-option value="price-high">Price: high to low</s-option>
    </s-select>
    <s-text color="subdued">{message}</s-text>
  </s-stack>
)
