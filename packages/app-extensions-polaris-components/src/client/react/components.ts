// import {
//   createRemoteComponent,
// } from '@shopify/remote-ui-core';

import {
  ReactPropsFromRemoteComponentType,
  createRemoteReactComponent,
  ReactComponentTypeFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {
  Card as BaseCard,
  CardSection as BaseCardSection,
  // CardStack as BaseCardStack,
  Checkbox as BaseCheckbox,
  Layout as BaseLayout,
  LayoutSection as BaseLayoutSection,
  // Preview as BasePreview,
  TextField as BaseTextField,
  // ProductPicker as BaseProductPicker,
  // DiscountPicker as BaseDiscountPicker,
  // Canvas as BaseCanvas,
  // CanvasBlock as BaseCanvasBlock,
  // ResourceGrid as BaseResourceGrid,
  // ResourceGridItem as BaseResourceGridItem,
  // ChoiceList as BaseChoiceList,
  // AddProductModal as BaseAddProductModal,
  // Modal as BaseModal,
  // Form as BaseForm,
  // FormLayout as BaseFormLayout,
  // FormLayoutGroup as BaseFormLayoutGroup,
  // ContextualSaveBar as BaseContextualSaveBar,
  // Banner as BaseBanner,
  // PageActions as BasePageActions,
  Toast as BaseToast,
  Stack as BaseStack,
  // Thumbnail as BaseThumbnail,
  // PlaceholderIcon as BasePlaceholderIcon,
  RemoteComponentMap,
} from '../core';

export {RemoteComponentMap};

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

// export type CardStackProps = ReactPropsFromRemoteComponentType<
//   typeof BaseCardStack
// >;
// export const CardStack = createRemoteReactComponent(BaseCardStack);

// export type PreviewProps = ReactPropsFromRemoteComponentType<typeof BasePreview>;
// export const Preview = createRemoteReactComponent(BasePreview);

// export type ProductPickerProps = ReactPropsFromRemoteComponentType<
//   typeof BaseProductPicker
// >;
// export const ProductPicker = createRemoteReactComponent(BaseProductPicker);

// export type DiscountPickerProps = ReactPropsFromRemoteComponentType<
//   typeof BaseDiscountPicker
// >;
// export const DiscountPicker = createRemoteReactComponent(BaseDiscountPicker);

// export type CanvasProps = ReactPropsFromRemoteComponentType<typeof BaseCanvas>;
// export const Canvas = createRemoteReactComponent(BaseCanvas);

// export type CanvasBlockProps = ReactPropsFromRemoteComponentType<
//   typeof BaseCanvasBlock
// >;
// export const CanvasBlock = createRemoteReactComponent(BaseCanvasBlock);

// export type ResourceGridProps = ReactPropsFromRemoteComponentType<
//   typeof BaseResourceGrid
// >;
// export const ResourceGrid = createRemoteReactComponent(BaseResourceGrid);

// export type ResourceGridItemProps = ReactPropsFromRemoteComponentType<
//   typeof BaseResourceGridItem
// >;
// export const ResourceGridItem = createRemoteReactComponent(BaseResourceGridItem);

// export type ChoiceListProps = ReactPropsFromRemoteComponentType<
//   typeof BaseChoiceList
// >;
// export const ChoiceList = createRemoteReactComponent(BaseChoiceList);

// export type AddProductModalProps = ReactPropsFromRemoteComponentType<
//   typeof BaseAddProductModal
// >;
// export const AddProductModal = createRemoteReactComponent(BaseAddProductModal);

// export type ModalProps = ReactPropsFromRemoteComponentType<typeof BaseModal>;
// export const Modal = createRemoteReactComponent(BaseModal);

// export type FormProps = ReactPropsFromRemoteComponentType<typeof BaseForm>;
// export const Form = createRemoteReactComponent(BaseForm);

// export type FormLayoutProps = ReactPropsFromRemoteComponentType<
//   typeof BaseFormLayout
// >;
// export const FormLayout = createRemoteReactComponent(BaseFormLayout);

// export type FormLayoutGroupProps = ReactPropsFromRemoteComponentType<
//   typeof BaseFormLayoutGroup
// >;
// export const FormLayoutGroup = createRemoteReactComponent(BaseFormLayoutGroup);
// export const ContextualSaveBar = createRemoteReactComponent(BaseContextualSaveBar);
// export const Banner = createRemoteReactComponent(BaseBanner);
// export const PageActions = createRemoteReactComponent(BasePageActions);
// export const Thumbnail = createRemoteReactComponent(BaseThumbnail);
// export const PlaceholderIcon = createRemoteReactComponent(BasePlaceholderIcon);
