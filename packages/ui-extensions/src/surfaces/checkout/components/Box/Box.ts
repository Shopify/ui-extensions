import type {BoxProps as BaseBoxProps} from '@shopify/ui-api-design';
import type {MaybeAllValuesShorthandProperty} from '@shopify/ui-api-design/dist/shared/utils';

import type {BorderShorthand, ReducedBorderSizeKeyword} from '../shared';

export interface BoxProps
  extends Omit<
    BaseBoxProps,
    | 'accessibilityRole'
    | 'background'
    | 'blockSize'
    | 'border'
    | 'borderColor'
    | 'borderRadius'
    | 'borderWidth'
    | 'children'
    | 'inlineSize'
  > {
  accessibilityRole?: Extract<
    BaseBoxProps['accessibilityRole'],
    | 'main'
    | 'header'
    | 'footer'
    | 'section'
    | 'aside'
    | 'navigation'
    | 'ordered-list'
    | 'list-item'
    | 'list-item-separator'
    | 'unordered-list'
    | 'separator'
    | 'status'
    | 'alert'
    | 'generic'
    | 'presentation'
    | 'none'
  >;

  background?: Extract<
    BaseBoxProps['background'],
    'transparent' | 'subdued' | 'base'
  >;

  border?: BorderShorthand;

  borderWidth?: MaybeAllValuesShorthandProperty<ReducedBorderSizeKeyword> | '';

  borderRadius?: MaybeAllValuesShorthandProperty<
    Extract<
      BaseBoxProps['borderRadius'],
      'none' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'max'
    >
  >;
}

export interface BoxElement extends BoxProps, Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-box': BoxElement;
  }
}
