import { RenderExtensionPoint, ApiForRenderExtension } from '@shopify/checkout-ui-extensions';
/**
 * A hook that can be used anywhere in a React extension.
 *
 * The extension caller can define the shape of their own config for
 * type safety:
 *
 * ```tsx
 * interface MyConfiguration {someNumber: number};
 *
 * function Configuration() {
 *   const config = useConfiguration<MyConfiguration>();
 *   return (
 *     <TextBlock>
 *       This is safe: {config.someNumber + 200}
 *     </TextBlock>
 *   );
 * }
 * ```
 */
export declare function useConfiguration<ConfigType extends ApiForRenderExtension<RenderExtensionPoint>['configuration']['current']>(): ConfigType;
//# sourceMappingURL=configuration.d.ts.map