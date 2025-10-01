import { PinPadOptions } from '@shopify/ui-extensions/point-of-sale';
import { render } from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const VALID_PIN = '123456';

  const options: PinPadOptions = {
    label: 'Enter PIN to proceed',
    title: 'PIN Pad Demo',
    masked: true,
    minPinLength: 6,
    maxPinLength: 8,
  };

  const onShowTapped = () => {
    shopify.pinPad.showPinPad((pin) => {
      if (pin.join('') === VALID_PIN) {
        console.log('PIN is valid');
        return { result: 'accept' };
      } else {
        console.log('PIN is invalid');
        return {
          result: 'reject',
          errorMessage: 'Invalid PIN, please try again',
        };
      }
    }, options);
  };

  return (
    <s-page heading="PIN Pad API">
      <s-button onClick={onShowTapped}>Show Pin Pad</s-button>
    </s-page>
  );
}
