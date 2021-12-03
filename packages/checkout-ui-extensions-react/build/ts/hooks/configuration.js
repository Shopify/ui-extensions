"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConfiguration = void 0;
const api_1 = require("./api");
const subscription_1 = require("./subscription");
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
function useConfiguration() {
    const { configuration } = api_1.useExtensionApi();
    return subscription_1.useSubscription(configuration);
}
exports.useConfiguration = useConfiguration;
