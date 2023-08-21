import {createRemoteComponent} from '@remote-ui/core';
import type {TestableComponentProps} from '../shared';

/** Represents the presentation of a screen in the navigation stack.
 * @property `sheet` displays the screen from the bottom on `navigate` when `true`.
 */
export interface ScreenPresentationProps {
  sheet?: boolean;
}

/** Represents a screen in the navigation stack.
 * @property `name` used to identify this screen as a destination in the navigation stack.
 * @property `title` the title of the screen which will be displayed on the UI.
 * @property `isLoading` displays a loading indicator when `true`. Set this to `true` when performing an asynchronous task, and then to false when the data becomes available to the UI.
 * @property `onNavigate` triggered when the screen is navigated to.
 * @property `onNavigateBack` triggered when the user navigates back from this screen.
 * @property `onReceiveParams` a callback that gets triggered when the navigation event completes and the screen receives the parameters.
 */
export interface ScreenProps extends TestableComponentProps {
  name: string;
  title: string;
  isLoading?: boolean;
  presentation?: ScreenPresentationProps;
  onNavigate?: () => void;
  onNavigateBack?: () => void;
  onReceiveParams?: (params: any) => void;
}

export const Screen = createRemoteComponent<'Screen', ScreenProps>('Screen');
