import {createRemoteComponent} from '@remote-ui/core';

export interface LinkProps {
  /**
   * Callback when the link is pressed.
   */
  onPress?: () => void;

  /**
   * Open the link in a new tab on desktop, or in the device browser on mobile.
   */
  external?: boolean;

  /**
   * A relative path or absolute URL to link to.
   */
  url?: string;
}

/**
 * Links take users to another place, and usually appear within or directly following a sentence.
 */
export const Link = createRemoteComponent<'Link', LinkProps>('Link');

const hello: string = 0;
