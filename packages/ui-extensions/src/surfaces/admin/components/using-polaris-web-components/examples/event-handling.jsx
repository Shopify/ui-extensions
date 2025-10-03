<>
<s-button onClick={() => console.log('Clicked!')}>
  Click me
</s-button>

<s-text-field
  label="Email"
  onChange={(e) => console.log('Value changed:', e.currentTarget.value)}
  onFocus={() => console.log('Field focused')}
  onBlur={() => console.log('Field blurred')}
/>
</>
