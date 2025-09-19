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
  'Choice',
  'ChoiceList',
  'Clickable',
  'ClipboardItem',
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
