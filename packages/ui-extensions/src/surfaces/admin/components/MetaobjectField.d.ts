/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />

import type {Key, Ref} from 'preact';

/**
 * The properties for the contextual metaobject field component.
 * @publicDocs
 */
export interface MetaobjectFieldProps {
  /**
   * The key of the metaobject field to render using Admin's native field
   * editor.
   */
  fieldKey: string;
}

/**
 * The JSX properties for the contextual metaobject field component.
 * @publicDocs
 */
export interface MetaobjectFieldJSXProps extends MetaobjectFieldProps {
  key?: Key;
  ref?: Ref<MetaobjectField>;
  slot?: Lowercase<string>;
}

declare const tagName = 's-metaobject-field';

/**
 * Renders Admin's native editor for a field in the current metaobject form.
 * This contextual component does not accept children.
 */
declare class MetaobjectField
  extends HTMLElement
  implements MetaobjectFieldProps
{
  fieldKey: string;
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: MetaobjectField;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: MetaobjectFieldJSXProps;
    }
  }
}

export {MetaobjectField};
