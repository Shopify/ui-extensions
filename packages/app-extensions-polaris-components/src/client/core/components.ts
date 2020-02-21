import {createRemoteComponent} from '@shopify/remote-ui-core';

export interface LayoutProps {}
export const Layout = createRemoteComponent<'Layout', LayoutProps>('Layout');

export interface LayoutSectionProps {
  oneHalf?: boolean;
}
export const LayoutSection = createRemoteComponent<'LayoutSection', LayoutSectionProps>(
  'LayoutSection',
);

export interface CardProps {
  title: string;
  sectioned?: boolean;
}
export const Card = createRemoteComponent<'Card', CardProps>('Card');

export interface CardSectionProps {
  title?: string;
}
export const CardSection = createRemoteComponent<'CardSection', CardSectionProps>('CardSection');

export interface TextFieldProps {
  label: string;
  type?: 'text' | 'search';
  value: string;
  helpText?: string;
  placeholder?: string;
  multiline?: number | boolean;
  onChange(value: string): void | Promise<void>;
  error?: string;
  showCharacterCount?: boolean;
  onBlur?(): void | Promise<void>;
  onFocus?(): void | Promise<void>;
}
export const TextField = createRemoteComponent<'TextField', TextFieldProps>('TextField');

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange(value: boolean): void | Promise<void>;
}
export const Checkbox = createRemoteComponent<'Checkbox', CheckboxProps>('Checkbox');

export interface ToastProps {
  message: string;
  error?: boolean;
  onDismiss?: () => void;
}

export const Toast = createRemoteComponent<'Toast', ToastProps>('Toast');

export interface StackProps {
  vertical: boolean;
  distribution: Distribution;
  spacing: Spacing;
}

enum Distribution {
  Leading,
  Trailing,
  Center,
  Fill,
}

enum Spacing {
  ExtraTight,
  Tight,
  Loose,
  ExtraLoose,
  None,
}

export const Stack = createRemoteComponent<'Stack', StackProps>('Stack');

export interface TextProps {}
export const Text = createRemoteComponent<'Text', TextProps>('Text');

export interface RemoteComponentMap {
  [Layout.type]: [LayoutProps, typeof LayoutSection];
  [LayoutSection.type]: [LayoutSectionProps, string];
  [Card.type]: [CardProps, string];
  [CardSection.type]: [CardSectionProps, string];
  [TextField.type]: [TextFieldProps, never];
  [Toast.type]: [any, never];
  [Stack.type]: [StackProps, React.ReactNode];
  [Text.type]: [TextProps, React.ReactNode];
}

interface ComponentMap extends RemoteComponentMap {}

declare module '@shopify/remote-ui-types' {
  interface RemoteComponentMap extends ComponentMap {}
}
