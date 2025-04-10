import {createRemoteComponent} from '@remote-ui/core';

// An empty interface means any no-nullish value including values like strings.
// That seems incorrect, but the lint rule was added after this interface and
// I don't want to touch this public API.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface HeadingGroupProps {}

/**
 * Heading group controls the heading level of headings nested within it, like H1, H2, H3.
 *
 * Use a heading group whenever you use a heading to ensure the experience is the same
 * for screen reader users. When using a heading, any children related to that
 * heading should be nested within the same heading group.
 */
export const HeadingGroup = createRemoteComponent<
  'HeadingGroup',
  HeadingGroupProps
>('HeadingGroup');
