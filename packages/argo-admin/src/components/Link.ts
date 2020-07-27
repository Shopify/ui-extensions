import {createRemoteComponent} from '@remote-ui/core';

export type LinkProps = {
  onClick?: () => void;
  external?: boolean;
  url?: string;
};

export const Link = createRemoteComponent<'Link', LinkProps>('Link');
