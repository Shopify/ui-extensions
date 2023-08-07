import {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

export interface BuyerIdentity {
  /**
   * Provides the company info that the business customer is purchasing on behalf of.
   * If the buyer is not a business customer, this value is `undefined`.
   */
  purchasingCompany: StatefulRemoteSubscribable<PurchasingCompany | undefined>;
}

export interface PurchasingCompany {
  /**
   * Include information of the company that the business customer is purchasing on behalf of.
   */
  company: Company;
}

export interface Company {
  /**
   * Company ID.
   */
  id: string;
}
