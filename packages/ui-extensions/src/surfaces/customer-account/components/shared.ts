export interface IdProps {
  /**
   * A unique identifier for the element.
   */
  id?: string;
}

export type SizeKeyword =
  | 'small-500'
  | 'small-400'
  | 'small-300'
  | 'small-200'
  | 'small-100'
  | 'small'
  | 'base'
  | 'large'
  | 'large-100'
  | 'large-200'
  | 'large-300'
  | 'large-400'
  | 'large-500';

export interface BaseElementProps<TClass = HTMLElement> {
  // Assigns a unique key to this element.
  key?: preact.Key;
  // Assigns a ref (generally from `useRef()`) to this element.
  ref?: preact.Ref<TClass>;
  // Assigns this element to a parent's slot.
  slot?: Lowercase<string>;
}

/**
 * Used when an element has children.
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement>
  extends BaseElementProps<TClass> {
  children?: preact.ComponentChildren;
}
