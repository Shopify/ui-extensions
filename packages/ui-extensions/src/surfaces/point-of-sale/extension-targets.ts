import {BaseOutput} from './event/output';
import {
  CashTrackingSessionStartData,
  CashTrackingSessionCompleteData,
} from './event/data/CashTrackingSessionData';
import {TransactionCompleteData} from './event/data/TransactionCompleteData';
import {CartUpdateEventData} from './event/data/CartUpdateEventData';

import type {RenderExtension} from '../../extension';

import type {
  StandardApi,
  ActionApi,
  ActionTargetApi,
  CartApi,
  CartLineItemApi,
  CustomerApi,
  DraftOrderApi,
  ProductApi,
  OrderApi,
  StorageApi,
} from './api';
import type {ActionExtensionComponents} from './components/targets/ActionExtensionComponents';
import type {BlockExtensionComponents} from './components/targets/BlockExtensionComponents';
import type {SmartGridComponents} from './components/targets/SmartGridComponents';
import type {ReceiptComponents} from './components/targets/ReceiptComponents';
import type {BasicComponents} from './components/targets/BasicComponents';
import type {TransactionCompleteWithReprintData} from './event/data';

export interface EventExtensionTargets {
  'pos.transaction-complete.event.observe': (
    data: TransactionCompleteData,
  ) => Promise<BaseOutput>;
  'pos.cash-tracking-session-start.event.observe': (
    data: CashTrackingSessionStartData,
  ) => Promise<BaseOutput>;
  'pos.cash-tracking-session-complete.event.observe': (
    data: CashTrackingSessionCompleteData,
  ) => Promise<BaseOutput>;
  'pos.cart-update.event.observe': (
    data: CartUpdateEventData,
  ) => Promise<BaseOutput>;
}

export interface RenderExtensionTargets {
  'pos.home.tile.render': RenderExtension<
    StandardApi<'pos.home.tile.render'> & ActionApi & CartApi,
    SmartGridComponents
  >;
  'pos.home.modal.render': RenderExtension<
    ActionTargetApi<'pos.home.modal.render'> & CartApi,
    BasicComponents
  >;
  'pos.return.post.action.menu-item.render': RenderExtension<
    StandardApi<'pos.return.post.action.menu-item.render'> &
      ActionApi &
      OrderApi,
    ActionExtensionComponents
  >;
  'pos.return.post.action.render': RenderExtension<
    ActionTargetApi<'pos.return.post.action.render'> & OrderApi,
    BasicComponents
  >;
  'pos.return.post.block.render': RenderExtension<
    StandardApi<'pos.return.post.block.render'> & OrderApi & ActionApi,
    BlockExtensionComponents
  >;
  'pos.exchange.post.action.menu-item.render': RenderExtension<
    StandardApi<'pos.exchange.post.action.menu-item.render'> &
      ActionApi &
      OrderApi,
    ActionExtensionComponents
  >;
  'pos.exchange.post.action.render': RenderExtension<
    ActionTargetApi<'pos.exchange.post.action.render'> & OrderApi,
    BasicComponents
  >;
  'pos.exchange.post.block.render': RenderExtension<
    StandardApi<'pos.exchange.post.block.render'> & OrderApi & ActionApi,
    BlockExtensionComponents
  >;
  'pos.purchase.post.action.menu-item.render': RenderExtension<
    StandardApi<'pos.purchase.post.action.menu-item.render'> &
      ActionApi &
      OrderApi,
    ActionExtensionComponents
  >;
  'pos.purchase.post.action.render': RenderExtension<
    ActionTargetApi<'pos.purchase.post.action.render'> & OrderApi,
    BasicComponents
  >;
  'pos.purchase.post.block.render': RenderExtension<
    StandardApi<'pos.purchase.post.block.render'> & OrderApi & ActionApi,
    BlockExtensionComponents
  >;
  'pos.product-details.action.menu-item.render': RenderExtension<
    StandardApi<'pos.product-details.action.menu-item.render'> &
      ActionApi &
      CartApi &
      ProductApi,
    ActionExtensionComponents
  >;
  'pos.product-details.action.render': RenderExtension<
    ActionTargetApi<'pos.product-details.action.render'> & CartApi & ProductApi,
    BasicComponents
  >;
  'pos.product-details.block.render': RenderExtension<
    StandardApi<'pos.product-details.block.render'> &
      CartApi &
      ProductApi &
      ActionApi,
    BlockExtensionComponents
  >;
  'pos.order-details.action.menu-item.render': RenderExtension<
    StandardApi<'pos.order-details.action.menu-item.render'> &
      ActionApi &
      CartApi &
      OrderApi,
    ActionExtensionComponents
  >;
  'pos.order-details.action.render': RenderExtension<
    ActionTargetApi<'pos.order-details.action.render'> & CartApi & OrderApi,
    BasicComponents
  >;
  'pos.order-details.block.render': RenderExtension<
    StandardApi<'pos.order-details.block.render'> &
      CartApi &
      OrderApi &
      ActionApi,
    BlockExtensionComponents
  >;
  'pos.draft-order-details.action.menu-item.render': RenderExtension<
    StandardApi<'pos.draft-order-details.action.menu-item.render'> &
      ActionApi &
      CartApi &
      DraftOrderApi,
    ActionExtensionComponents
  >;
  'pos.draft-order-details.action.render': RenderExtension<
    ActionTargetApi<'pos.draft-order-details.action.render'> &
      DraftOrderApi &
      CartApi,
    BasicComponents
  >;
  'pos.draft-order-details.block.render': RenderExtension<
    StandardApi<'pos.draft-order-details.block.render'> &
      ActionApi &
      CartApi &
      DraftOrderApi,
    BlockExtensionComponents
  >;
  'pos.customer-details.action.menu-item.render': RenderExtension<
    StandardApi<'pos.customer-details.action.menu-item.render'> &
      ActionApi &
      CartApi &
      CustomerApi,
    ActionExtensionComponents
  >;
  'pos.customer-details.action.render': RenderExtension<
    ActionTargetApi<'pos.customer-details.action.render'> &
      CartApi &
      CustomerApi,
    BasicComponents
  >;
  'pos.customer-details.block.render': RenderExtension<
    StandardApi<'pos.customer-details.block.render'> &
      CartApi &
      CustomerApi &
      ActionApi,
    BlockExtensionComponents
  >;
  'pos.cart.line-item-details.action.menu-item.render': RenderExtension<
    StandardApi<'pos.cart.line-item-details.action.menu-item.render'> &
      ActionApi &
      CartApi &
      CartLineItemApi,
    ActionExtensionComponents
  >;
  'pos.cart.line-item-details.action.render': RenderExtension<
    ActionTargetApi<'pos.cart.line-item-details.action.render'> &
      ActionApi &
      CartApi &
      CartLineItemApi,
    BasicComponents
  >;
  'pos.receipt-footer.block.render': RenderExtension<
    {[key: string]: any} & StorageApi & TransactionCompleteWithReprintData,
    ReceiptComponents
  >;
  'pos.receipt-header.block.render': RenderExtension<
    {[key: string]: any} & StorageApi & TransactionCompleteWithReprintData,
    ReceiptComponents
  >;
}

export interface ExtensionTargets
  extends RenderExtensionTargets,
    EventExtensionTargets {}

export type RenderExtensionTarget = keyof RenderExtensionTargets;
export type EventExtensionTarget = keyof EventExtensionTargets;
export type ExtensionTarget = keyof ExtensionTargets;
