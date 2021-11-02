import {createRemoteComponent} from '@remote-ui/core';

export interface HeadingGroupProps {}

/**
 * Heading group controls the H level of headings when nested within it, like H1, H2, H3.
 *
 * Use a heading group whenever you use a heading to ensure the experience is the same
 * for screen reader users.
 */
export const HeadingGroup = createRemoteComponent<
  'HeadingGroup',
  HeadingGroupProps
>('HeadingGroup');
