import {createRemoteComponent} from '@remote-ui/core';

export type Marker = 'none' | 'bullet' | 'number';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ListProps {}

export const List = createRemoteComponent<'List', ListProps>('List');
