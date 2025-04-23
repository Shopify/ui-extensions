import type {StackProps as BaseStackProps} from '@shopify/ui-api-design';
import type {MaybeAllValuesShorthandProperty} from '@shopify/ui-api-design/dist/shared/utils';

import type {BorderShorthand, ReducedBorderSizeKeyword} from '../shared';

export interface StackProps
  extends Omit<
    BaseStackProps,
    | 'accessibilityVisibility'
    | 'accessibilityRole'
    | 'alignContent'
    | 'alignItems'
    | 'background'
    | 'blockSize'
    | 'border'
    | 'borderColor'
    | 'borderRadius'
    | 'borderWidth'
    | 'children'
    | 'justifyContent'
    | 'inlineSize'
  > {
  accessibilityRole?: Extract<
    BaseStackProps['accessibilityRole'],
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
    | 'none'
  >;

  background?: Extract<
    BaseStackProps['background'],
    'transparent' | 'subdued' | 'base'
  >;

  border?: BorderShorthand;

  borderWidth?: MaybeAllValuesShorthandProperty<ReducedBorderSizeKeyword> | '';

  borderRadius?: MaybeAllValuesShorthandProperty<
    Extract<
      BaseStackProps['borderRadius'],
      'none' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'max'
    >
  >;

  alignContent?: Extract<
    BaseStackProps['alignContent'],
    'start' | 'center' | 'end' | 'normal'
  >;

  alignItems?: Extract<
    BaseStackProps['alignItems'],
    'start' | 'center' | 'end' | 'normal'
  >;

  justifyContent?: Extract<
    BaseStackProps['justifyContent'],
    'start' | 'center' | 'end' | 'normal'
  >;
}

export interface StackElement extends StackProps, Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-stack': StackElement;
  }
}
