import {createRemoteComponent} from './components/util';
import {
  type BadgeProps,
  type BoxProps,
  type ButtonProps,
  type CheckboxProps,
  type DividerProps,
  type HeadingProps,
  type IconProps,
  type ImageProps,
  type LinkProps,
  type OptionProps,
  type OptionGroupProps,
  type ParagraphProps,
  type SectionProps,
  type SelectProps,
  type SpinnerProps,
  type StackProps,
  type TextProps,
} from './props';

export const Badge = createRemoteComponent<BadgeProps>('shopify-badge');
export const Box = createRemoteComponent<BoxProps>('shopify-box');
export const Button = createRemoteComponent<ButtonProps>('shopify-button');
export const Checkbox =
  createRemoteComponent<CheckboxProps>('shopify-checkbox');
export const Divider = createRemoteComponent<DividerProps>('shopify-divider');
export const Heading = createRemoteComponent<HeadingProps>('shopify-heading');
export const Icon = createRemoteComponent<IconProps>('shopify-icon');
export const Image = createRemoteComponent<ImageProps>('shopify-image');
export const Link = createRemoteComponent<LinkProps>('shopify-link');
export const Option = createRemoteComponent<OptionProps>('shopify-option');
export const OptionGroup = createRemoteComponent<OptionGroupProps>(
  'shopify-option-group',
);
export const Paragraph =
  createRemoteComponent<ParagraphProps>('shopify-paragraph');
export const Section = createRemoteComponent<SectionProps>('shopify-section');
export const Select = createRemoteComponent<SelectProps>('shopify-select');
export const Spinner = createRemoteComponent<SpinnerProps>('shopify-spinner');
export const Stack = createRemoteComponent<StackProps>('shopify-stack');
export const Text = createRemoteComponent<TextProps>('shopify-text');
