<>
  <s-button command="--show" commandFor="date-spinner">
    Select Date
  </s-button>
  <s-date-spinner
    id="date-spinner"
    value="2024-10-26"
    onChange={(event) => console.log('Date selected:', event.currentTarget.value)}
  />
</>;
