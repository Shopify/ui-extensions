import type { BaseBannerProps } from '@shopify/ui-extensions';
export interface BannerAction {
    /** Callback when the Banner action button is pressed. */
    onAction: () => void;
    /** Button label text. */
    content: string;
}
export interface BannerProps extends BaseBannerProps {
    /** Button to display at bottom of banner. */
    action?: BannerAction;
}
/**
 * Banners inform merchants about important changes or persistent conditions. Use this component if you need to communicate to merchants in a prominent way.
 *
 * [Learn more about best practices and guidelines on using Banners](https://polaris.shopify.com/components/feedback-indicators/banner#section-best-practices).
 */
export declare const Banner: import("@remote-ui/core").RemoteComponentType<"Banner", BannerProps, true>;
//# sourceMappingURL=Banner.d.ts.map