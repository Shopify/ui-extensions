const [dateRange, setDateRange] = useState('2024-01-01--2024-01-31');
const [orderNumber, setOrderNumber] = useState('');

const handleApplyFilters = () => {
  console.log('Applying filters:', {
    orderNumber,
    dateRange
  });
}

return (
  <s-stack gap="base">
    <s-text-field
      label="Order number"
      placeholder="Search orders..."
      value={orderNumber}
      onChange={(event) => setOrderNumber(event.currentTarget.value)}
    />
    <s-date-picker
      type="range"
      name="order-date-range"
      value={dateRange}
      onChange={(event) => setDateRange(event.currentTarget.value)}
      view="2024-01"
    />
    <s-button onClick={handleApplyFilters}>Apply filters</s-button>
  </s-stack>
)