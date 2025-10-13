const [amount, setAmount] = useState('150');
const [error, setError] = useState('Value must be no more than $100');

return (
  <s-section>
    <s-stack gap="base" inlineAlign="start">
      <s-text-field label="Product name" />
      <s-money-field
        label="Discount amount"
        value={amount}
        min={0}
        max={100}
        step="0.5"
        details="Enter discount amount between $0 and $100"
        error={error}
        onInput={(e) => {
          setAmount(e.target.value);
          const val = parseFloat(e.target.value);
          setError(val > e.target.max ? 'Value must be no more than $100' : val < e.target.min ? 'Value must be at least $0' : '');
        }}
      />
    </s-stack>
  </s-section>
)