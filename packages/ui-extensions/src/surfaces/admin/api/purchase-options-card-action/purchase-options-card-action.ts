import type {StandardApi} from '../standard/standard';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

export interface PurchaseOptionsCardConfigurationApi<
  ExtensionTarget extends AnyExtensionTarget,
> extends StandardApi<ExtensionTarget> {
  data: {
    selected: {id: string; sellingPlanId?: string}[];
  };
}
