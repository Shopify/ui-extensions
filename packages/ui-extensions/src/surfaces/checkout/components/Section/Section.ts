import type {SectionProps as BaseSectionProps} from '@shopify/ui-api-design';

export interface SectionProps
  extends Omit<BaseSectionProps, 'children' | 'padding'> {}

export interface SectionElement extends SectionProps, Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-section': SectionElement;
  }
}
