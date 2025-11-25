import {PinPadOptions} from '@shopify/ui-extensions/point-of-sale';
import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const VALID_PIN = '123456';
  const [statusMessage, setStatusMessage] = useState('');

  const options = {
    label: 'Enter your PIN',
    title: 'Authorization Required',
    masked: true,
    minPinLength: 6,
    maxPinLength: 6,
    onDismissed: (reason) => {
      if (reason === 'accept') {
        setStatusMessage('PIN validated successfully!');
      } else {
        setStatusMessage('PIN validation cancelled or failed');
      }
    },
  };

  const onShowPinPad = () => {
    setStatusMessage('');
    shopify.pinPad.showPinPad((pin) => {
      if (pin.join('') === VALID_PIN) {
        return {result: 'accept'};
      } else {
        return {
          result: 'reject',
          errorMessage: 'Incorrect PIN. Please try again.',
        };
      }
    }, options);
  };

  return (
    <s-page heading="PIN Pad with Options">
      <s-scroll-box>
        <s-stack direction="block">
          <s-button onClick={onShowPinPad}>Authorize with PIN</s-button>
          {statusMessage && <s-text>{statusMessage}</s-text>}
        </s-stack>
      </s-scroll-box>
    </s-page>
  );
}


