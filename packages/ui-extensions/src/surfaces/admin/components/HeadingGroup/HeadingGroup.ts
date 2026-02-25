import {createRemoteComponent} from '@remote-ui/core';

/**
 * Props for the HeadingGroup component. HeadingGroup doesn't accept any
 * props of its own. It serves as a structural wrapper that increases the
 * semantic heading level for any Heading components nested inside it.
 * Each level of HeadingGroup nesting increments the heading level by one
 * (for example, a Heading inside two HeadingGroup components renders as a level-3 heading).
 */
export interface HeadingGroupProps {}

/**
 * A structural wrapper that increments the semantic heading level for
 * any Heading components nested inside it.
 */
export const HeadingGroup = createRemoteComponent<
  'HeadingGroup',
  HeadingGroupProps
>('HeadingGroup');
