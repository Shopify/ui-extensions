import type {RenderExtension} from '../../extension';

import type {Components} from './shared';
import type {
  StandardApi,
  CustomerSegmentTemplateApi,
  ActionExtensionApi,
  BlockExtensionApi,
  PrintActionExtensionApi,
  ProductDetailsConfigurationApi,
  ProductVariantDetailsConfigurationApi,
  OrderRoutingRuleApi,
  ValidationSettingsApi,
} from './api';
import {AnyComponentBuilder} from '../../shared';

/**
 * The specialized set of components available for customer segment template extensions. This includes only the CustomerSegmentTemplate component used for defining segment query templates in the customer segmentation editor.
 */
type CustomerSegmentTemplateComponent = AnyComponentBuilder<
  Pick<
    Components,
    'CustomerSegmentTemplate' | 'InternalCustomerSegmentTemplate'
  >
>;

/**
 * The specialized set of components available for product configuration extensions. This includes layout and display components for building product and variant configuration interfaces.
 */
type ProductConfigurationComponents = AnyComponentBuilder<
  Pick<
    Components,
    | 'Box'
    | 'InlineStack'
    | 'BlockStack'
    | 'Divider'
    | 'HeadingGroup'
    | 'Heading'
    | 'Text'
    | 'Link'
    | 'Image'
    | 'Icon'
  >
>;

/**
 * The specialized set of components available for order routing rule extensions. This includes components for displaying and configuring fulfillment location lists in order routing settings.
 */
type OrderRoutingComponents = AnyComponentBuilder<
  Pick<Components, 'InternalLocationList'>
>;

/**
 * The set of UI components available for all admin UI extension targets. This includes all standard Polaris components except for specialized components used in specific contexts. Use this type to define which components can be rendered in your extension.
 */
type AllComponents = AnyComponentBuilder<
  Omit<
    Components,
    | 'CustomerSegmentTemplate'
    | 'InternalCustomerSegmentTemplate'
    | 'InternalLocationList'
  >
>;

/**
 * Maps extension target identifiers to their corresponding extension types. Each target represents a specific location or context in the Shopify admin where extensions can render or execute. Use these targets to define where your extension appears and what capabilities it has access to.
 */
export interface ExtensionTargets {
  /**
   * @private
   */
  Playground: RenderExtension<StandardApi<'Playground'>, AllComponents>;

  /**
   * A render target that provides [customer segment templates](/docs/apps/build/marketing-analytics/customer-segments/build-a-template-extension) in the [customer segment editor](https://help.shopify.com/manual/customers/customer-segmentation/create-customer-segments). Use this target to provide pre-built segment templates that merchants can use as starting points for creating targeted customer groups based on custom criteria.
   */
  'admin.customers.segmentation-templates.render': RenderExtension<
    CustomerSegmentTemplateApi<'admin.customers.segmentation-templates.render'>,
    CustomerSegmentTemplateComponent
  >;

  // Blocks
  /**
   * A block target that displays inline content within the product details page. Use this to show product-specific information, tools, or actions directly on the product page.
   */
  'admin.product-details.block.render': RenderExtension<
    BlockExtensionApi<'admin.product-details.block.render'>,
    AllComponents
  >;

  /**
   * A block target that displays inline content within the order details page. Use this to show order-specific information, fulfillment tools, or custom order actions.
   */
  'admin.order-details.block.render': RenderExtension<
    BlockExtensionApi<'admin.order-details.block.render'>,
    AllComponents
  >;

  /**
   * A block target that displays inline content within the customer details page. Use this to show customer-specific information, loyalty data, or custom customer actions.
   */
  'admin.customer-details.block.render': RenderExtension<
    BlockExtensionApi<'admin.customer-details.block.render'>,
    AllComponents
  >;

  /**
   * A block target that displays inline content within the collection details page. Use this to show collection analytics, bulk product operations, or collection-specific tools.
   */
  'admin.collection-details.block.render': RenderExtension<
    BlockExtensionApi<'admin.collection-details.block.render'>,
    AllComponents
  >;

