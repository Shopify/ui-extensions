import {createRemoteComponent} from '@remote-ui/core';

type Spacing = 'extraTight' | 'tight' | 'base' | 'loose' | 'extraLoose';

export interface ViewProps {
  /** Adjust the inline padding */
  inlinePadding?: Spacing;
  /** Adjust the block padding */
  blockPadding?: Spacing;
}

/**
 * A View is a generic container component. Its contents will always be their
 * “natural” size, so this component can be useful in layout components (like `Layout`, `Tiles`,
 * `BlockStack`, `InlineStack`) that would otherwise stretch their children to fit.
 */
export const View = createRemoteComponent<'View', ViewProps>('View');
