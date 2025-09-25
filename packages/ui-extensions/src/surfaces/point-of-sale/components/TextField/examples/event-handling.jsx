<s-text-field
  label="Product SKU"
  placeholder="Enter SKU"
  onInput={(event) => {
    console.log('Input:', event.target.value);
    console.log('Current error:', event.target.error);
  }}
  onFocus={(event) => {
    console.log('Focused with value:', event.target.value);
  }}
  onBlur={(event) => {
    console.log('Blurred with value:', event.target.value);
  }}
  onChange={(event) => {
    console.log('Changed to:', event.target.value);
  }}
/>
