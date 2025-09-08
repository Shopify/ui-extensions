import type {MoneyV2} from './money-v2';

export enum DiscountApplicationAllocationMethod {
  ACROSS = 'ACROSS',
  EACH = 'EACH',
  ONE = 'ONE',
}

export enum DiscountApplicationTargetSelection {
  ALL = 'ALL',
  ENTITLED = 'ENTITLED',
  EXPLICIT = 'EXPLICIT',
}

export enum DiscountApplicationTargetType {
  LINE_ITEM = 'LINE_ITEM',
  SHIPPING_LINE = 'SHIPPING_LINE',
}

export type DiscountApplication =
  | AutomaticDiscountApplication
  | DiscountCodeApplication
  | ManualDiscountApplication
  | ScriptDiscountApplication;

export interface DiscountApplicationBase {
  allocationMethod: DiscountApplicationAllocationMethod;
  index: number;
  targetSelection: DiscountApplicationTargetSelection;
  targetType: DiscountApplicationTargetType;
  value: PricingValue;
}

export interface AutomaticDiscountApplication extends DiscountApplicationBase {
  type: 'automatic';
  title: string;
}

export interface DiscountCodeApplication extends DiscountApplicationBase {
  type: 'code';
  code: string;
}

export interface ManualDiscountApplication extends DiscountApplicationBase {
  type: 'manual';
  title: string;
  description?: string;
}

export interface ScriptDiscountApplication extends DiscountApplicationBase {
  type: 'script';
  title: string;
}

export type PricingValue = MoneyV2 | PricingPercentageValue;

export interface PricingPercentageValue {
  percentage: number;
}
