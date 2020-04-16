import {
  ReactPropsFromRemoteComponentType,
  createRemoteReactComponent,
} from '@shopify/remote-ui-react';

import {
  Badge as BaseBadge,
  Button as BaseButton,
  Card as BaseCard,
  CardSection as BaseCardSection,
  Checkbox as BaseCheckbox,
  Clickable as BaseClickable,
  Icon as BaseIcon,
  Layout as BaseLayout,
  LayoutSection as BaseLayoutSection,
  Modal as BaseModal,
  Link as BaseLink,
  Page as BasePage,
  Select as BaseSelect,
  Spinner as BaseSpinner,
  Stack as BaseStack,
  StackItem as BaseStackItem,
  Text as BaseText,
  TextField as BaseTextField,
  Thumbnail as BaseThumbnail,
} from '../core';

export type BadgeProps = ReactPropsFromRemoteComponentType<typeof BaseBadge>;
export const Badge = createRemoteReactComponent(BaseBadge as any);

export type ButtonProps = ReactPropsFromRemoteComponentType<typeof BaseButton>;
export const Button = createRemoteReactComponent(BaseButton as any);

export type CardProps = ReactPropsFromRemoteComponentType<typeof BaseCard>;
export const Card = createRemoteReactComponent(BaseCard as any);

export type CardSectionProps = ReactPropsFromRemoteComponentType<typeof BaseCardSection>;
export const CardSection = createRemoteReactComponent(BaseCardSection as any);

export type CheckboxProps = ReactPropsFromRemoteComponentType<typeof BaseCheckbox>;
export const Checkbox = createRemoteReactComponent(BaseCheckbox as any);

export type ClickableProps = ReactPropsFromRemoteComponentType<typeof BaseClickable>;
export const Clickable = createRemoteReactComponent(BaseClickable as any);

export type IconProps = ReactPropsFromRemoteComponentType<typeof BaseIcon>;
export const Icon = createRemoteReactComponent(BaseIcon as any);

export type LayoutProps = ReactPropsFromRemoteComponentType<typeof BaseLayout>;
export const Layout = createRemoteReactComponent(BaseLayout as any);

export type LayoutSectionProps = ReactPropsFromRemoteComponentType<typeof BaseLayoutSection>;
export const LayoutSection = createRemoteReactComponent(BaseLayoutSection as any);

export type ModalProps = ReactPropsFromRemoteComponentType<typeof BaseModal>;
export const Modal = createRemoteReactComponent(BaseModal as any);

export type LinkProps = ReactPropsFromRemoteComponentType<typeof BaseLink>;
export const Link = createRemoteReactComponent(BaseLink as any);

export type PageProps = ReactPropsFromRemoteComponentType<typeof BasePage>;
export const Page = createRemoteReactComponent(BasePage as any);

export type SelectProps = ReactPropsFromRemoteComponentType<typeof BaseSelect>;
export const Select = createRemoteReactComponent(BaseSelect as any);

export type SpinnerProps = ReactPropsFromRemoteComponentType<typeof BaseSpinner>;
export const Spinner = createRemoteReactComponent(BaseSpinner as any);

export type StackProps = ReactPropsFromRemoteComponentType<typeof BaseStack>;
export const Stack = createRemoteReactComponent(BaseStack as any);

export type StackItemProps = ReactPropsFromRemoteComponentType<typeof BaseStackItem>;
export const StackItem = createRemoteReactComponent(BaseStackItem as any);

export type TextProps = ReactPropsFromRemoteComponentType<typeof BaseText>;
export const Text = createRemoteReactComponent(BaseText as any);

export type TextFieldProps = ReactPropsFromRemoteComponentType<typeof BaseTextField>;
export const TextField = createRemoteReactComponent(BaseTextField as any);

export type ThumbnailProps = ReactPropsFromRemoteComponentType<typeof BaseThumbnail>;
export const Thumbnail = createRemoteReactComponent(BaseThumbnail as any);
