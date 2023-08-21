import {createRemoteComponent} from '@remote-ui/core';
import type {TestableComponentProps} from '../shared';

export interface SearchBarProps extends TestableComponentProps {
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
