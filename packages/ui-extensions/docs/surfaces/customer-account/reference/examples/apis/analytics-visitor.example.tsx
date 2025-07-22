import {render} from 'preact';
import {useEffect} from 'preact/hooks';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  useEffect(() => {
    shopify.analytics
      .visitor({
        email: 'someEmail@example.com',
        phone: '+1 555 555 5555',
      })
      .then((result) => {
        if (result.type === 'success') {
          console.log('Success', result);
        } else {
          console.error('Error', result);
        }
      });
  }, []);

  return (
    <s-banner>See console for result</s-banner>
  );
}
