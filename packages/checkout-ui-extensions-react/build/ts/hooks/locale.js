"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocale = void 0;
const api_1 = require("./api");
const subscription_1 = require("./subscription");
/**
 * Returns the current locale of the checkout, and automatically re-renders
 * your component if the locale changes.
 */
function useLocale() {
    const { locale } = api_1.useExtensionApi();
    return subscription_1.useSubscription(locale);
}
exports.useLocale = useLocale;
