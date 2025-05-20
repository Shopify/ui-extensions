import '@shopify/ui-extensions/preact';
import { Fragment, render } from 'preact';
import { useState } from 'preact/hooks';

export default function ScaffoldedWithPreact() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <s-text>Count: {count}</s-text>
      <s-button onClick={() => setCount(count + 1)}>Increment</s-button>
    </Fragment>
  );
}

render(<ScaffoldedWithPreact />, document.body);
