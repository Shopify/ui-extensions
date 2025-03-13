import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <s-number-field 
      label="Item quantity" 
      defaultValue="10" 
      step={5} 
    />,
    document.body,
  );
};
