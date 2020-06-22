import {RenderExtension} from './render-extension';
import type {
  StandardApi,
  PostPurchaseInquiryApi,
  PostPurchaseInquiryResult,
  PostPurchaseRenderApi,
} from './api';

type Components = typeof import('../components');

type AllComponents = Components[keyof Components];

export interface ExtensionPoints {
  'Checkout::KitchenSink': RenderExtension<
    StandardApi<'Checkout::KitchenSink'>,
    AllComponents
  >;
  'Checkout::PostPurchase::Render': RenderExtension<
    PostPurchaseRenderApi,
    AllComponents
  >;
  'Checkout::PostPurchase::Inquiry': (
    api: PostPurchaseInquiryApi,
  ) => PostPurchaseInquiryResult;
}

export type ExtensionPoint = keyof ExtensionPoints;
