<s-time-picker
  value="14:30:00"
  onInput={(event) => console.log('Input:', event.currentTarget.value)}
  onChange={(event) => console.log('Change:', event.currentTarget.value)}
  onFocus={(event) => console.log('Focused')}
  onBlur={(event) => console.log('Blurred')}
/>;
