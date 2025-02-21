import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <s-button onClick={() => console.log('onPress event')}>
      Click here
    </s-button>,
    document.body,
  );
}
