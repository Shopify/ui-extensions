import type { ReactElement } from 'react';
import type { RenderExtensionPoint, InputForRenderExtension } from '@shopify/post-purchase-ui-extensions';
export declare function render<ExtensionPoint extends RenderExtensionPoint>(extensionPoint: ExtensionPoint, render: (input: InputForRenderExtension<ExtensionPoint>) => ReactElement<any>): void;
//# sourceMappingURL=render.d.ts.map