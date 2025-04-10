import {createRemoteComponent} from '@remote-ui/core';
import type {StackProps as BaseStackProps} from '@shopify/ui-api-design/dist/components/Stack';
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

export const stackAccessibilityRoles = [
  'main',
  'header',
  'footer',
  'section',
  'aside',
  'navigation',
  'ordered-list',
  'list-item',
  'list-item-separator',
  'unordered-list',
  'separator',
  'status',
  'alert',
  'generic',
  'none',
] satisfies StackProps['accessibilityRole'][];

export const stackAlignContents = [
  'start',
  'center',
  'end',
  'normal',
] satisfies StackProps['alignContent'][];

export const stackAlignItems = [
  'start',
  'center',
  'end',
  'normal',
] satisfies StackProps['alignItems'][];

export const stackBackgrounds = [
  'transparent',
  'subdued',
  'base',
] satisfies StackProps['background'][];

export const stackBorderRadii = [
  'none',
  'small-100',
  'small',
  'base',
  'large',
  'large-100',
  'max',
] satisfies StackProps['borderRadius'][];

export const stackColumnGaps = [
  'small-500',
  'small-400',
  'small-300',
  'small-200',
  'small-100',
  'small',
  'base',
  'large',
  'large-100',
  'large-200',
  'large-300',
  'large-400',
  'large-500',
  'none',
] satisfies StackProps['columnGap'][];

export const stackDirections = [
  'inline',
  'block',
] satisfies StackProps['direction'][];

export const stackDisplays = ['none', 'auto'] satisfies StackProps['display'][];

export const stackGaps = [
  'small-500',
  'small-400',
  'small-300',
  'small-200',
  'small-100',
  'small',
  'base',
  'large',
  'large-100',
  'large-200',
  'large-300',
  'large-400',
  'large-500',
  'none',
] satisfies StackProps['gap'][];

export const stackJustifyContents = [
  'start',
  'center',
  'end',
  'normal',
] satisfies StackProps['justifyContent'][];

export const stackOverflows = [
  'hidden',
  'visible',
] satisfies StackProps['overflow'][];

export const stackRowGaps = [
  'small-500',
  'small-400',
  'small-300',
  'small-200',
  'small-100',
  'small',
  'base',
  'large',
  'large-100',
  'large-200',
  'large-300',
  'large-400',
  'large-500',
  'none',
] satisfies StackProps['rowGap'][];

export interface StackElement extends StackProps, Omit<HTMLElement, 'id'> {}

declare global {
  interface HTMLElementTagNameMap {
    's-stack': StackElement;
  }
}

export const Stack = createRemoteComponent<'Stack', StackProps>('Stack');
