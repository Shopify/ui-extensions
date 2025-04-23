import type {ImageProps as BaseImageProps} from '@shopify/ui-api-design';

import type {
  BorderShorthand,
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
  border?: BorderShorthand;

  borderWidth?: MaybeAllValuesShorthandProperty<ReducedBorderSizeKeyword> | '';

  borderRadius?: MaybeAllValuesShorthandProperty<
    Extract<
      BaseImageProps['borderRadius'],
      'none' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'max'
    >
  >;
}

export interface ImageElement extends ImageProps, Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-image': ImageElement;
  }
}
