import {createRemoteComponent} from '@remote-ui/core';

export interface PrintPreviewProps {
  /**
   * The source to print.
   */
  src: string;
}

export const PrintPreview = createRemoteComponent<
  'PrintPreview',
  PrintPreviewProps
>('PrintPreview');
