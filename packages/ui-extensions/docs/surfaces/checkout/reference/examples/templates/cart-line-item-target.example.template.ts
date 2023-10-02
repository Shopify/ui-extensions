import {extension} from '@shopify/ui-extensions/checkout';

export default extension(
  '##TARGET##',
  (root, {target}) => {
    const text = root.createText(
      `Line item title: ${target.current.title}`,
    );
    root.appendChild(text);

    target.subscribe((updatedTarget) => {
      text.updateText(
        `Line item title: ${updatedTarget.title}`,
      );
    });
  },
);
