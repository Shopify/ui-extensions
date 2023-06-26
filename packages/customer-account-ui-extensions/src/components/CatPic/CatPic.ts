import {createRemoteComponent} from '@remote-ui/core';

export interface CatPicProps {
  source: string;
}

export const CatPic = createRemoteComponent<'CatPic', CatPicProps>('CatPic');
