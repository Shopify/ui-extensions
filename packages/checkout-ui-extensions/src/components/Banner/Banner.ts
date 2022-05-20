import {createRemoteComponent} from '@remote-ui/core';

/**
 * `info`:
 * Use to convey general information or actions that aren’t critical or tied to
 * a particular action.
 *
 * `success`:
 * Use rarely, only if you need additional visual confirmation that a
 * non-standard action has been completed successfully, for example adding an
 * item to an order as an upsell.
 *
 * `warning`:
 * Use to display information that needs attention or that customers need to
 * take action on. Seeing these banners can be stressful for customers so be
 * cautious about using them. Does not block progress to next step.
 *
 * `critical`:
 * Use to communicate problems that have to be resolved immediately for
 * customers to complete a task. For example, using a different payment method
 * if card details couldn't be processed. Seeing these banners can be stressful
 * for customers so be cautious about using them.
 */
type Status = 'info' | 'success' | 'warning' | 'critical';

export interface BannerProps {
  /**
   * Banners have an optional title. Use a title to grab the buyers attention
   * with a short, concise message.
   */
  title?: string;
  /**
   * Sets the status of the banner.
   *
   * @defaultValue 'info'
   */
  status?: Status;
  /**
   * Makes the content collapsible
   */
  collapsible?: boolean;
  /**
   * Callback when banner is dismissed. This component is
   * [controlled](https://reactjs.org/docs/forms.html#controlled-components),
   * so you **must** manage the visibility of the Banner in state by using
   * the onDismiss callback.
   */
  onDismiss?(): void;
}

/**
 * Use banners to communicate important messages to customers in a prominent way.
 */
export const Banner = createRemoteComponent<'Banner', BannerProps>('Banner');
