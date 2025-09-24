import { render } from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const VALID_PIN = '123456';

  const options = {
    label: 'Enter PIN to disarm',
    title: 'Auto-destruct sequence activated',
    masked: true,
    minPinLength: /** @type {6} */ (6),
    maxPinLength: /** @type {8} */ (8),
    pinPadAction: {
      label: 'Emergency Override',
      onClick: () => {
        return [1, 2, 3, 4, 5, 6];
      },
    },
    onPinEntry: (pin) => {
      console.log(`PIN Entry: ${pin}`);
    },
  };

  const onShowTapped = () => {
    shopify.pinPad.showPinPad((pin) => {
      if (pin.join('') === VALID_PIN) {
        console.log('PIN is valid');
        return {result: 'accept'};
      } else {
        console.log('PIN is invalid');
        return {result: 'reject'};
      }
    }, options);
  };

  return (
    <s-scroll-box>
      <s-button onClick={onShowTapped}>Show Pin Pad</s-button>
    </s-scroll-box>
  );
}