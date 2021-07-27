import {createRemoteComponent} from '@remote-ui/core';
import {DestructableAction} from '../types';

type Alignment = 'leading' | 'trailing' | 'center';

interface AvatarProps {
  kind: 'Avatar';
  accessibilityLabel: string;
  name: string;
  initials: string;
  source: string;
}

interface ThumbnailProps {
  kind: 'Thumbnail';
  source: string;
  alt: string;
}

interface FilterControl {
  /** Search query value */
  queryValue?: string;

  /** Placeholder for search query field */
  queryPlaceholder: string;

  /** Callback when search query changes */
  onQueryChange?(queryValue: string): void;

  /** Callback when the search field is cleared */
  onQueryClear?(): void;
}

export interface Item {
  /** Visually hidden text for screen readers used for item link*/
  accessibilityLabel?: string;

  /** Id of the element the item onClick controls */
  ariaControls?: string;

  /** Tells screen reader the controlled element is expanded */
  ariaExpanded?: boolean;

  /** Indicators to display info in list item */
  badges?: {
    id: string;
    content: string;
    progress: 'incomplete' | 'partiallyComplete' | 'complete';
    status: 'success' | 'info' | 'attention' | 'critical' | 'warning' | 'new';
  }[];

  /** Wether the checkbox on a selectable item is disabled */
  disabled?: boolean;

  /** Allows url to open in a new tab */
  external?: boolean;

  /** Unique identifier for the item */
  id: string;

  /** Content for the media area at the left of the item */
  media?: AvatarProps | ThumbnailProps;

  /** Individual item name used by various text labels */
  name: string;

  /** Items nested beneath top level item. Single level of nesting supported. */
  options?: NestedItem[];

  /** Callback when clicked (required if url is omitted) */
  onPress?(id?: string): void;

  /** Makes the shortcut actions always visible */
  persistActions?: boolean;

  /** Display checkboxes next to items */
  /** @default true */
  selectable?: boolean;

  /** 1 or 2 shortcut actions; must be available on the page linked to by url */
  // eslint-disable-next-line line-comment-position
  shortcutActions?: any[]; // DisableableAction[];

  /** URL for the resource’s details page (required unless onClick is provided) */
  url?: string;

  /** Prefetched url attribute to bind to the main element being returned */
  dataHref?: string;
}

export type NestedItem = Omit<Item, 'nestedItem'>;

export interface SelectedItem {
  id: string;
  options?: {id: string}[];
}

export interface ResourcePickerProps {
  /** A set of handlers to pass into the Filter component */
  filterControl?: FilterControl;

  /** An array of list items to display in the ResourceList component */
  items: Item[];

  /** Overlays item list with a spinner while a background action is being performed */
  loading?: boolean;

  /** The maximum number of items that may be selected at once */
  maxSelectable?: number;

  /** Callback when ResourcePicker is closed */
  onClose: () => void;

  /** Callback when selection changes */
  onChange: (selected: any[]) => void;

  /** Primary action to display at bottom of ResourcePicker modal */
  primaryAction?: DestructableAction;

  /** An array of secondary actions to display to the right of the primary action */
  secondaryActions?: DestructableAction[];

  /** Currently selected items */
  selectedItems?: SelectedItem[];

  /** Heading to display at top of ResourcePicker */
  title?: string;

  /** Adjust vertical alignment of elements */
  /** @default 'center' */
  verticalAlignment?: Alignment;

  /** Whether the ResourcePicker modal is open */
  visible: boolean;
}

/**
 * `ResourcePicker` displays a ResourceList in a modal
 *
 * `ResourcePicker` provide a generic UI to display any type of data in an interactive list.
 */
export const ResourcePicker = createRemoteComponent<
  'ResourcePicker',
  ResourcePickerProps
>('ResourcePicker');
