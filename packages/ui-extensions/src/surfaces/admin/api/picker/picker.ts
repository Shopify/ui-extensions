import {Tone} from '../../components/shared';

interface Picker {
  selected: Promise<string[]>;
}

interface Header {
  title?: string;
  type?: 'string' | 'number';
}

interface PickerOptions {
  heading?: string;
  description?: string;
  multiple?: boolean | number;
  items: Item[];
  headers?: Header[];
  searchPlaceholder?: string;
}

export type Progress = 'incomplete' | 'partiallyComplete' | 'complete';
type DataPoint = string | number;
interface Badge {
  content: string;
  tone?: Tone;
  progress?: Progress;
}

interface Item {
  id: string;
  heading: string;
  data?: [] | [DataPoint] | [DataPoint, DataPoint];
  disabled?: boolean;
  badges?: [] | [Badge] | [Badge, Badge];
  thumbnail?: {url: string};
}

export type PickerApi = (options: PickerOptions) => Promise<Picker>;
