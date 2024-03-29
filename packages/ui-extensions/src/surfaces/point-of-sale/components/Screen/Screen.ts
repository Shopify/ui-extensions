import {createRemoteComponent} from '@remote-ui/core';

/** Represents the presentation of a screen in the navigation stack.
 * @property `sheet` displays the screen from the bottom on `navigate` when `true`.
 */
export interface ScreenPresentationProps {
  sheet?: boolean;
}

/** Represents the secondary action button of a screen in the navigation stack.
 * @property `text` displays the name of the secondary action in the action bar.
 * @property `onPress` triggered when the secondary action button is pressed.
 * @property `isEnabled` displays the secondary action button when set `true`.
 */
export interface SecondaryActionProps {
  text: string;
  onPress: () => void;
  isEnabled?: boolean;
}

/** Represents a screen in the navigation stack.
 * @property `name` used to identify this screen as a destination in the navigation stack.
 * @property `title` the title of the screen which will be displayed on the UI.
 * @property `isLoading` displays a loading indicator when `true`. Set this to `true` when performing an asynchronous task, and then to false when the data becomes available to the UI.
 * @property `secondaryAction` displays a secondary action button on the screen.
 * @property `onNavigate` triggered when the screen is navigated to.
 * @property `onNavigateBack` triggered when the user navigates back from this screen. Runs after screen is unmounted.
 * @property `overrideNavigateBack` is a callback that allows you to override the secondary navigation action. Runs when screen is mounted.
 * @property `onReceiveParams` a callback that gets triggered when the navigation event completes and the screen receives the parameters.
 */
export interface ScreenProps {
  name: string;
  title: string;
  isLoading?: boolean;
  presentation?: ScreenPresentationProps;
  secondaryAction?: SecondaryActionProps;
  onNavigate?: () => void;
  onNavigateBack?: () => void;
  overrideNavigateBack?: () => void;
  onReceiveParams?: (params: any) => void;
}

export const Screen = createRemoteComponent<'Screen', ScreenProps>('Screen');
