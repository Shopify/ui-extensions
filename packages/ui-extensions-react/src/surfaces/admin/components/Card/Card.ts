import {Card as BaseCard} from '@shopify/ui-extensions/admin';
import type {CardProps} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const Card = createRemoteReactComponent<'Card', CardProps>(BaseCard);
export type {CardProps} from '@shopify/ui-extensions/admin';