  /**
   * A block target that displays inline content within the draft order details page. Use this to show custom pricing calculations, special order handling tools, or order-specific information.
   */
  'admin.draft-order-details.block.render': RenderExtension<
    BlockExtensionApi<'admin.draft-order-details.block.render'>,
    AllComponents
  >;

  /**
   * A block target that displays inline content within the abandoned checkout details page. Use this to show cart recovery tools, abandonment analysis, or customer re-engagement options.
   */
  'admin.abandoned-checkout-details.block.render': RenderExtension<
    BlockExtensionApi<'admin.abandoned-checkout-details.block.render'>,
    AllComponents
  >;

  /**
   * A block target that displays inline content within the catalog details page. Use this to show catalog-specific settings, market information, or synchronization tools.
   */
  'admin.catalog-details.block.render': RenderExtension<
    BlockExtensionApi<'admin.catalog-details.block.render'>,
    AllComponents
  >;

  /**
   * A block target that displays inline content within the company details page. Use this to show B2B customer information, credit limits, or company-specific data.
   */
  'admin.company-details.block.render': RenderExtension<
    BlockExtensionApi<'admin.company-details.block.render'>,
    AllComponents
  >;

  /**
   * A block target that displays inline content within the company location details page. Use this to show location-specific information, shipping preferences, or location management tools.
   */
  'admin.company-location-details.block.render': RenderExtension<
    BlockExtensionApi<'admin.company-location-details.block.render'>,
    AllComponents
  >;

  /**
   * A block target that displays inline content within the gift card details page. Use this to show gift card balance tracking, usage history, or custom gift card metadata.
   *
   */
  'admin.gift-card-details.block.render': RenderExtension<
    BlockExtensionApi<'admin.gift-card-details.block.render'>,
    AllComponents
  >;

  /**
   * A block target that displays inline content within the product variant details page. Use this to show variant-specific data, inventory tools, or variant configuration options.
   *
   */
  'admin.product-variant-details.block.render': RenderExtension<
    BlockExtensionApi<'admin.product-variant-details.block.render'>,
    AllComponents
  >;

  /**
   * A block target that provides custom reordering functionality on the product details page. Use this to help merchants rearrange product data.
   */
  'admin.product-details.reorder.render': RenderExtension<
    BlockExtensionApi<'admin.product-details.reorder.render'>,
    AllComponents
  >;

  // Actions
  /**
   * An action target that appears in the **More actions** menu on the product details page. Use this to create workflows for processing products, syncing data, or integrating with external systems.
   *
   */
  'admin.product-details.action.render': RenderExtension<
    ActionExtensionApi<'admin.product-details.action.render'>,
    AllComponents
  >;

  /**
   * An action target that appears in the **More actions** menu on the catalog details page. Use this to create workflows for catalog management, market synchronization, or data exports.
   *
   */
  'admin.catalog-details.action.render': RenderExtension<
    ActionExtensionApi<'admin.catalog-details.action.render'>,
    AllComponents
  >;

  /**
   * An action target that appears in the **More actions** menu on the company details page. Use this to create workflows for B2B customer management, credit operations, or company data synchronization.
   *
   */
  'admin.company-details.action.render': RenderExtension<
    ActionExtensionApi<'admin.company-details.action.render'>,
    AllComponents
  >;

  /**
   * An action target that appears in the **More actions** menu on the gift card details page. Use this to create workflows for gift card processing, balance adjustments, or custom gift card operations.
   *
   */
  'admin.gift-card-details.action.render': RenderExtension<
    ActionExtensionApi<'admin.gift-card-details.action.render'>,
    AllComponents
  >;

  /**
   * An action target that appears in the **More actions** menu on the order details page. Use this to create workflows for order processing, fulfillment operations, or external system integrations.
   *
   */
  'admin.order-details.action.render': RenderExtension<
    ActionExtensionApi<'admin.order-details.action.render'>,
    AllComponents
  >;

  /**
   * An action target that appears in the **More actions** menu on the customer details page. Use this to create workflows for customer data management, loyalty operations, or CRM integrations.
   *
   */
  'admin.customer-details.action.render': RenderExtension<
    ActionExtensionApi<'admin.customer-details.action.render'>,
    AllComponents
  >;

