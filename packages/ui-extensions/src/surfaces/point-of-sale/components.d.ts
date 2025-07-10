/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />

export {
  Button,
  ButtonProps,
  ButtonType,
  ButtonJSXProps,
} from './components/Button';
export {Tile, TileProps, TileJSXProps} from './components/Tile';
export {
  Badge,
  BadgeProps,
  BadgeVariant,
  BadgeStatus,
  BadgeJSXProps,
} from './components/Badge';
export {
  Text,
  TextProps,
  TextVariant,
  ColorType,
  TextJSXProps,
} from './components/Text';
export {
  Stack,
  StackProps,
  SpacingType,
  StackDirection,
  AlignmentType,
  FlexWrapType,
  StackJSXProps,
} from './components/Stack';
export {
  Screen,
  ScreenProps,
  ScreenPresentationProps,
  SecondaryActionProps,
  ScreenJSXProps,
} from './components/Screen';
export {
  Navigator,
  NavigatorProps,
  NavigatorJSXProps,
} from './components/Navigator';
export {
  ScrollView,
  ScrollViewProps,
  ScrollViewJSXProps,
} from './components/ScrollView';
export {
  Dialog,
  DialogProps,
  DialogType,
  DialogJSXProps,
} from './components/Dialog';
export {
  POSBlock,
  POSBlockProps,
  POSBlockAction,
  POSBlockJSXProps,
} from './components/POSBlock';
export {
  POSBlockRow,
  POSBlockRowProps,
  POSBlockRowJSXProps,
} from './components/POSBlockRow';
export {
  TextField,
  TextFieldProps,
  TextFieldJSXProps,
} from './components/TextField';
export {Image, ImageProps, ImageJSXProps} from './components/Image';
export {
  Icon,
  IconProps,
  IconName,
  IconSize,
  IconJSXProps,
} from './components/Icon';
export {
  Banner,
  BannerProps,
  BannerVariant,
  BannerJSXProps,
} from './components/Banner';
export {
  SearchBar,
  SearchBarProps,
  SearchBarJSXProps,
} from './components/SearchBar';
export {
  Section,
  SectionProps,
  SectionHeaderAction,
  SectionJSXProps,
} from './components/Section';
export {
  Selectable,
  SelectableProps,
  SelectableJSXProps,
} from './components/Selectable';
export {Box, BoxProps, BoxJSXProps} from './components/Box';
export {
  CameraScanner,
  CameraScannerProps,
  CameraScannerJSXProps,
} from './components/CameraScanner';
export {
  DateField,
  DateFieldProps,
  DateFieldAction,
  DateFieldJSXProps,
} from './components/DateField';
export {
  DatePicker,
  DatePickerProps,
  DatePickerJSXProps,
  VisibleState as DatePickerVisibleState,
  InputMode as DatePickerInputMode,
} from './components/DatePicker';
export {
  EmailField,
  EmailFieldProps,
  EmailFieldAction,
  EmailFieldJSXProps,
} from './components/EmailField';
export {
  List,
  ListProps,
  ListRow,
  ListRowImage,
  ToggleSwitch,
  ImageDisplayStrategy,
  ListRowSubtitle,
  ListRowLeftSide,
  ListRowRightSide,
  ListJSXProps,
} from './components/List';
export {
  NumberField,
  NumberFieldProps,
  NumberFieldAction,
  NumberFieldJSXProps,
} from './components/NumberField';
export {
  PinPad,
  PinPadProps,
  PinPadAction,
  PinValidationResult,
  PinPadJSXProps,
} from './components/PinPad';
export {
  POSReceiptBlock,
  POSReceiptBlockProps,
  POSReceiptBlockJSXProps,
} from './components/POSReceiptBlock';
export {
  PrintPreview,
  PrintPreviewProps,
  PrintPreviewJSXProps,
} from './components/PrintPreview';
export {QRCode, QRCodeProps, QRCodeJSXProps} from './components/QRCode';
export {
  RadioButtonList,
  RadioButtonListProps,
  RadioButtonListJSXProps,
} from './components/RadioButtonList';
export {
  SectionHeader,
  SectionHeaderProps,
  SectionHeaderJSXProps,
} from './components/SectionHeader';
export {
  SegmentedControl,
  SegmentedControlProps,
  Segment,
  SegmentedControlJSXProps,
} from './components/SegmentedControl';
export {Stepper, StepperProps, StepperJSXProps} from './components/Stepper';
export {TextArea, TextAreaProps, TextAreaJSXProps} from './components/TextArea';
export {
  TimeField,
  TimeFieldProps,
  TimeFieldJSXProps,
} from './components/TimeField';
export {
  TimePicker,
  TimePickerProps,
  TimePickerJSXProps,
  VisibleState as TimePickerVisibleState,
  InputMode as TimePickerInputMode,
} from './components/TimePicker';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      's-button': ButtonJSXProps;
      's-tile': TileJSXProps;
      's-badge': BadgeJSXProps;
      's-text': TextJSXProps;
      's-stack': StackJSXProps;
      's-screen': ScreenJSXProps;
      's-navigator': NavigatorJSXProps;
      's-scroll-view': ScrollViewJSXProps;
      's-dialog': DialogJSXProps;
      's-text-field': TextFieldJSXProps;
      's-search-bar': SearchBarJSXProps;
      's-section': SectionJSXProps;
      's-banner': BannerJSXProps;
      's-icon': IconJSXProps;
      's-image': ImageJSXProps;
      's-selectable': SelectableJSXProps;
      's-pos-block': POSBlockJSXProps;
      's-pos-block-row': POSBlockRowJSXProps;
      's-box': BoxJSXProps;
      's-camera-scanner': CameraScannerJSXProps;
      's-date-field': DateFieldJSXProps;
      's-date-picker': DatePickerJSXProps;
      's-email-field': EmailFieldJSXProps;
      's-list': ListJSXProps;
      's-number-field': NumberFieldJSXProps;
      's-pin-pad': PinPadJSXProps;
      's-pos-receipt-block': POSReceiptBlockJSXProps;
      's-print-preview': PrintPreviewJSXProps;
      's-qr-code': QRCodeJSXProps;
      's-radio-button-list': RadioButtonListJSXProps;
      's-section-header': SectionHeaderJSXProps;
      's-segmented-control': SegmentedControlJSXProps;
      's-stepper': StepperJSXProps;
      's-text-area': TextAreaJSXProps;
      's-time-field': TimeFieldJSXProps;
      's-time-picker': TimePickerJSXProps;
    }
  }
}
