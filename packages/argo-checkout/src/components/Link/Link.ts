import {createRemoteComponent} from '@remote-ui/core';

export interface LinkProps {
  /**
   * Destination to navigate to. You **must** provide either this property, `onPress`,
   * or both.
   */
  to?: string;
  /** Open the link in a new window or tab */
  external?: boolean;
  /**
   * Unique identifier. Typically used as a target for another component’s controls
   * to associate an accessible label with an action.
   */
  id?: string;
  /**
   * Indicate the text language. Useful when the text is in a different language than the rest of the page.
   * It will allow assistive technologies such as screen readers to invoke the correct pronunciation.
   * Reference of values: https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry (see "subtag")
   */
  language?: string;
  /**
   * A label used for buyers using assistive technologies. When provided, any
   * 'children' supplied to this component are hidden from being seen for
   * accessibility purposes to prevent duplicate content from being read.
   */
  accessibilityLabel?: string;
  /**
   * Callback when pressed. If `to` is provided, it will execute the callback and
   * then navigate to the location specified by `to`.
   */
  onPress?(): void;
}

/**
 * Link makes text interactive so customers can perform an action, such as navigating to another location.
 */
export const Link = createRemoteComponent<'Link', LinkProps>('Link');
