// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference types="@shopify/ui-extensions/admin" />
import {createRemoteComponent} from './components/util';
import type {
  BadgeProps,
  BoxProps,
  ButtonProps,
  CheckboxProps,
  DividerProps,
  HeadingProps,
  IconProps,
  ImageProps,
  LinkProps,
  OptionProps,
  OptionGroupProps,
  ParagraphProps,
  SectionProps,
  SelectProps,
  SpinnerProps,
  StackProps,
  TextProps,
} from './props';

export const Badge = createRemoteComponent<
  BadgeProps,
  HTMLElementTagNameMap['shopify-badge']
>('shopify-badge');
export const Box = createRemoteComponent<
  BoxProps,
  HTMLElementTagNameMap['shopify-box']
>('shopify-box');
export const Button = createRemoteComponent<
  ButtonProps,
  HTMLElementTagNameMap['shopify-button']
>('shopify-button');
export const Checkbox = createRemoteComponent<
  CheckboxProps,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  HTMLElementTagNameMap['shopify-checkbox']
>('shopify-checkbox');
export const Divider = createRemoteComponent<
  DividerProps,
  HTMLElementTagNameMap['shopify-divider']
>('shopify-divider');
export const Heading = createRemoteComponent<
  HeadingProps,
  HTMLElementTagNameMap['shopify-heading']
>('shopify-heading');
export const Icon = createRemoteComponent<
  IconProps,
  HTMLElementTagNameMap['shopify-icon']
>('shopify-icon');
export const Image = createRemoteComponent<
  ImageProps,
  HTMLElementTagNameMap['shopify-image']
>('shopify-image');
export const Link = createRemoteComponent<
  LinkProps,
  HTMLElementTagNameMap['shopify-link']
>('shopify-link');
export const Option = createRemoteComponent<
  OptionProps,
  HTMLElementTagNameMap['shopify-option']
>('shopify-option');
export const OptionGroup = createRemoteComponent<
  OptionGroupProps,
  HTMLElementTagNameMap['shopify-option-group']
>('shopify-option-group');
export const Paragraph = createRemoteComponent<
  ParagraphProps,
  HTMLElementTagNameMap['shopify-paragraph']
>('shopify-paragraph');
export const Section = createRemoteComponent<
  SectionProps,
  HTMLElementTagNameMap['shopify-section']
>('shopify-section');
export const Select = createRemoteComponent<
  SelectProps,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  HTMLElementTagNameMap['shopify-select']
>('shopify-select');
export const Spinner = createRemoteComponent<
  SpinnerProps,
  HTMLElementTagNameMap['shopify-spinner']
>('shopify-spinner');
export const Stack = createRemoteComponent<
  StackProps,
  HTMLElementTagNameMap['shopify-stack']
>('shopify-stack');
export const Text = createRemoteComponent<
  TextProps,
  HTMLElementTagNameMap['shopify-text']
>('shopify-text');
