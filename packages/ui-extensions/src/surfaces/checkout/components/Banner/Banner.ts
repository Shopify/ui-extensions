import {createRemoteComponent} from '@remote-ui/core';

import type {IdProps, Status} from '../shared';

/** @publicDocs */
export interface BannerProps extends IdProps {
  /**
   * The title text displayed at the top of the banner to summarize the message or alert.
   */
  title?: string;
  /**
   * The semantic meaning and color treatment of the banner.
   *
   * @defaultValue 'info'
   */
  status?: Status;
  /**
   * Whether the banner content can be collapsed and expanded by the user.
   * A collapsible banner conceals child elements initially, allowing the user to expand the banner to reveal them.
   *
   * @defaultValue false
   */
  collapsible?: boolean;
  /**
   * A callback that fires when the banner is dismissed by the user.
   * This component is [controlled](https://reactjs.org/docs/forms.html#controlled-components),
   * so you must manage the visibility of the banner in state by using
   * the `onDismiss` callback.
   */
  onDismiss?(): void;
}

export const Banner = createRemoteComponent<'Banner', BannerProps>('Banner');
