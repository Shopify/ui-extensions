/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  UnorderedListProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

/**
 * The properties for the unordered list component. These properties define a bulleted list of items where the order doesn't matter.
 * @publicDocs
 */
export interface UnorderedListProps extends UnorderedListProps$1 {}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

/** Used when an element does not have children. */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /** Assigns a unique key to this element. */
  key?: preact.Key;
  /** Assigns a ref (generally from `useRef()`) to this element. */
  ref?: preact.Ref<TClass>;
  /** Assigns this element to a parent's slot. */
  slot?: Lowercase<string>;
}
/** Used when an element has children. */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  children?: preact.ComponentChildren;
}

/**
 * A custom element for displaying a bulleted list of items where the order doesn't matter. Use unordered list when you have a collection of related items without a specific sequence, such as features, options, or bullet points.
 */
declare class UnorderedList
  extends PolarisCustomElement
  implements UnorderedListProps
{
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: UnorderedList;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: UnorderedListJSXProps &
        PreactBaseElementPropsWithChildren<UnorderedList>;
    }
  }
}

declare const tagName = 's-unordered-list';
/**
 * The JSX properties for the unordered list component. These properties define how an unordered list is rendered in Preact or JSX.
 * @publicDocs
 */
export interface UnorderedListJSXProps
  extends Partial<UnorderedListProps>,
    Pick<UnorderedListProps$1, 'id'> {
  /**
   * The items in the unordered list. Only list item components are accepted.
   */
  children?: ComponentChildren;
}

export {UnorderedList};
export type {UnorderedListJSXProps};
