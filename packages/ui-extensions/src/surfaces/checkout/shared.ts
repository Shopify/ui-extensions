import type {ReadonlySignalLike} from '../../shared';

/**
 * The list of supported components.
 * As of October 1st, 2025, this is a subset of the components that will be available in the 2025-10 stable release.
 */
export const SUPPORTED_COMPONENTS = [
  'Abbreviation',
  'Announcement',
  'Badge',
  'Banner',
  'Box',
  'Button',
  'Checkbox',
  'Chip',
  'Choice',
  'ChoiceList',
  'Clickable',
  'ClickableChip',
  'ClipboardItem',
  'ConsentCheckbox',
  'ConsentPhoneField',
  'DateField',
  'DatePicker',
  'Details',
  'Divider',
  'DropZone',
  'EmailField',
  'Form',
  'Grid',
  'GridItem',
  'Heading',
  'Icon',
  'Image',
  'Link',
  'ListItem',
  'Map',
  'MapMarker',
  'Modal',
  'MoneyField',
  'NumberField',
  'Option',
  'OrderedList',
  'Paragraph',
  'PasswordField',
  'PaymentIcon',
  'PhoneField',
  'Popover',
  'PressButton',
  'ProductThumbnail',
  'Progress',
  'QueryContainer',
  'QRCode',
  'ScrollBox',
  'Section',
  'Select',
  'Sheet',
  'SkeletonParagraph',
  'Spinner',
  'Stack',
  'Summary',
  'Switch',
  'Text',
  'TextArea',
  'TextField',
  'Time',
  'Tooltip',
  'UnorderedList',
  'UrlField',
] as const;

/**
 * Note: Chat is not supported in the 2025-10 release candidate, but it is tied to a target, and we don't want to remove the target documentation.
 * Once Chat is supported, you can remove this note.
 * @private
 */
export type PrivateComponent = 'Chat';

export type ThankYouComponent = 'Announcement';

export type AnyComponent =
  | (typeof SUPPORTED_COMPONENTS)[number]
  | PrivateComponent;

/**
 * The list of supported components.
 * As of October 1st, 2025, this is a subset of the components that will be available in the 2025-10 stable release.
 */
export type AnyCheckoutComponent = Exclude<AnyComponent, ThankYouComponent>;

export type AnyThankYouComponent = (typeof SUPPORTED_COMPONENTS)[number];

export type AllowedComponents<Allowed extends AnyComponent> = Allowed;
export type AnyCheckoutComponentExcept<Except extends AnyCheckoutComponent> =
  Exclude<AnyCheckoutComponent, Except>;

/**
 * Represents a read-only value managed on the main thread that an extension can subscribe to.
 *
 * Example: Checkout uses this to manage the state of an object and
 * communicate state changes to extensions running in a sandboxed web worker.
 *
 * This interface is compatible with [Preact's ReadonlySignal](https://github.com/preactjs/signals/blob/a023a132a81bd4ba4a0bebb8cbbeffbd8c8bbafc/packages/core/src/index.ts#L700-L709).
 *
 * Some fields are deprecated but still supported for backwards compatibility.
 * In version 2025-10, [`StatefulRemoteSubscribable`](https://github.com/Shopify/remote-dom/blob/03929aa8418a89d41d294005f219837582718df8/packages/async-subscription/src/types.ts#L17) was replaced with `ReadonlySignalLike`. Checkout will remove the old fields some time in the future.
 *
 */
export interface SubscribableSignalLike<T> extends ReadonlySignalLike<T> {
  /**
   * @deprecated Use `.value` instead.
   */
  readonly current: T;
  /**
   * @deprecated No longer needed. Use Preact Signal management instead.
   */
  destroy(): Promise<void>;
}
