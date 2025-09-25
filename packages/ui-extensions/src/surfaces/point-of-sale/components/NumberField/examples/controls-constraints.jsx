<s-number-field
  label="Quantity"
  value="5"
  min={1}
  max={100}
  controls
  onInput={(event) => console.log('Input:', event.target.value)}
  onChange={(event) => console.log('Change:', event.target.value)}
/>;
