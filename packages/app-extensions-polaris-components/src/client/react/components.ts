import {
  ReactPropsFromRemoteComponentType,
  createRemoteReactComponent,
} from '@shopify/remote-ui-react';

import {
  Card as BaseCard,
  CardSection as BaseCardSection,
  Checkbox as BaseCheckbox,
  Layout as BaseLayout,
  LayoutSection as BaseLayoutSection,
  TextField as BaseTextField,
  Toast as BaseToast,
  Stack as BaseStack,
  Text as BaseText,
} from '../core';

export type CardProps = ReactPropsFromRemoteComponentType<typeof BaseCard>;
export const Card: any = createRemoteReactComponent<'Card', {}>(BaseCard);

export type CardSectionProps = ReactPropsFromRemoteComponentType<typeof BaseCardSection>;
export const CardSection: any = createRemoteReactComponent(BaseCardSection);

export const Toast: any = createRemoteReactComponent(BaseToast);
export type ToastProps = ReactPropsFromRemoteComponentType<typeof BaseToast>;

export const Stack: any = createRemoteReactComponent(BaseStack);
export type StackProps = ReactPropsFromRemoteComponentType<typeof BaseStack>;

export type CheckboxProps = ReactPropsFromRemoteComponentType<typeof BaseCheckbox>;
export const Checkbox: any = createRemoteReactComponent(BaseCheckbox);

export type LayoutProps = ReactPropsFromRemoteComponentType<typeof BaseLayout>;
export const Layout: any = createRemoteReactComponent(BaseLayout);

export type LayoutSectionProps = ReactPropsFromRemoteComponentType<typeof BaseLayoutSection>;
export const LayoutSection: any = createRemoteReactComponent(BaseLayoutSection);

export type TextFieldProps = ReactPropsFromRemoteComponentType<typeof BaseTextField>;
export const TextField: any = createRemoteReactComponent(BaseTextField);

export type TextProps = ReactPropsFromRemoteComponentType<typeof BaseText>;
export const Text: any = createRemoteReactComponent(BaseText);