  /**
   * An action target that appears from the **Use segment** button on the customer segment details page. Use this to create workflows for marketing campaigns, email operations, or segment-based actions.
   *
   */
  'admin.customer-segment-details.action.render': RenderExtension<
    ActionExtensionApi<'admin.customer-segment-details.action.render'>,
    AllComponents
  >;

  /**
   * An action target that appears in the **More actions** menu on the product index page. Use this to create workflows for product management, catalog operations, or inventory synchronization.
   *
   */
  'admin.product-index.action.render': RenderExtension<
    ActionExtensionApi<'admin.product-index.action.render'>,
    AllComponents
  >;

  /**
   * An action target that appears in the **More actions** menu on the order index page. Use this to create workflows for order management, reporting, or fulfillment operations.
   *
   */
  'admin.order-index.action.render': RenderExtension<
    ActionExtensionApi<'admin.order-index.action.render'>,
    AllComponents
  >;

  /**
   * An action target that appears in the **More actions** menu on the customer index page. Use this to create workflows for customer management, marketing operations, or bulk data processing.
   *
   */
  'admin.customer-index.action.render': RenderExtension<
    ActionExtensionApi<'admin.customer-index.action.render'>,
    AllComponents
  >;

  /**
   * An action target that appears in the **More actions** menu on the discount index page. Use this to create workflows for discount management, promotional operations, or bulk discount updates.
   *
   */
  'admin.discount-index.action.render': RenderExtension<
    ActionExtensionApi<'admin.discount-index.action.render'>,
    AllComponents
  >;

  /**
   * An action target that appears in the **More actions** menu on the collection details page. Use this to create workflows for collection management, product operations, or merchandising tools.
   *
   */
  'admin.collection-details.action.render': RenderExtension<
    ActionExtensionApi<'admin.collection-details.action.render'>,
    AllComponents
  >;

  /**
   * An action target that appears in the **More actions** menu on the collection index page. Use this to create workflows for collection management, bulk operations, or catalog organization.
   *
   */
  'admin.collection-index.action.render': RenderExtension<
    ActionExtensionApi<'admin.collection-index.action.render'>,
    AllComponents
  >;

  /**
   * An action target that appears in the **More actions** menu on the abandoned checkout details page. Use this to create workflows for cart recovery, customer engagement, or checkout analysis.
   *
   */
  'admin.abandoned-checkout-details.action.render': RenderExtension<
    ActionExtensionApi<'admin.abandoned-checkout-details.action.render'>,
    AllComponents
  >;

  /**
   * An action target that appears in the **More actions** menu on the product variant details page. Use this to create workflows for variant management, inventory operations, or data synchronization.
   *
   */
  'admin.product-variant-details.action.render': RenderExtension<
    ActionExtensionApi<'admin.product-variant-details.action.render'>,
    AllComponents
  >;

  /**
   * An action target that appears in the **More actions** menu on the draft order details page. Use this to create workflows for draft order processing, custom pricing, or order preparation tools.
   *
   */
  'admin.draft-order-details.action.render': RenderExtension<
    ActionExtensionApi<'admin.draft-order-details.action.render'>,
    AllComponents
  >;

  /**
   * An action target that appears in the **More actions** menu on the draft order index page. Use this to create workflows for draft order management, bulk operations, or order conversion tools.
   *
   */
  'admin.draft-order-index.action.render': RenderExtension<
    ActionExtensionApi<'admin.draft-order-index.action.render'>,
    AllComponents
  >;

  /**
   * An action target that appears in the **More actions** menu on the discount details page. Use this to create workflows for discount management, promotion analysis, or discount synchronization.
   *
   */
  'admin.discount-details.action.render': RenderExtension<
    ActionExtensionApi<'admin.discount-details.action.render'>,
    AllComponents
  >;

  /**
   * An action target that appears in the actions menu inside the order fulfilled card, visible only on orders fulfilled by your app. Use this to create workflows for fulfillment operations, tracking updates, or post-fulfillment actions.
   */
  'admin.order-fulfilled-card.action.render': RenderExtension<
    ActionExtensionApi<'admin.order-fulfilled-card.action.render'>,
    AllComponents
  >;

