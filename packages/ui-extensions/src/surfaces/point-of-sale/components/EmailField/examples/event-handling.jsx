<s-email-field
  label="Customer email"
  placeholder="customer@example.com"
  onInput={(event) => console.log('Input:', event.currentTarget.value)}
  onChange={(event) => console.log('Change:', event.currentTarget.value)}
  onFocus={(event) => console.log('Focus')}
  onBlur={(event) => console.log('Blur')}
/>