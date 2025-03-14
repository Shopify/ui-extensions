import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  const onInput = (event: Event) => {
    console.log(event.target.value);
  };

  render(
    <s-text-area 
      label="Description" 
      placeholder="Enter your description" 
      rows={4}
      maxLength={1000}
      onInput={onInput} 
    />,
    document.body,
  );
};
