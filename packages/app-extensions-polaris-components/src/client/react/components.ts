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
  Page as BasePage,
  Select as BaseSelect,
  Spinner as BaseSpinner,
  Stack as BaseStack,
  StackItem as BaseStackItem,
  Text as BaseText,
  TextField as BaseTextField,
  Thumbnail as BaseThumbnail,
  Toast as BaseToast,
} from '../core';

export type BadgeProps = ReactPropsFromRemoteComponentType<typeof BaseBadge>;
export const Badge = createRemoteReactComponent(BaseBadge);

export type ButtonProps = ReactPropsFromRemoteComponentType<typeof BaseButton>;
export const Button = createRemoteReactComponent(BaseButton);

export type CardProps = ReactPropsFromRemoteComponentType<typeof BaseCard>;
export const Card = createRemoteReactComponent(BaseCard);

export type CardSectionProps = ReactPropsFromRemoteComponentType<typeof BaseCardSection>;
export const CardSection = createRemoteReactComponent(BaseCardSection);

export type CheckboxProps = ReactPropsFromRemoteComponentType<typeof BaseCheckbox>;
export const Checkbox = createRemoteReactComponent(BaseCheckbox);

export type ClickableProps = ReactPropsFromRemoteComponentType<typeof BaseClickable>;
export const Clickable = createRemoteReactComponent(BaseClickable);

export type IconProps = ReactPropsFromRemoteComponentType<typeof BaseIcon>;
export const Icon = createRemoteReactComponent(BaseIcon);

export type LayoutProps = ReactPropsFromRemoteComponentType<typeof BaseLayout>;
export const Layout = createRemoteReactComponent(BaseLayout);

export type LayoutSectionProps = ReactPropsFromRemoteComponentType<typeof BaseLayoutSection>;
export const LayoutSection = createRemoteReactComponent(BaseLayoutSection);

export type PageProps = ReactPropsFromRemoteComponentType<typeof BasePage>;
export const Page = createRemoteReactComponent(BasePage);

export type SelectProps = ReactPropsFromRemoteComponentType<typeof BaseSelect>;
export const Select = createRemoteReactComponent(BaseSelect);

export type SpinnerProps = ReactPropsFromRemoteComponentType<typeof BaseSpinner>;
export const Spinner = createRemoteReactComponent(BaseSpinner);

export type StackProps = ReactPropsFromRemoteComponentType<typeof BaseStack>;
export const Stack = createRemoteReactComponent(BaseStack);

export type StackItemProps = ReactPropsFromRemoteComponentType<typeof BaseStackItem>;
export const StackItem = createRemoteReactComponent(BaseStackItem);

export type TextProps = ReactPropsFromRemoteComponentType<typeof BaseText>;
export const Text = createRemoteReactComponent(BaseText);

export type TextFieldProps = ReactPropsFromRemoteComponentType<typeof BaseTextField>;
export const TextField = createRemoteReactComponent(BaseTextField);

export type ThumbnailProps = ReactPropsFromRemoteComponentType<typeof BaseThumbnail>;
export const Thumbnail = createRemoteReactComponent(BaseThumbnail);

export const Toast = createRemoteReactComponent(BaseToast);
export type ToastProps = ReactPropsFromRemoteComponentType<typeof BaseToast>;
