import {createRemoteComponent} from '@remote-ui/core';

export interface ScreenSearchBarProps {
  initialValue?: string;
  onTextChange?: (value: string) => void;
  onSearch: (value: string) => void;
  onFocus?: () => void;
  visible?: boolean;
  editable?: boolean;
  placeholder?: string;
  showBarcodeIcon?: boolean;
}

export interface ScreenProps {
  name: string;
  isLoading?: boolean;
  searchBar?: ScreenSearchBarProps;
  onReceiveParams?: (params: any) => void;
}

export const Screen = createRemoteComponent<'Screen', ScreenProps>('Screen');
