import {createRemoteComponent} from '@remote-ui/core';

import {DestructableAction, DisableableAction} from '../types';

/**
 * Cards are used to group similar concepts and tasks together to make Shopify easier for merchants to scan, read, and get things done.
 * @property title Title content for the card
 * @property sectioned Wraps content in a Card.Section if there aren't multiple sections
 * @property primaryFooterAction Primary action for the card footer
 * @property secondaryFooterActions Secondary actions for the card footer
 * @property children Inner content of the card
 * @property actions Card header action
 */
export interface CardProps {
  title?: string;
  sectioned?: boolean;
  primaryFooterAction?: DestructableAction;
  secondaryFooterActions?: DestructableAction[];
  children?: React.ReactNode;
  actions?: DisableableAction[];
}

export const Card = createRemoteComponent<'Card', CardProps>('Card');
