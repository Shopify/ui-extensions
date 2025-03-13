import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  const onInput = (event: Event) => {
    console.log(event.target.value);
  };

  render(
    <s-text-field 
      label="Name" 
      defaultValue="Jane Doe" 
      placeholder="Enter your name" 
      onInput={onInput} 
    />,
    document.body,
  );
};
