import {createRemoteComponent} from '@remote-ui/core';

/**
 * Props for the Section component, which groups related content under an
 * optional heading. Sections provide both visual and semantic structure,
 * making it easier for users (and assistive technologies) to navigate
 * through distinct areas of an extension.
 */
export interface SectionProps {
  /**
   * A label that describes the section for assistive technologies such as
   * screen readers. When no `heading` prop is provided, then you **must** provide
   * an `accessibilityLabel` so that assistive technologies can announce
   * meaningful context about the section to users.
   */
  accessibilityLabel?: string;

  /**
   * A visible title displayed at the top of the section that describes
   * its content. When provided, this heading also serves as the accessible
   * label for the section unless `accessibilityLabel` is explicitly set.
   */
  heading?: string;

  /**
   * The padding on all edges of the section.
   *
   * - `base`: Applies padding that's appropriate for the context.
   *   This might result in no padding if Shopify determines that's the
   *   right design decision for a particular placement.
   * - `none`: Removes all padding from the section. This is useful when
   *   child elements need to span to the section's edges (for example, a
   *   full-width image). Use Box or another layout component to restore
   *   padding for the remaining content.
   *
   * @defaultValue 'base'
   */
  padding?: 'base' | 'none';
}

/** A Section component that groups related content under an optional heading. */
export const Section = createRemoteComponent<'Section', SectionProps>(
  'Section',
);
