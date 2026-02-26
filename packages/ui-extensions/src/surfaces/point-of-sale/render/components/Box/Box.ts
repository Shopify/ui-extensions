import {createRemoteComponent} from '@remote-ui/core';
import {PaddingProps, SizingProps} from '../shared/box';

/**
 * Configure the following properties on the Box component.
 *
 * @publicDocs
 */
export interface BoxProps extends PaddingProps, SizingProps {}

export const Box = createRemoteComponent<'Box', BoxProps>('Box');
