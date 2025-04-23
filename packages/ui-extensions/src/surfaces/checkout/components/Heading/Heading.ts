import type {HeadingProps as BaseHeadingProps} from '@shopify/ui-api-design';

export interface HeadingProps
  extends Omit<
    BaseHeadingProps,
    'children' | 'lineClamp' | 'accessibilityVisibility'
  > {}

export interface HeadingElement extends HeadingProps, Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-heading': HeadingElement;
  }
}
