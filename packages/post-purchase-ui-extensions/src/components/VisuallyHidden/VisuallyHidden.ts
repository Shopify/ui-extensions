import {createRemoteComponent} from '@remote-ui/core';

export interface VisuallyHiddenProps {}

/**
 * Use when an element needs to be available to assistive technology (for example,
 * a screen reader) but otherwise hidden.
 */
export const VisuallyHidden = createRemoteComponent<
  'VisuallyHidden',
  VisuallyHiddenProps
>('VisuallyHidden');
