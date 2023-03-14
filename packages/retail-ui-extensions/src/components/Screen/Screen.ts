import {createRemoteComponent} from '@remote-ui/core';
import {Destination} from 'extension-api';

/** Represents a screen in the navigation stack.
 * @property `initialValue` an optional initial value in the search bar.
 * @property `placeholder` the placeholder text for the search bar. This does not count as a value, but rather is displayed when the value is empty.
 * @property `visible` dictates whether or not the search bar is visible.
 * @property `editable` dictates whether or not the search bar's value can be changed.
 * @property `showBarcodeIcon` dictates whether or not the barcode scanner icon is displayed.
 * @property `onTextChange` a callback which allows handling the change in text.
 * @property `onSearch` a callback that gets triggered when the search button is tapped.
 * @property `onFocus` a callback that gets triggered when the search bar comes into focus.
 */
export interface ScreenSearchBarProps {
  initialValue?: string;
  placeholder?: string;
  visible?: boolean;
  editable?: boolean;
  showBarcodeIcon?: boolean;
  onTextChange?: (value: string) => void;
  onSearch: (value: string) => void;
  onFocus?: () => void;
}

/** Represents a screen in the navigation stack.
 * @property `name` used to identify this screen as a destination in the navigation stack.
 * @property `title` the title of the screen which will be displayed on the UI.
 * @property `isLoading` displays a loading indicator when `true`. Set this to `true` when performing an asynchronous task, and then to false when the data becomes available to the UI.
 * @property `searchBar` provides the screen with a search bar at the top.
 * @property `onNavigate` triggered when the screen is navigated to.
 * @property `onNavigateBack` triggered when the user navigates back from this screen, or when the `Modal` containing this screen is closed.
 * @property `onReceiveParams` a callback that gets triggered when the navigation event completes and the screen receives the parameters.
 */
export interface ScreenProps extends Destination {
  name: string;
  title: string;
  isLoading?: boolean;
  searchBar?: ScreenSearchBarProps;
  onNavigate?: () => void;
  onNavigateBack?: () => void;
  onReceiveParams?: (params: any) => void;
}

export const Screen = createRemoteComponent<'Screen', ScreenProps>('Screen');
