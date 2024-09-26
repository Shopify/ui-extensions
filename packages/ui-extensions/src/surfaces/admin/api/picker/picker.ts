import {Tone} from '../../components/shared';

interface Picker {
  selected: Promise<string[]>;
}

interface Header {
  content?: string;
  type?: 'string' | 'number';
}

interface PickerOptions {
  heading: string;
  multiple?: boolean | number;
  items: Item[];
  headers?: Header[];
}

export type Progress = 'incomplete' | 'partiallyComplete' | 'complete';
type DataPoint = string | number | undefined;
interface Badge {
  content: string;
  tone?: Tone;
  progress?: Progress;
}

interface Item {
  id: string;
  heading: string;
  data?: DataPoint[];
  disabled?: boolean;
  selected?: boolean;
  badges?: Badge[];
  thumbnail?: {url: string};
}

export type PickerApi = (options: PickerOptions) => Promise<Picker>;
