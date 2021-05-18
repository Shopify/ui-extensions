import {createRemoteComponent} from '@remote-ui/core';

/**
 * Info:
 * Use to convey general information or actions that aren’t critical or tied to
 * a particular action.
 *
 * Success:
 * Use rarely, only if you need additional visual confirmation that a
 * non-standard action has been completed successfully, for example adding an
 * item to an order as an upsell.
 *
 * Warning:
 * Use to display information that needs attention or that customers need to
 * take action on. Seeing these banners can be stressful for customers so be
 * cautious about using them. Does not block progress to next step.
 *
 * Critical:
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
   * @defaultValue 'info'
   */
  status?: Status;
  /** Makes the content collapsible */
  collapsible?: boolean;
  /** Hides the status icon */
  iconHidden?: boolean;
}

/**
 * Use banners to communicate important messages to customers in a prominent way.
 */
export const Banner = createRemoteComponent<'Banner', BannerProps>('Banner');
