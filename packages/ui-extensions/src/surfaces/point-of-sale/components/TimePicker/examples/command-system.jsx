<>
  <s-button command="--show" commandFor="time-picker">
    Select Time
  </s-button>
  <s-time-picker
    id="time-picker"
    value="14:30"
    onChange={(event) => console.log('Time selected:', event.currentTarget.value)}
  />
</>;
