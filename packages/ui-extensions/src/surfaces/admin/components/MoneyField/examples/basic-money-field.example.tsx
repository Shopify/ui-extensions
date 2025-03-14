import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  const onInput = (event: Event) => {
    console.log(event.target.value);
  };

  render(
    <s-money-field 
      label="Cost" 
      defaultValue="9.99" 
      currencycode="EUR" 
      onInput={onInput}
    />,
    document.body,
  );
};