  // Bulk Actions

  /**
   * A selection action target that appears in the **More actions** menu on the product index page when multiple products are selected. Use this to create workflows for bulk product operations, batch updates, or mass data processing.
   *
   */
  'admin.product-index.selection-action.render': RenderExtension<
    ActionExtensionApi<'admin.product-index.selection-action.render'>,
    AllComponents
  >;

  /**
   * A selection action target that appears in the **More actions** menu on the order index page when multiple orders are selected. Use this to create workflows for bulk order operations, batch fulfillment, or mass order processing.
   *
   */
  'admin.order-index.selection-action.render': RenderExtension<
    ActionExtensionApi<'admin.order-index.selection-action.render'>,
    AllComponents
  >;

  /**
   * A selection action target that appears in the **More actions** menu on the customer index page when multiple customers are selected. Use this to create workflows for bulk customer operations, mass email campaigns, or batch data updates.
   *
   */
  'admin.customer-index.selection-action.render': RenderExtension<
    ActionExtensionApi<'admin.customer-index.selection-action.render'>,
    AllComponents
  >;

  /**
   * A selection action target that appears in the **More actions** menu on the draft order index page when multiple draft orders are selected. Use this to create workflows for bulk draft order operations, batch conversions, or mass order processing.
   *
   */
  'admin.draft-order-index.selection-action.render': RenderExtension<
    ActionExtensionApi<'admin.draft-order-index.selection-action.render'>,
    AllComponents
  >;

  // Print actions and bulk print actions

  /**
   * A print action target that appears in the **Print** menu on the order details page. Use this to generate custom documents such as packing slips, shipping labels, or invoices.
   *
   */
  'admin.order-details.print-action.render': RenderExtension<
    PrintActionExtensionApi<'admin.order-details.print-action.render'>,
    AllComponents
  >;

  /**
   * A print action target that appears in the **Print** menu on the product details page. Use this to generate custom documents such as product labels, barcode sheets, or specification sheets.
   *
   */
  'admin.product-details.print-action.render': RenderExtension<
    PrintActionExtensionApi<'admin.product-details.print-action.render'>,
    AllComponents
  >;

  /**
   * A print action target that appears in the **Print** menu on the order index page when multiple orders are selected. Use this to generate batch documents such as combined packing slips, shipping manifests, or bulk invoices.
   */
  'admin.order-index.selection-print-action.render': RenderExtension<
    PrintActionExtensionApi<'admin.order-index.selection-print-action.render'>,
    AllComponents
  >;

  /**
   * A print action target that appears in the **Print** menu on the product index page when multiple products are selected. Use this to generate batch documents such as combined product labels, barcode sheets, or catalog pages.
   */
  'admin.product-index.selection-print-action.render': RenderExtension<
    PrintActionExtensionApi<'admin.product-index.selection-print-action.render'>,
    AllComponents
  >;

  // Other

  /**
   * A configuration target that renders product configuration settings for [product bundles](/docs/apps/build/product-merchandising/bundles/product-configuration-extension/add-merchant-config-ui) and customizable products on the product details page. Use this to define bundle component selections, customization options, or product configuration rules.
   */
  'admin.product-details.configuration.render': RenderExtension<
    ProductDetailsConfigurationApi<'admin.product-details.configuration.render'>,
    ProductConfigurationComponents
  >;

  /**
   * A configuration target that renders product variant configuration settings for [product bundles](/docs/apps/build/product-merchandising/bundles/product-configuration-extension/add-merchant-config-ui) and customizable products on the product variant details page. Use this to define variant-specific bundle components, customization options, or configuration rules.
   */
  'admin.product-variant-details.configuration.render': RenderExtension<
    ProductVariantDetailsConfigurationApi<'admin.product-variant-details.configuration.render'>,
    ProductConfigurationComponents
  >;

