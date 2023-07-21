import {
  extension,
  Icon,
  Pressable,
  Tooltip,
} from '@shopify/ui-extensions/checkout';

export default extension('Checkout::Dynamic::Render', (root) => {
  const tooltipFragment = root.createFragment();
  const tooltip = root.createComponent(
    Tooltip,
    {},
    'In case we need to contact you about your order',
  );
  tooltipFragment.appendChild(tooltip);
  const pressable = root.createComponent(
    Pressable,
    {overlay: tooltipFragment},
    [root.createComponent(Icon, {source: 'questionFill'})],
  );

  root.appendChild(pressable);
});
