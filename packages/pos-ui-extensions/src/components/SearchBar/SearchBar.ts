import {createRemoteComponent} from '@remote-ui/core';

export interface SearchBarProps {
  initialValue?: string;
  onTextChange?: (value: string) => void;
  onSearch: (value: string) => void;
  onFocus?: () => void;
  editable?: boolean;
  placeholder?: string;
}

export const SearchBar = createRemoteComponent<'SearchBar', SearchBarProps>(
  'SearchBar',
);
