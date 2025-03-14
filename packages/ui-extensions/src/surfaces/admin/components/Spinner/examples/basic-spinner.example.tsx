import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <s-stack 
      justifyContent="center" 
      alignContent="center" 
      blockSize="100px"
    >
      <s-spinner size="large" />,
    </s-stack>
    document.body,
  );
};
