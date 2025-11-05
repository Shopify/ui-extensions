<s-stack>
  <s-number-field
    label="Price"
    placeholder="0.00"
    inputMode="decimal"
    onInput={(event) => console.log('Value:', event.currentTarget.value)}
  />

  <s-number-field
    label="Stock count"
    placeholder="0"
    inputMode="numeric"
    onInput={(event) => console.log('Value:', event.currentTarget.value)}
  />
</s-stack>;
