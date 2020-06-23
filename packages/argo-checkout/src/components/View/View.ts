import {createRemoteComponent} from '@remote-ui/core';

export interface ViewProps {}

/**
 * A View is a generic container component. Its contents will always be their
 * “natural” size, so this component can be useful in layout components (like `Tiles`,
 * `BlockStack`, `InlineStack`) that would otherwise stretch their children to fit.
 */
export const View = createRemoteComponent<'View', ViewProps>('View');
