<>
  <s-button command="--show" commandFor="date-picker">
    Select Date
  </s-button>
  <s-date-picker
    id="date-picker"
    value="2024-10-26"
    onChange={(event) => console.log('Date selected:', event.currentTarget.value)}
  />
</>;
