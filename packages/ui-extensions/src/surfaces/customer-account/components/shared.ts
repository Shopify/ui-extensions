export interface IdProps {
  /**
   * A unique identifier for the component.
   */
  id?: string;
}

export type Size =
  | 'extraSmall'
  | 'small'
  | 'base'
  | 'large'
  | 'extraLarge'
  | 'fill';

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
