import {render, Fragment} from 'preact';

import {useShippingOptionTarget} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const {
    shippingOptionTarget,
    isTargetSelected,
    renderMode,
  } = useShippingOptionTarget();
  const {
    cost: {amount, currencyCode},
    title,
  } = shippingOptionTarget;

  // When the target is rendered inside the "More shipping options" modal for split shipping scenarios, `renderMode.overlay` is true. This check allows to render an alternative UI to avoid nested modals.
  if (renderMode.overlay) {
    return (
      <s-text>
        Shipping method: {title} is{' '}
        {isTargetSelected ? '' : 'not'} selected.
      </s-text>
    );
  }

  // When the target is rendered inline for both split shipping and non-split shipping scenarios, a Modal can be rendered if desired.
  return (
    <Fragment>
      <s-link
        command="--show"
        commandFor="my-modal"
      >
        View details ({title} is{' '}
        {isTargetSelected ? '' : 'not'} selected)
      </s-link>
      <s-modal
        id="my-modal"
        heading={`Shipping option: ${title}`}
      >
        <s-paragraph>
          Cost:{' '}
          {Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: currencyCode,
          }).format(amount)}
        </s-paragraph>
        <s-button
          variant="primary"
          command="--hide"
          commandFor="my-modal"
          slot="primary-action"
        >
          Close
        </s-button>
      </s-modal>
    </Fragment>
  );
}
