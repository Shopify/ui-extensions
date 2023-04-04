import {createRemoteComponent} from '@remote-ui/core';

export interface OrderRoutingRuleProps {
  title: string;
  description: string | string[];
}

export const OrderRoutingRule = createRemoteComponent<
  'OrderRoutingRule',
  OrderRoutingRuleProps
>('OrderRoutingRule');
