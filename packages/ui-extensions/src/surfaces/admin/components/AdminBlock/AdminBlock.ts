import {createRemoteComponent} from '@remote-ui/core';

export interface AdminBlockProps {
  /**
   * The title to display at the top of the app block. If not provided, the name of the extension will be used.
   */
  title?: string;

  /**
   * The summary to display when the app block is collapsed. If not provided, no summary will be displayed. No summary is shown when the app block is expanded.
   */
  summary?: string;
}

export const AdminBlock = createRemoteComponent<'AdminBlock', AdminBlockProps>(
  'AdminBlock',
);
