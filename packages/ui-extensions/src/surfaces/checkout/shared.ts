/**
 * The list of supported components.
 * As of April 15th, 2025, this is a subset of the components that will be available in the 2025-07 stable release.
 */
export type AnyComponent =
  | 'Abbreviation'
  | 'Banner'
  | 'Box'
  | 'Button'
  | 'Checkbox'
  /**
   * Note: Chat is not supported in the 2025-07 release candidate, but it is tied to a target, and we don't want to remove the target documentation.
   * Once Chat is supported, you can remove this note.
   * @private
   */
  | 'Chat'
  | 'ClipboardItem'
  | 'DropZone'
  | 'EmailField'
  | 'Form'
  | 'Heading'
  | 'Icon'
  | 'Image'
  | 'Link'
  | 'ListItem'
  | 'Map'
  | 'MapMarker'
  | 'Modal'
  | 'NumberField'
  | 'Option'
  | 'OrderedList'
  | 'Paragraph'
  | 'PaymentIcon'
  | 'PhoneField'
  | 'Progress'
  | 'ProductThumbnail'
  | 'Select'
  | 'Spinner'
  | 'Stack'
  | 'Text'
  | 'TextArea'
  | 'Time'
  | 'UnorderedList';

export type AllowedComponents<Allowed extends AnyComponent> = Allowed;
export type AnyComponentExcept<Except extends AnyComponent> = Exclude<
  AnyComponent,
  Except
>;
