import {Tone} from '../../components/shared';

interface Picker {
  update: (options: PickerOptions) => Promise<void>;
  selectedItems: Item[];
}

interface PickerOptions {
  heading?: string;
  description?: string;
  multiple?: boolean | number;
  loading?: boolean;
  items: Item[];
  onSelect?(event: any): void;
  onCancel?(): void;
}

interface Item {
  thumbnail?: {url: string};
  heading?: string;
  subheading?: string;
  action?: {
    content: string;
    tone?: Tone;
  };
  tags?: {
    content: string;
  }[];
  data?: [string] | [string, string] | [string, string, string];
  items?: NestedItem[];
}

interface NestedItem
  extends Pick<Item, 'thumbnail' | 'heading' | 'data' | 'items'> {}

export type PickerApi = (options: PickerOptions) => Promise<Picker>;
