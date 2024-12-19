import {
  extend,
  Navigator,
  Screen,
  ScrollView,
  Box,
  Image,
} from '@shopify/ui-extensions/point-of-sale';

export default extend(
  'pos.home.modal.render',
  (root) => {
    const navigator =
      root.createComponent(Navigator);

    const imageBoxScreen =
      navigator.createComponent(Screen, {
        name: 'ImageBox',
        title: 'ImageBox',
      });

    const scrollView =
      imageBoxScreen.createComponent(ScrollView);

    const box = scrollView.createComponent(Box, {
      blockSize: '100px',
      inlineSize: '100px',
      paddingInlineStart: '100',
      paddingInlineEnd: '100',
      paddingBlockStart: '100',
      paddingBlockEnd: '100',
    });

    const image = box.createComponent(Image, {
      src: 'example.png',
      size: 'contain',
    });

    box.appendChild(image);
    scrollView.appendChild(box);
    imageBoxScreen.appendChild(scrollView);
    navigator.appendChild(imageBoxScreen);

    root.appendChild(navigator);
  },
);
