import {createRemoteComponent} from '@remote-ui/core';

/**
 * Props for the AdminBlock component, used by Admin Block extensions to
 * configure the title and collapsed summary of an app block rendered on
 * a resource page in the Shopify admin.
 *
 * @publicDocs
 */
export interface AdminBlockProps {
  /**
   * The title displayed at the top of the app block. If not provided,
   * then the extension's name is used instead. Use this to give the block a
   * contextual heading. Titles longer than 40 characters will be truncated.
   */
  title?: string;

  /**
   * A short summary displayed when the app block is collapsed. Use this to
   * give merchants a preview of the block's content without expanding it.
   * Summaries longer than 30 characters will be truncated.
   */
  collapsedSummary?: string;
}

/**
 * AdminBlock is a component used by Admin Block extensions to configure
 * a title and collapsed summary for an app block on a resource page.
 */
export const AdminBlock = createRemoteComponent<'AdminBlock', AdminBlockProps>(
  'AdminBlock',
);
