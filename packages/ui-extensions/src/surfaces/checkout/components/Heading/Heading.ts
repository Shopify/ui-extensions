import {createRemoteComponent} from '@remote-ui/core';
import type {HeadingProps as BaseHeadingProps} from '@shopify/ui-api-design/dist/components/Heading';

export interface HeadingProps
  extends Omit<
    BaseHeadingProps,
    'children' | 'lineClamp' | 'accessibilityVisibility'
  > {}

export const headingAccessibilityRoles = [
  'heading',
  'presentation',
  'none',
] satisfies HeadingProps['accessibilityRole'][];

/**
 * Headings control the visual style of headings. Use headings to introduce major
 * sections, like Contact information, Shipping address, or Shipping method.
 *
 * Unlike HTML headings, you don’t explicitly specify the position of the heading in the
 * document outline. Nest headings within the heading group component to control
 * the document outline structure used by assistive technologies.
 */
export interface HeadingElement extends HeadingProps, Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-heading': HeadingElement;
  }
}

export const Heading = createRemoteComponent<'Heading', HeadingProps>(
  'Heading',
);
