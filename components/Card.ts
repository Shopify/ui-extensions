/**
 * Cards are used to group similar concepts and tasks together to make Shopify easier for merchants to scan, read, and get things done.
 * @property title Title content for the card
 * @property sectioned Wraps content in a Card.Section if there aren't multiple sections
 * @property primaryFooterAction Primary action for the card footer
 * @property secondaryFooterActions Secondary actions for the card footer
 * @property children Inner content of the card
 */
interface Card {
  title?: string;
  sectioned?: boolean;
  primaryFooterAction?: Action;
  secondaryFooterActions?: Action[];
  children?: React.ReactNode;
}
