<s-date-field 
  label="Order date"
  value="2024-10-26"
  onInput={(event) => console.log('Input:', event.currentTarget.value)}
  onChange={(event) => console.log('Change:', event.currentTarget.value)}
  onFocus={(event) => console.log('Focused with:', event.currentTarget.value)}
  onBlur={(event) => console.log('Blurred with:', event.currentTarget.value)}
/>