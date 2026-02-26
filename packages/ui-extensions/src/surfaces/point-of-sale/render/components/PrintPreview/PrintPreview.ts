import {createRemoteComponent} from '@remote-ui/core';

/**
 * Configure the following properties on the PrintPreview component. This component must be a direct child of the Screen component.
 *
 * @publicDocs
 */
export interface PrintPreviewProps {
  /**
   * The source URL of the content to preview for printing. Must be either a relative path appended to your app's [`application_url`](/docs/apps/build/cli-for-apps/app-configuration) or a full URL to your app's backend that returns the document.
   */
  src: string;
}

export const PrintPreview = createRemoteComponent<
  'PrintPreview',
  PrintPreviewProps
>('PrintPreview');
