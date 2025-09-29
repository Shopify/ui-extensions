import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [count, setCount] = useState(0);

  return (
    <>
      <s-text>Count: {count}</s-text>
      <s-button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </s-button>
    </>
  );
}