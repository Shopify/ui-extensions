import {createRemoteComponent} from '@remote-ui/core';
import type {RemoteFragment} from '@remote-ui/core';

export interface PageProps {
  /**
   * The text to be used as title, in large type
   */
  title: string;

  /**
   * The content of the page.
   * We will adopt what is decided as type in this discussion:
   * https://github.com/Shopify/ui-api-design/issues/139
   */
  children: RemoteFragment;

  /**
   * Flag that indicates if the page skeleton should be displayed. Optional.
   * Defaults to false. When true, a Skeleton component will be rendered as header.
   */
  loading?: boolean;

  /**
   * The text to be used as subtitle, in regular type. Optional
   */
  subtitle?: string;

  /**
   * The action to be used as the back button. Optional. Expected to be a Button.
   * When provided, only `to`, `onPress` and `accessibilityLabel` will be used. The rest will be ignored by the Customer Account.
   */
  backAction?: RemoteFragment;

  /**
   * The list of actions. Optional. Expected to be a fragment with a list of Buttons.
   * Customer Account implementation details:
   * When provided, the first 2 actions will always be displayed.
   * When there are 3 or more, the first one is displayed and the rest will be displayed in a dropdown.
   */
  actions?: RemoteFragment;
}

export const Page = createRemoteComponent<'Page', PageProps>('Page');
