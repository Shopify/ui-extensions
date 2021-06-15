import {createRemoteComponent} from '@remote-ui/core';

import {DestructableAction, DisableableAction} from '../types';

export interface CardProps {
  /** Title content for the card */
  title?: string;

  /** Automatically wrap each child component in a `Card.Section` */
  sectioned?: boolean;

  /** Primary action for the card footer */
  primaryFooterAction?: DestructableAction;

  /** Secondary actions for the card footer */
  secondaryFooterActions?: DestructableAction[];

  /** Card header action */
  actions?: DisableableAction[];
}

/**
 * Cards are used to group similar concepts and tasks together to make Shopify easier for merchants to scan, read, and get things done.
 *
 * The action API should be used to create actionable components for the card.
 * Cards should be contained, independent, and individual.
 */
export const Card = createRemoteComponent<'Card', CardProps>('Card');
