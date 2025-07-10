import '@shopify/ui-extensions/point-of-sale/preact';
import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [count, setCount] = useState(0);

  return (
    <s-navigator>
      <s-screen title="Home" name="Home">
        <s-button
          title="Increment"
          onPress={() => setCount(count + 1)}
        />
      </s-screen>
    </s-navigator>
  );
}
