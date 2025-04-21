import {render} from 'preact';
import {useEffect, useState} from 'preact/hooks';

export default function extension() {
  render(<App />, document.body);
}

function App() {
  const [
    buyerSelectedFreeTShirt,
    setBuyerSelectedFreeTShirt,
  ] = useState(
    shopify.attributes.current
      ?.buyerSelectedFreeTShirt || false,
  );
  const [tshirtSize, setTshirtSize] = useState(
    shopify.attributes.current?.tshirtSize || '',
  );

  useEffect(() => {
    shopify.attributes.subscribe(
      (updatedAttributes) => {
        setBuyerSelectedFreeTShirt(
          updatedAttributes.buyerSelectedFreeTShirt,
        );
        setTshirtSize(
          updatedAttributes.tshirtSize,
        );
      },
    );
  }, []);

  if (Boolean(buyerSelectedFreeTShirt) === true) {
    return (
      <s-text>
        You selected a free t-shirt, size:{' '}
        {tshirtSize}
      </s-text>
    );
  }

  return null;
}
