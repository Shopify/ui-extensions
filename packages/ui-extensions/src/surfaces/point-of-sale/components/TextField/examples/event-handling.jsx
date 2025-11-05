<s-text-field
  label="Product SKU"
  placeholder="Enter SKU"
  onInput={(event) => {
    console.log('Input:', event.currentTarget.value);
    console.log('Current error:', event.currentTarget.error);
  }}
  onFocus={(event) => {
    console.log('Focused with value:', event.currentTarget.value);
  }}
  onBlur={(event) => {
    console.log('Blurred with value:', event.currentTarget.value);
  }}
  onChange={(event) => {
    console.log('Changed to:', event.currentTarget.value);
  }}
/>
