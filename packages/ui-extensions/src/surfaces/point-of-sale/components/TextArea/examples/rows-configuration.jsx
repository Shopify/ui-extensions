<s-text-area
  label="Order notes"
  placeholder="Add special instructions..."
  rows={5}
  maxLength={500}
  onInput={(event) => console.log('Characters:', event.currentTarget.value.length)}
/>