import {createRemoteComponent} from '@remote-ui/core';

/**
 * Configure the following properties on the POSBlockRow component.
 *
 * @publicDocs
 */
export interface POSBlockRowProps {
  /**
   * A callback function executed when the user taps the row. Use this to handle row-specific interactions or navigation.
   */
  onPress?: () => void;
}

export const POSBlockRow = createRemoteComponent<
  'POSBlockRow',
  POSBlockRowProps
>('POSBlockRow');