  /**
   * A function settings target that renders within order routing settings, allowing merchants to configure order routing rule functions.
   * @private
   */
  'admin.settings.internal-order-routing-rule.render': RenderExtension<
    OrderRoutingRuleApi<'admin.settings.internal-order-routing-rule.render'>,
    AllComponents | OrderRoutingComponents
  >;
  /**
   * A function settings target that renders within order routing settings, allowing merchants to configure order routing rule functions. Use this to build custom configuration interfaces for order routing function parameters.
   */
  'admin.settings.order-routing-rule.render': RenderExtension<
    OrderRoutingRuleApi<'admin.settings.order-routing-rule.render'>,
    AllComponents
  >;

  /**
   * A function settings target that renders within a validation's add and edit views, allowing merchants to configure validation function settings. Use this to build custom configuration interfaces for validation function parameters and rules.
   */
  'admin.settings.validation.render': RenderExtension<
    ValidationSettingsApi<'admin.settings.validation.render'>,
    AllComponents
  >;
}

/**
 * A string literal union of all valid extension target identifiers. Use this type to specify where your admin UI extension should render, such as `admin.product-details.block.render` for a block on product details pages or `admin.order-details.action.render` for an action on order details pages. The target determines the extension's location, available APIs, and UI components.
 */
export type ExtensionTarget = keyof ExtensionTargets;

/**
 * Maps an extension target identifier to its corresponding extension type (either RenderExtension or RunnableExtension). Use this to get the full extension type definition for a specific target.
 */
export type ExtensionForExtensionTarget<T extends ExtensionTarget> =
  ExtensionTargets[T];

/**
 * Extracts the return type from an extension target's callback function. Use this utility type when you need to know what type of value an extension should return, such as `void` for render extensions or specific output types for runnable extensions.
 */
export type ReturnTypeForExtension<ID extends keyof ExtensionTargets> =
  ReturnType<ExtensionTargets[ID]>;

/**
 * Extracts the parameter types from an extension target's callback function. Use this utility type to get the tuple of arguments (connection/root and API) that are passed to your extension function.
 */
export type ArgumentsForExtension<ID extends keyof ExtensionTargets> =
  Parameters<ExtensionTargets[ID]>;

/**
 * A filtered union of extension target identifiers that only includes render extension targets (those that display UI). Use this to constrain types to only rendering targets, excluding runnable extensions that return data without UI.
 */
export type RenderExtensionTarget = {
  [ID in keyof ExtensionTargets]: ExtensionTargets[ID] extends RenderExtension<
    any,
    any
  >
    ? ID
    : never;
}[keyof ExtensionTargets];

/**
 * A mapping that associates each render extension target identifier with its corresponding extension type. Use this to work specifically with render extensions while filtering out runnable extensions.
 */
export type RenderExtensions = {
  [ID in RenderExtensionTarget]: ExtensionTargets[ID];
};

/**
 * A utility type that extracts the API type from a `RenderExtension`. Use this to get the API interface that a render extension receives at runtime.
 */
type ExtractedApiFromRenderExtension<T> = T extends RenderExtension<
  infer Api,
  any
>
  ? Api
  : never;

/**
 * A utility type that extracts the allowed component set from a `RenderExtension`. Use this to get the components type that a render extension can use in its UI.
 */
type ExtractedAllowedComponentsFromRenderExtension<T> =
  T extends RenderExtension<any, infer Components> ? Components : never;

/**
 * Extracts the API type for a specific render extension target. Use this to get the API interface (like `ActionExtensionApi`, `BlockExtensionApi`, etc.) that your extension receives, including methods like `query`, `i18n`, and target-specific properties. This helps you write type-safe code that accesses the correct API methods for your extension target.
 */
export type ApiForRenderExtension<ID extends keyof RenderExtensions> =
  ExtractedApiFromRenderExtension<RenderExtensions[ID]>;

/**
 * Extracts the component set for a specific render extension target. Use this to get the union of UI components (like Text, Button, AdminBlock, etc.) available for your extension target. This helps you write type-safe code that only uses components supported by your target.
 */
export type AllowedComponentsForRenderExtension<
  ID extends keyof RenderExtensions,
> = ExtractedAllowedComponentsFromRenderExtension<RenderExtensions[ID]>;
