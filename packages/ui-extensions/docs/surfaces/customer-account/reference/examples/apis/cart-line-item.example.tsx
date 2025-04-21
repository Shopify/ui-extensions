import {render} from 'preact';
import {useEffect, useState} from 'preact/hooks';
export default function extension() {
  render(<App />, document.body);
}

function App() {
  const [title, setTitle] = useState(
    shopify.target.current.merchandise?.title,
  );
  useEffect(() => {
    shopify.target.subscribe((updatedTarget) => {
      setTitle(updatedTarget.merchandise?.title);
    });
  }, []);

  return (
    <s-text>Line item title: {title}</s-text>
  );
}
