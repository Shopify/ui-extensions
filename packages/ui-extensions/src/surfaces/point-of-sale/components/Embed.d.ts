/** VERSION: undefined **/
/* eslint-disable import-x/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import-x/namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  EmbedProps,
  SizeUnitsOrAuto,
  SizeUnits,
  SizeUnitsOrNone,
  Key,
  Ref,
} from './components-shared.d.ts';

/**
 * The embed component displays a preview of printable content from a specified source URL. Use it to show merchants what will be printed before triggering the actual print operation.
 *
 * Embed works in conjunction with the Print API to provide complete print functionality from preview to execution.
 *
 * The supported document types are the content types accepted by the `type` property:
 *
 * - **HTML documents** (`text/html`) - Receipts, invoices, and formatted reports with CSS styling and embedded images.
 * - **Text files** (`text/plain`) - Plain text content such as simple receipts and data exports.
 * - **PDF files** (`application/pdf`) - Complex documents and compliance requirements. On Android, the component shows a placeholder instead of a PDF preview.
 *
 * [Learn how to build a print extension in POS](/docs/apps/build/pos/build-print-extension).
 * @publicDocs
 */
export interface EmbedJSXProps
  extends Pick<
    EmbedProps,
    | 'type'
    | 'src'
    | 'accessibilityLabel'
    | 'blockSize'
    | 'minBlockSize'
    | 'maxBlockSize'
    | 'inlineSize'
    | 'minInlineSize'
    | 'maxInlineSize'
  > {
  /**
   * Adjust the block size.
   *
   * @default 'auto'
   */
  blockSize?: SizeUnitsOrAuto;
  /**
   * Adjust the minimum block size.
   *
   * @default '0'
   */
  minBlockSize?: SizeUnits;
  /**
   * Adjust the maximum block size.
   *
   * @default 'none'
   */
  maxBlockSize?: SizeUnitsOrNone;
  /**
   * Adjust the inline size.
   *
   * @default 'auto'
   */
  inlineSize?: SizeUnitsOrAuto;
  /**
   * Adjust the minimum inline size.
   *
   * @default '0'
   */
  minInlineSize?: SizeUnits;
  /**
   * Adjust the maximum inline size.
   *
   * @default 'none'
   */
  maxInlineSize?: SizeUnitsOrNone;
}

export type ComponentChildren = any;
/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
  key?: Key;
  ref?: Ref<TClass>;
  slot?: Lowercase<string>;
}
/**
 * Used when an element has children.
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement>
  extends BaseElementProps<TClass> {
  children?: ComponentChildren;
}
export type IntrinsicElementProps<T> = T &
  BaseElementPropsWithChildren<T & HTMLElement>;
export type HtmlElementTagNameProps<T> = T & HTMLElement;

declare const tagName = 's-embed';
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: HtmlElementTagNameProps<EmbedJSXProps>;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<EmbedJSXProps>;
    }
  }
}

export {tagName};
export type {EmbedJSXProps};
