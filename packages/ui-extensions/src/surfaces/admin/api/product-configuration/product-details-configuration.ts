import type {StandardApi} from '../standard/standard';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

/**
 * A product with bundle configuration details. Contains product information including variants, inventory, options, and the component products that make up the bundle. Use this to display product details and manage bundle composition in your configuration interface.
 */
interface Product {
  /** The product's unique global identifier (GID). */
  id: string;
  /** The product's display name shown to merchants and customers. */
  title: string;
  /** The URL-friendly unique identifier used in product URLs (for example, `'blue-t-shirt'`). */
  handle: string;
  /** The publication status indicating whether the product is active (published), archived (discontinued), or draft (unpublished). */
  status: 'ACTIVE' | 'ARCHIVED' | 'DRAFT';
  /** The total number of variants this product has. */
  totalVariants: number;
  /** The total available inventory summed across all variants and locations. */
  totalInventory: number;
  /** Whether the product has only the default variant with no custom options. When `true`, the product has no size, color, or other option variations. */
  hasOnlyDefaultVariant: boolean;
  /** The URL to view this product on the online store. Use this to create "View in store" links. */
  onlineStoreUrl?: string;
  /** Product options that define how variants differ (for example, Size, Color, Material). Each option has an ID, name, position, and array of possible values. */
  options: {
    /** The unique identifier for this product option. */
    id: string;
    /** The display name for this option (for example, "Size", "Color", "Material"). */
    name: string;
    /** The display order position for this option. Lower numbers appear first. */
    position: number;
    /** An array of possible values for this option (for example, `["Small", "Medium", "Large"]`). */
    values: string[];
  }[];
  /** The product category or type used for organization (for example, "T-Shirt", "Shoes"). */
  productType: string;
  /** The standardized product category taxonomy. Use this for product classification in search and organization. */
  productCategory?: string;
  /** An array of component products that make up this bundle. Each component represents a product included in the bundle configuration. */
  productComponents: ProductComponent[];
}

/**
 * A component product that is part of a bundle. Represents an individual product included in a bundle configuration.
 * @publicDocs
 */
export interface ProductComponent {
  /** The component product's unique global identifier (GID). */
  id: string;
  /** The product's display name. Use this to show which product is included in the bundle. */
  title: string;
  /** The featured image displayed for this component product with ID, URL, and alt text properties. Use this for showing component previews in bundle configuration interfaces. */
  featuredImage?: {
    /** The unique identifier for the image. */
    id?: string | null;
    /** The URL to the image file. */
    url?: string | null;
    /** Alternative text describing the image for accessibility. */
    altText?: string | null;
  } | null;
  /** The total number of variants this component product has. Use this to determine if variant selection is needed for this component. */
  totalVariants: number;
  /** The admin URL for this component product. Use this to create links to the product's details page in the Shopify admin. */
  productUrl: string;
  /** The count of variants from this product that are used as bundle components. Use this to understand how many variants are configured in bundles. */
  componentVariantsCount: number;
  /** The count of variants from this product that aren't used in any bundles. Use this to identify available variants for adding to bundle configurations. */
  nonComponentVariantsCount: number;
}

/**
 * The `ProductDetailsConfigurationApi` object provides methods for configuring product bundles and relationships. Access the following properties on the `ProductDetailsConfigurationApi` object to build product configuration interfaces.
 * @publicDocs
 */
export interface ProductDetailsConfigurationApi<
  ExtensionTarget extends AnyExtensionTarget,
> extends StandardApi<ExtensionTarget> {
  /** The configuration context data providing access to the current product being configured and URLs for your app. Use this to populate your configuration UI with product details and navigate between your app and the admin. */
  data: {
    /** The product currently being viewed in the Shopify admin. */
    product: Product;
    /** URLs for launching and navigating to your app. */
    app: {
      /** The URL to launch your app for this product configuration. */
      launchUrl: string;
      /** The base URL for your application. */
      applicationUrl: string;
    };
  };
}
