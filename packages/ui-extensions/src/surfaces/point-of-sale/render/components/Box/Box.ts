import {createRemoteComponent} from '@remote-ui/core';
import {PaddingProps, SizingProps} from '../shared/box';

/** @publicDocs */
export interface BoxProps extends PaddingProps, SizingProps {}

export const Box = createRemoteComponent<'Box', BoxProps>('Box');
