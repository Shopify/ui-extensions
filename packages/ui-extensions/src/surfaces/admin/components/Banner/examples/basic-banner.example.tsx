import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  const onDismiss = () => {
    console.log('Banner dismissed');
  };

  render(
    <s-banner 
      heading="Success" 
      tone="success" 
      dismissible 
      onDismiss={onDismiss}
    >
      Your action was successful
    </s-banner>,
    document.body,
  );
}
