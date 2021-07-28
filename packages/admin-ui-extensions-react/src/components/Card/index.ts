import type {PropsWithChildren} from 'react';
import type {CardProps as BaseCardProps} from '@shopify/admin-ui-extensions';

export type CardProps = PropsWithChildren<BaseCardProps>;
export {Card} from './Card';
