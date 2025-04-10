import {createRemoteComponent} from '@remote-ui/core';
import type {ImageProps as BaseImageProps} from '@shopify/ui-api-design/dist/components/Image';

import type {
  MaybeAllValuesShorthandProperty,
  ReducedBorderSizeKeyword,
} from '../shared';

export interface ImageProps
  extends Omit<
    BaseImageProps,
    | 'border'
    | 'borderColor'
    | 'borderRadius'
    | 'borderWidth'
    | 'inlineSize'
    | 'onLoad'
    | 'onError'
  > {
  borderWidth?: MaybeAllValuesShorthandProperty<ReducedBorderSizeKeyword> | '';

  borderRadius?: MaybeAllValuesShorthandProperty<
    Extract<
      BaseImageProps['borderRadius'],
      'none' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'max'
    >
  >;
}

export const imageAccessibilityRoles = [
  'img',
  'presentation',
  'none',
] satisfies ImageProps['accessibilityRole'][];

export const imageBorderRadii = [
  'none',
  'small-100',
  'small',
  'base',
  'large',
  'large-100',
  'max',
] satisfies ImageProps['borderRadius'][];

export const imageBorderStyles = [
  'none',
  'solid',
  'dashed',
  'dotted',
  'auto',
] satisfies ImageProps['borderStyle'][];

export const imageBorderWidths = [
  'base',
  'large-100',
  'large-200',
] satisfies ImageProps['borderWidth'][];

export const imageLoadings = [
  'eager',
  'lazy',
] satisfies ImageProps['loading'][];

export const imageObjectFits = [
  'contain',
  'cover',
] satisfies ImageProps['objectFit'][];

/**
 * Image is used for large format, responsive images.
 */
export interface ImageElement extends ImageProps, Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-image': ImageElement;
  }
}

export const Image = createRemoteComponent<'Image', ImageProps>('Image');
