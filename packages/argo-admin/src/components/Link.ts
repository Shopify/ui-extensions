import {createRemoteComponent} from '../utilities';

export type LinkProps = {
  onClick?: () => void;
  external?: boolean;
  url?: string;
};

export const Link = createRemoteComponent<'Link', LinkProps>('Link');
