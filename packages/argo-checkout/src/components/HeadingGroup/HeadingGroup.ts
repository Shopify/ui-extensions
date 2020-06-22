import {createRemoteComponent} from '@remote-ui/core';

export interface HeadingGroupProps {}

/**
 * Heading groups provide the document structure that accessibility technology uses
 * to navigate the checkout. When you use a heading, any children related to that
 * heading should be nested in a heading group. This ensures that any nested headings
 * will use a semantically-appropriate heading level.
 */
export const HeadingGroup = createRemoteComponent<
  'HeadingGroup',
  HeadingGroupProps
>('HeadingGroup');
