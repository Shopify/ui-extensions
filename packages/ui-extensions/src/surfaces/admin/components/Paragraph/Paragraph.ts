import {createRemoteComponent} from '@remote-ui/core';
import type {BaseTypographyProps, GlobalProps} from '../shared';

/**
 * Props for the Paragraph component, which renders a block of text
 * as a distinct paragraph. Use Paragraph to structure your content
 * into readable sections with appropriate spacing.
 *
 * @publicDocs
 */
export interface ParagraphProps extends BaseTypographyProps, GlobalProps {
  /**
   * The content to render inside the paragraph. You can pass plain text
   * or other inline components such as Text or Link.
   */
  children?: any;
}

/** A Paragraph component that renders a block of text with appropriate spacing. */
export const Paragraph = createRemoteComponent<'Paragraph', ParagraphProps>(
  'Paragraph',
);
