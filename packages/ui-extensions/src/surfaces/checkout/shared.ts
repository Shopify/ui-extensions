/**
 * The list of supported components.
 * As of April 15th, 2025, this is a subset of the components that will be available in the 2025-10 stable release.
 */
export const SUPPORTED_COMPONENTS = [
  'Abbreviation',
  'Badge',
  'Banner',
  'Box',
  'Button',
  'Checkbox',
  'Clickable',
  'ClipboardItem',
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
  'NumberField',
  'Option',
  'OrderedList',
  'Paragraph',
  'PaymentIcon',
  'PhoneField',
  'Popover',
  'ProductThumbnail',
  'Progress',
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
  'UnorderedList',
  'UrlField',
] as const;

/**
 * Note: Chat is not supported in the 2025-07 release candidate, but it is tied to a target, and we don't want to remove the target documentation.
 * Once Chat is supported, you can remove this note.
 * @private
 */
export type PrivateComponent = 'Chat';

/**
 * The list of supported components.
 * As of April 15th, 2025, this is a subset of the components that will be available in the 2025-10 stable release.
 */
export type AnyComponent =
  | (typeof SUPPORTED_COMPONENTS)[number]
  | PrivateComponent;

export type AllowedComponents<Allowed extends AnyComponent> = Allowed;
export type AnyComponentExcept<Except extends AnyComponent> = Exclude<
  AnyComponent,
  Except
>;
