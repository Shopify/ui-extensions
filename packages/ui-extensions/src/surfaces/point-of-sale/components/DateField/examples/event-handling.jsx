<s-date-field 
  label="Order date"
  value="2024-10-26"
  onInput={(event) => console.log('Input:', event.target.value)}
  onChange={(event) => console.log('Change:', event.target.value)}
  onFocus={(event) => console.log('Focused with:', event.target.value)}
  onBlur={(event) => console.log('Blurred with:', event.target.value)}
/>