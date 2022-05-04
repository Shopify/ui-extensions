import {createRemoteComponent} from '@remote-ui/core';
import {AutoCapitalizationType} from '../shared';

export interface SearchBarProps {
  initialValue?: string;
  onUpdate?: (value: string) => void;
  onSearch: (value: string) => void;
  onFocus?: () => void;
  editable?: boolean;
  placeHolder?: string;
  autoCapitalize?: AutoCapitalizationType;
  autoCorrect?: boolean;
}

export const SearchBar = createRemoteComponent<'SearchBar', SearchBarProps>(
  'SearchBar',
);
