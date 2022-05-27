import {createRemoteComponent} from '@remote-ui/core';

export interface SearchBarProps {
  value?: string;
  onUpdate?: (value: string) => void;
  onSearch: (value: string) => void;
  onFocus?: () => void;
  editable?: boolean;
  placeHolder?: string;
  showBarcodeIcon?: boolean;
}

export const SearchBar = createRemoteComponent<'SearchBar', SearchBarProps>(
  'SearchBar',
);
