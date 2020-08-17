import {createRemoteComponent} from '@remote-ui/core';

export interface LinkProps {
  onClick?: () => void;
  external?: boolean;
  url?: string;
}

export const Link = createRemoteComponent<'Link', LinkProps>('Link');
