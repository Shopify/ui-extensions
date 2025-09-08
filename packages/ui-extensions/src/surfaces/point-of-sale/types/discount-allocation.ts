import type {MoneyV2} from './money-v2';
import type {DiscountApplication} from './discount-application';

export interface DiscountAllocation {
  allocatedAmountSet: MoneyBag;
  discountApplication: DiscountApplication;
}

export interface MoneyBag {
  shopMoney: MoneyV2;
  presentmentMoney: MoneyV2;
}
