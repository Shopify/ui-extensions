import type {StandardApi} from '../standard/standard';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

interface Product {
  id: string;
  title: string;
  handle: string;
  status: 'ACTIVE' | 'ARCHIVED' | 'DRAFT';
  totalVariants: number;
  totalInventory: number;
  hasOnlyDefaultVariant: boolean;
  onlineStoreUrl?: string;
  options: {
    id: string;
    name: string;
    position: number;
    values: string[];
  }[];
  productType: string;
  productCategory?: string;
  productComponents: ProductComponent[];
}

export interface ProductComponent {
  id: string;
  title: string;
  featuredImage?: {
    id?: string | null;
    url?: string | null;
    altText?: string | null;
  } | null;
  totalVariants: number;
  productUrl: string;
  componentVariantsCount: number;
  nonComponentVariantsCount: number;
}

export interface ProductDetailsConfigurationApi<
  ExtensionTarget extends AnyExtensionTarget,
> extends StandardApi<ExtensionTarget> {
  data: {
    /* The product currently being viewed in the admin. */
    product: Product;
    app: {
      launchUrl: string;
      applicationUrl: string;
    };
  };
}
