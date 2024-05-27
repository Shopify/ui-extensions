import {
  Banner,
  ScrollView,
  Screen,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.home.modal.render',
  (root) => {
    const screen = root.createComponent(Screen, {
      title: 'Home',
      name: 'Home',
    });
    const scrollView =
      root.createComponent(ScrollView);

    scrollView.appendChild(
      root.createComponent(Banner, {
        title: 'Information Banner',
        variant: 'information',
        action: 'Ok',
        visible: true,
      }),
    );

    scrollView.appendChild(
      root.createComponent(Banner, {
        title: 'Confirmation Banner',
        variant: 'confirmation',
        visible: true,
      }),
    );

    scrollView.appendChild(
      root.createComponent(Banner, {
        title: 'Alert Banner',
        variant: 'alert',
        visible: true,
      }),
    );

    scrollView.appendChild(
      root.createComponent(Banner, {
        title: 'Error Banner',
        variant: 'error',
        visible: true,
      }),
    );

    screen.appendChild(scrollView);
    root.appendChild(screen);
  },
);
