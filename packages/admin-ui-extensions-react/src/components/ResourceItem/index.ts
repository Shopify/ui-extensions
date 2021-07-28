import type {PropsWithChildren} from 'react';
import type {ResourceItemProps as BaseResourceItemProps} from '@shopify/admin-ui-extensions';

export type ResourceItemProps = PropsWithChildren<BaseResourceItemProps>;
export {ResourceItem} from './ResourceItem';
