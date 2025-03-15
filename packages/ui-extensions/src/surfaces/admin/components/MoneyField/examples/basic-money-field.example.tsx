const onInput = (event: Event) => {
  console.log(event.target.value);
};

<s-money-field
  label="Price"
  defaultValue="99.99"
  currencycode="EUR"
  onInput={onInput}
/>;
