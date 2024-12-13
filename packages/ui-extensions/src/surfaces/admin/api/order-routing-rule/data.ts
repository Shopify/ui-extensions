import type {Metafield} from '../custom-data/metafields';

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
