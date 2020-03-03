import {createRemoteComponent} from '@shopify/remote-ui-core';

import {ThumbnailProps} from './Thumbnail';

export interface Action {
  text: string;
  destructive?: boolean;
  onPress: () => void;
}

export interface PageProps {
  thumbnail?: React.ReactElement<ThumbnailProps>;
  title: string;
  titleMetadata?: React.ReactNode;
  subTitle?: string;
  primaryAction?: Action;
  secondaryActions?: Action[];
  children?: React.ReactNode;
}

export const Page = createRemoteComponent<'Page', PageProps>('Page');
