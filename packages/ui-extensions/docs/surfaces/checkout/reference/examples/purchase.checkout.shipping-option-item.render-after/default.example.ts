import {
  extension,
  Button,
  Link,
  Modal,
  Text,
  TextBlock,
  View,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.shipping-option-item.render-after',
  (
    root,
    {
      ui,
      isTargetSelected:
        isTargetSelectedSubscription,
      renderMode,
      target,
    },
  ) => {
    let isTargetSelected =
      isTargetSelectedSubscription.current;
    let shippingOptionTitle =
      target.current.title || '';

    // When the target is rendered inside the "More shipping options" modal for split shipping scenarios, `renderMode.overlay` is true. This check allows to render an alternative UI to avoid nested modals.
    if (renderMode.overlay) {
      const inlineText = root.createComponent(
        Text,
        {},
        [
          getInlineText(
            shippingOptionTitle,
            isTargetSelected,
          ),
        ],
      );

      root.append(inlineText);

      target.subscribe(({title}) => {
        shippingOptionTitle = title || '';
        inlineText.replaceChildren(
          getInlineText(
            shippingOptionTitle,
            isTargetSelected,
          ),
        );
      });

      isTargetSelectedSubscription.subscribe(
        (value) => {
          isTargetSelected = value;
          inlineText.replaceChildren(
            getInlineText(
              shippingOptionTitle,
              isTargetSelected,
            ),
          );
        },
      );

      return;
    }

    // When the target is rendered inline for both split shipping and non-split shipping scenarios, a Modal can be rendered if desired.

    const modalId = 'shipping-option';

    const text = root.createComponent(
      TextBlock,
      {},
      getFormattedCost(target.current.cost),
    );

    const view = root.createComponent(
      View,
      {
        padding: ['none', 'none', 'base', 'none'],
      },
      [text],
    );

    const closeButton = root.createComponent(
      Button,
      {
        onPress: () => ui.overlay.close(modalId),
      },
      'Close',
    );

    const modalFragment = root.createFragment();

    const modal = root.createComponent(
      Modal,
      {
        id: modalId,
        padding: true,
        title: `Shipping option: ${shippingOptionTitle}`,
      },
      [view, closeButton],
    );

    modalFragment.append(modal);

    const link = root.createComponent(
      Link,
      {
        overlay: modalFragment,
      },
      getLinkText(
        shippingOptionTitle,
        isTargetSelected,
      ),
    );

    root.append(link);

    target.subscribe(({cost, title}) => {
      shippingOptionTitle = title || '';
      modal.updateProps({
        title: `Shipping option: ${shippingOptionTitle}`,
      });

      text.replaceChildren(
        getFormattedCost(cost),
      );

      link.replaceChildren(
        getLinkText(
          shippingOptionTitle,
          isTargetSelected,
        ),
      );
    });

    isTargetSelectedSubscription.subscribe(
      (value) => {
        isTargetSelected = value;
        link.replaceChildren(
          getLinkText(
            shippingOptionTitle,
            isTargetSelected,
          ),
        );
      },
    );

    function getInlineText(
      title,
      isTargetSelected,
    ) {
      return `Shipping method (${title} is ${isTargetSelected ? '' : 'not'} selected)`;
    }

    function getFormattedCost({
      amount,
      currencyCode,
    }) {
      return Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currencyCode,
      }).format(amount);
    }

    function getLinkText(
      title,
      isTargetSelected,
    ) {
      return `View details (${title} is ${isTargetSelected ? '' : 'not'} selected)`;
    }
  },
);
