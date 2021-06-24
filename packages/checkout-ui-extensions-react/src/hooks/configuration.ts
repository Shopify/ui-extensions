import {
  RenderExtensionPoint,
  ApiForRenderExtension,
} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

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
export function useConfiguration<
  ConfigType extends ApiForRenderExtension<
    RenderExtensionPoint
  >['configuration']['current']
>(): ConfigType {
  const {configuration} = useExtensionApi();

  return useSubscription(configuration) as ConfigType;
}
