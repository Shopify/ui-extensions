import type {BannerProps as BaseBannerProps} from '@shopify/ui-api-design';

export interface BannerProps
  extends Omit<
    BaseBannerProps,
    'children' | 'primaryAction' | 'secondaryActions' | 'tone'
  > {
  tone?: Extract<
    BaseBannerProps['tone'],
    'auto' | 'info' | 'success' | 'warning' | 'critical'
  >;
}

export interface BannerElement
  extends Omit<BannerProps, 'onAfterHide' | 'onDismiss'>,
    Omit<HTMLElement, 'id' | 'title' | 'hidden'> {
  onafterhide: BannerProps['onAfterHide'];
  ondismiss: BannerProps['onDismiss'];
}

declare global {
  interface HTMLElementTagNameMap {
    's-banner': BannerElement;
  }
}
