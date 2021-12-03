import { PlaygroundExtensionPoint, PlaygroundExtensionApi, PlaygroundExtensionPointCallback } from './identifiers/playground';
import { ProductSubscriptionExtensionPoint, ProductSubscriptionExtensionApi, ProductSubscriptionExtensionPointCallback } from './identifiers/product_subscription';
import { DiscountsExtensionPoint, DiscountsExtensionApi, DiscountsExtensionPointCallback } from './identifiers/discounts';
export type { PlaygroundExtensionPoint, ProductSubscriptionExtensionPoint };
export { DiscountsExtensionPoint };
export type { ContainerAction, ExtensionResult, RenderableExtensionCallback, } from './types';
export declare type ExtensionPoint = PlaygroundExtensionPoint | ProductSubscriptionExtensionPoint | DiscountsExtensionPoint;
export declare type ExtensionApi = PlaygroundExtensionApi & ProductSubscriptionExtensionApi & DiscountsExtensionApi;
export declare type ExtensionPointCallback = PlaygroundExtensionPointCallback & ProductSubscriptionExtensionPointCallback & DiscountsExtensionPointCallback;
//# sourceMappingURL=index.d.ts.map