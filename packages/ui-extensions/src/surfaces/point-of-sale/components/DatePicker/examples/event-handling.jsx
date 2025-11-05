<s-date-picker 
  value="2024-10-26"
  onInput={(event) => console.log('Input:', event.currentTarget.value)}
  onChange={(event) => console.log('Change:', event.currentTarget.value)}
  onFocus={(event) => console.log('Focus')}
  onBlur={(event) => console.log('Blur')}
/>