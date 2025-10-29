<s-text-area
  label="Customer feedback"
  placeholder="Enter feedback..."
  onInput={(event) => console.log('Input:', event.currentTarget.value)}
  onChange={(event) => console.log('Change:', event.currentTarget.value)}
  onFocus={(event) => console.log('Focused')}
  onBlur={(event) => console.log('Blurred')}
/>