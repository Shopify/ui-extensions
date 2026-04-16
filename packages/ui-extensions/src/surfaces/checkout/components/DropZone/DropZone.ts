import {createRemoteComponent} from '@remote-ui/core';

import type {IdProps} from '../shared';

/** @publicDocs */
export interface DropZoneProps extends IdProps {
  /**
   * Whether the drop zone is disabled, preventing any user interaction.
   */
  disabled?: boolean;

  /**
   * Whether the field needs a value. This requirement adds semantic value
   * to the field, but it will not cause an error to appear automatically.
   * If you want to present an error when this field is empty, you can do
   * so with the `error` prop.
   */
  required?: boolean;

  /**
   * An error message displayed below the field to indicate validation problems. When set, the drop zone is styled with error indicators.
   */
  error?: string;

  /**
   * The text displayed as the field label, which identifies the purpose of the drop zone to users.
   */
  label?: string;

  /**
   * An identifier for the field that is unique within the nearest
   * containing `Form` component.
   */
  name?: string;

  /**
   * A string representing the types of files that are accepted by the dropzone.
   * This string is a comma-separated list of unique file type specifiers which can be one of the following:
   * - A file extension starting with a period (".") character (such as .jpg, .pdf, .doc)
   * - A valid MIME type string with no extensions
   *
   * If left empty, the dropzone will accept all files.
   *
   * Learn more about the [`accept`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept) attribute.
   */
  accept?: string;

  /**
   * A label that describes the purpose or contents of the item. When set,
   * it will be announced to users of assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;

  /**
   * Defines if the user can select or drop multiple files at once.
   *
   * @default false
   */
  multiple?: boolean;

  /**
   * A callback fired when files are dropped or selected.
   *
   * Learn more about the [`drop`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event) event.
   */
  onInput?(files: File[]): void;

  /**
   * A callback fired when rejected files are dropped. Files are rejected based on the `accept` prop.
   */
  onDropRejected?(files: File[]): void;
}

export const DropZone = createRemoteComponent<'DropZone', DropZoneProps>(
  'DropZone',
);
