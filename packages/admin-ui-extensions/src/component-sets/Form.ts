import {
  Checkbox,
  DateTimePicker,
  Radio,
  Select,
  TextField,
} from '../components';

export type FormComponents =
  | typeof Checkbox
  | typeof DateTimePicker
  | typeof Radio
  | typeof Select
  | typeof TextField;
