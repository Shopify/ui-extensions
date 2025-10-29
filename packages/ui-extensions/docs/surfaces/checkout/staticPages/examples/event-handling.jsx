<s-button onClick={() => console.log('Clicked!')}>
  Click me
</s-button>

<s-email-field
  label="Email"
  name="email"
  onChange={(e) => console.log('Value changed:', e.currentTarget.value)}
  onFocus={() => console.log('Field focused')}
  onBlur={() => console.log('Field blurred')}
></s-email-field>