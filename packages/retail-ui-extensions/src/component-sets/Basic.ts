import {
  Banner,
  Button,
  DatePicker,
  Dialog,
  FormattedTextField,
  Image,
  Icon,
  ScrollView,
  Selectable,
  List,
  PinPad,
  RadioButtonList,
  SearchBar,
  SegmentedControl,
  Stack,
  Stepper,
  Badge,
  Text,
  Section,
  TextField,
  TimePicker,
  Screen,
  Navigator,
  CameraScanner,
} from '../components';

export type BasicComponents =
  | typeof Banner
  | typeof Button
  | typeof CameraScanner
  | typeof DatePicker
  | typeof ScrollView
  | typeof Icon
  | typeof Section
  | typeof Selectable
  | typeof Dialog
  | typeof FormattedTextField
  | typeof Image
  | typeof List
  | typeof PinPad
  | typeof RadioButtonList
  | typeof SearchBar
  | typeof SegmentedControl
  | typeof Stack
  | typeof Stepper
  | typeof Badge
  | typeof Text
  | typeof TextField
  | typeof TimePicker
  | typeof Screen
  | typeof Navigator;
