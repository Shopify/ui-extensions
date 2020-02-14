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

// export interface PreviewProps {
//   url: string;
//   aspectRatio?: number;
//   previewDevice?: 'desktop' | 'mobile';
//   onPreviewDeviceChange?(device: 'desktop' | 'mobile'): void | Promise<void>;
// }
// export const Preview = createRemoteComponent('Preview');

// export interface CardStackProps {}
// export const CardStack = createRemoteComponent('CardStack');

// export interface ChoiceListProps {
//   title: string;
//   choices: {value: string; label: string}[];
//   selected: string[];
//   onChange(selected: string[]): void;
// }
// export const ChoiceList = createRemoteComponent('ChoiceList');

// export interface FormProps {
//   onSubmit(): void | Promise<void>;
// }
// export const Form = createRemoteComponent('Form');

// export interface FormLayoutProps {}
// export const FormLayout = createRemoteComponent('FormLayout');

// export interface FormLayoutGroupProps {}
// export const FormLayoutGroup = createRemoteComponent('FormLayoutGroup');

// export interface ModalProps {
//   title?: string;
//   primaryAction?: {
//     content: string;
//     onAction(): void | Promise<void>;
//     loading?: boolean;
//     disabled?: boolean;
//   };
//   sectioned?: boolean;
//   open: boolean;
//   onClose(): void | Promise<void>;
// }
// export const Modal = createRemoteComponent('Modal');
// export const ContextualSaveBar = createRemoteComponent('ContextualSaveBar');
// export const Banner = createRemoteComponent('Banner');
// export const PageActions = createRemoteComponent('PageActions');
// export const Thumbnail = createRemoteComponent('Thumbnail');
// export const PlaceholderIcon = createRemoteComponent('PlaceholderIcon');

export interface RemoteComponentMap {
  [Layout.type]: [LayoutProps, typeof LayoutSection];
  [LayoutSection.type]: [LayoutSectionProps, string];
  [Card.type]: [CardProps, string];
  [CardSection.type]: [CardSectionProps, string];
  [TextField.type]: [TextFieldProps, never];
  [Toast.type]: [any, never];
  [Stack.type]: [any, any];
  // [CardStack]: [CardStackProps, typeof Card];
  // [ProductPicker]: [ProductPickerProps, never];
  // [DiscountPicker]: [DiscountPickerProps, never];
  // [Checkbox]: [CheckboxProps, never];
  // [Preview]: [PreviewProps, never];
  // [Canvas]: [CanvasProps, string];
  // [CanvasBlock]: [CanvasBlockProps, string];
  // [ResourceGrid]: [ResourceGridProps, typeof ResourceGridItem];
  // [ResourceGridItem]: [ResourceGridItemProps, never];
  // [ChoiceList]: [ChoiceListProps, never];
  // [Modal]: [ModalProps, string];
  // [Form]: [FormProps, string];
  // [FormLayout]: [FormLayoutProps, string];
  // [FormLayoutGroup]: [FormLayoutGroupProps, string];
  // [AddProductModal]: [AddProductModalProps, never];
  // [ContextualSaveBar]: [any, never];
  // [Banner]: [any, string];
  // [PageActions]: [any, never];
  // [Thumbnail]: [any, never];
  // [PlaceholderIcon]: [any, never];
}

interface ComponentMap extends RemoteComponentMap {}

declare module '@shopify/remote-ui-types' {
  interface RemoteComponentMap extends ComponentMap {}
}
