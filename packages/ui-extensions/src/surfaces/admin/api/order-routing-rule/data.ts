import type {Metafield} from '../shared';

interface OrderRoutingRule {
  label: string;
  description: string;
  id: string;
  priority?: number;
  metafields: Metafield[];
}

export interface Data {
  rule: OrderRoutingRule;
}
