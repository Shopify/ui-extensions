"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useConfiguration = useConfiguration;

var _api = require("./api");

var _subscription = require("./subscription");

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
  const {
    configuration
  } = (0, _api.useExtensionApi)();
  return (0, _subscription.useSubscription)(configuration);
}