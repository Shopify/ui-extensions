import {
  ResourceList,
  ResourceItem,
  OptionList,
  List,
  ListItem,
} from '../components';

export type ListComponents =
  | typeof List
  | typeof ListItem
  | typeof ResourceList
  | typeof ResourceItem
  | typeof OptionList;
