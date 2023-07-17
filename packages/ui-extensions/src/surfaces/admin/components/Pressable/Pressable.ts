import {createRemoteComponent} from '@remote-ui/core';
import type {AccessibilityRole, AnchorProps} from '../shared';

export type PressableProps = PressableBaseProps | PressableAnchorProps;

interface CommonProps {
  /**
   * A unique identifier for the Pressable.
   */
  id?: string;

  /**
   * Callback when a link is pressed. If `href` is set,
   * it will execute the callback and then navigate to the location specified by `href`.
   */
  onClick?(): void;

  /**
   * Alias for `onClick`
   * Callback when a Pressable is pressed. If `href` is set,
   * it will execute the callback and then navigate to the location specified by `href`.
   */
  onPress?(): void;
}

interface PressableBaseProps extends CommonProps {
  /**
   * Sets the semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help users
   * navigate the page.
   */
  accessibilityRole?: Extract<
    AccessibilityRole,
    'submit' | 'Pressable' | 'reset'
  >;
}

interface PressableAnchorProps extends CommonProps {
  /**
   * The URL to link to.
   * If set, it will navigate to the location specified by `href` after executing the `onClick` callback.
   */
  href: AnchorProps['href'];

  /**
   * Alias for `href`
   * If set, it will navigate to the location specified by `to` after executing the `onClick` callback.
   */
  to?: AnchorProps['href'];

  /**
   * Callback when a link is pressed. If `href` is set,
   * it will execute the callback and then navigate to the location specified by `href`.
   */
  onClick?: AnchorProps['onClick'];

  /**
   * Alias for `onClick`
   * Callback when a link is pressed. If `href` is set,
   * it will execute the callback and then navigate to the location specified by `href`.
   */
  onPress?: AnchorProps['onClick'];
}

export const Pressable = createRemoteComponent<'Pressable', PressableProps>(
  'Pressable',
);
