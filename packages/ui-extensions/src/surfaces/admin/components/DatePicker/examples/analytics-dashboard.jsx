const [value, setValue] = useState('2025-01-01--2025-01-31');

const last7Days = () => {
  setValue('2025-01-07--2025-01-13');
}

const last30Days = () => {
  setValue('2024-12-14--2025-01-13');
}

const thisMonth = () => {
  setValue('2025-01-01--2025-01-31');
}

return (
  <s-stack gap="base">
    <s-button-group>
      <s-button slot="secondary-actions" onClick={last7Days}>Last 7 days</s-button>
      <s-button slot="secondary-actions" onClick={last30Days}>Last 30 days</s-button>
      <s-button slot="secondary-actions" onClick={thisMonth}>This month</s-button>
    </s-button-group>
    <s-date-picker
      type="range"
      name="analytics-period"
      id="analytics-picker"
      view="2025-01"
      value={value}
      onChange={(event) => {
        console.log('Date range changed:', event.currentTarget.value);
        setValue(event.currentTarget.value);
      }}
    />
    <s-text>Selected range: {value}</s-text>
  </s-stack>
)