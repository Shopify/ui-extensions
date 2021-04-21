import {createRemoteComponent} from '@remote-ui/core';

export interface VisuallyHiddenProps {}

export const VisuallyHidden = createRemoteComponent<
  'VisuallyHidden',
  VisuallyHiddenProps
>('VisuallyHidden');
