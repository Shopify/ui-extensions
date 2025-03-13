import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState} from 'preact/hooks';

export default function extension() {
  const [clicked, setClicked] = useState(false);
  const onClick = () => {
    setClicked(true);
  };

  render(
    <s-clickable onClick={onClick}>
      <s-badge>{clicked ? 'Clicked' : 'Click me'}</s-badge>
    </s-clickable>,
    document.body,
  );
};
