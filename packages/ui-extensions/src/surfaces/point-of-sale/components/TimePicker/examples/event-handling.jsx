<s-time-picker
  value="14:30"
  onInput={(event) => console.log('Input:', event.target.value)}
  onChange={(event) => console.log('Change:', event.target.value)}
  onFocus={(event) => console.log('Focused')}
  onBlur={(event) => console.log('Blurred')}
/>