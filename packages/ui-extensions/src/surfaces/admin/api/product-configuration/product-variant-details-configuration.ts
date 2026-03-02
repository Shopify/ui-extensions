import type {StandardApi} from '../standard/standard';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

/**
 * A product variant with bundle configuration details. Contains variant information including pricing, inventory, SKU, and the component variants that make up the bundle. Use this to display variant details and manage bundle composition in your configuration interface.
 */
interface ProductVariant {
  /** The variant's unique global identifier (GID). */
  id: string;
  /** The stock keeping unit (SKU) identifier for inventory tracking. */
  sku: string;
  /** The barcode value for the variant (for example, UPC, ISBN, or other barcode standards). */
  barcode: string;
  /** The variant's full title including option values (for example, "Blue T-Shirt - Size M"). */
  title: string;
  /** The display name showing variant options (for example, "Blue / M"). */
  displayName: string;
  /** The variant's price as a decimal string (for example, `"19.99"`). */
  price: string;
  /** The compare-at (original) price as a decimal string, shown for sale pricing (for example, `"29.99"`). */
  compareAtPrice: string;
  /** Whether the variant is taxable. When `true`, taxes are calculated for this variant at checkout. */
  taxable: boolean;
  /** The tax code used for calculating taxes (for example, HS codes or other jurisdiction-specific codes). */
  taxCode: string;
  /** The variant's weight as a number. Use with weight units to calculate shipping costs. */
  weight: number;
  /** The selected option values that define this variant (for example, `[{name: "Color", value: "Blue"}, {name: "Size", value: "M"}]`). */
  selectedOptions: {
    /** The option name (for example, "Color", "Size"). */
    name: string;
    /** The selected value for this option (for example, "Blue", "Medium"). */
    value: string;
  }[];
  /** An array of component variants that make up this bundle variant. Each component represents a variant included in the bundle configuration. */
  productVariantComponents: ProductVariantComponent[];
}

/**
 * A component variant that is part of a bundle variant. Represents an individual variant included in a bundle configuration.
 * @publicDocs
 */
export interface ProductVariantComponent {
  /** The component variant's unique global identifier (GID). */
  id: string;
  /** The display name showing variant options (for example, "Blue / M"). */
  displayName: string;
  /** The variant's full title including product and option values. */
  title: string;
  /** The stock keeping unit (SKU) identifier for inventory tracking, or undefined if not set. */
  sku?: string;
  /** The image displayed for this component variant with ID, URL, and alt text properties. Use this for showing component previews in bundle configuration interfaces. */
  image?: {
    /** The unique identifier for the image. */
    id?: string | null;
    /** The URL to the image file. */
    url?: string | null;
    /** Alternative text describing the image for accessibility. */
    altText?: string | null;
  } | null;
  /** The admin URL for this component variant. Use this to create links to the variant's details page in the admin. */
  productVariantUrl: string;
  /** The selected option values that define this component variant (for example, `[{name: "Color", value: "Blue"}, {name: "Size", value: "M"}]`). */
  selectedOptions: {
    /** The option name (for example, "Color", "Size"). */
    name: string;
    /** The selected value for this option (for example, "Blue", "Medium"). */
    value: string;
  }[];
}

/**
 * The `ProductVariantDetailsConfigurationApi` object provides methods for configuring product variant bundles and relationships. Access the following properties on the `ProductVariantDetailsConfigurationApi` object to build variant configuration interfaces.
 * @publicDocs
 */
export interface ProductVariantDetailsConfigurationApi<
  ExtensionTarget extends AnyExtensionTarget,
> extends StandardApi<ExtensionTarget> {
  /** The configuration context data providing access to the current variant being configured and URLs for your app. Use this to populate your configuration UI with variant details and navigate between your app and the Shopify admin. */
  data: {
    /** The product variant currently being viewed in the Shopify admin. */
    variant: ProductVariant;
    /** URLs for launching and navigating to your app. */
    app: {
      /** The URL to launch your app for this variant configuration. */
      launchUrl: string;
      /** The base URL for your application. */
      applicationUrl: string;
    };
  };
}
