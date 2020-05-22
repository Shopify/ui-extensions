import {createRemoteComponent} from '@remote-ui/core';

export type LinkProps = {
  children: React.ReactNode;
  onClick?: () => void;
  external?: boolean;
  url?: string;
};

export const Link = createRemoteComponent<'Link', LinkProps>('Link');
