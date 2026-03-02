import type {StandardApi} from '../standard/standard';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';
import type {Data} from '../shared';
import type {ResourcePickerApi} from '../resource-picker/resource-picker';

/**
 * The `Navigation` object provides methods for navigating between extensions and admin pages.
 * @publicDocs
 */
export interface Navigation {
  /**
   * Navigates to a specific extension or admin route. Currently supports navigating from a block extension to an action extension on the same resource page.
   *
   * @param url - The destination URL, typically in the format 'extension://extension-handle' for other extensions
   * @example navigation.navigate('extension://my-admin-action-extension-handle')
   */
  navigate: (url: string | URL) => void;
}

/**
 * The `BlockExtensionApi` object provides methods for block extensions that render inline content on admin pages. Access the following properties on the `BlockExtensionApi` object to interact with the current context, navigate to other extensions, and display picker dialogs.
 * @publicDocs
 */
export interface BlockExtensionApi<ExtensionTarget extends AnyExtensionTarget>
  extends StandardApi<ExtensionTarget> {
  /**
   * An array of currently viewed or selected resource identifiers. Use this to access the IDs of items in the current context, such as selected products in an index page or the product being viewed on a details page. The available IDs depend on the extension target and user interactions.
   */
  data: Data;

  /**
   * Navigates to other extensions or admin pages. Currently supports navigation from a block to an action extension on the same resource page. For example, navigate from a product details block (`admin.product-details.block.render`) to a product details action (`admin.product-details.action.render`).
   */
  navigation: Navigation;

  /**
   * Opens the [Resource Picker](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/resource-picker-api) modal for selecting products, variants, or collections. Use this to let merchants choose resources that your extension needs to work with.
   */
  resourcePicker: ResourcePickerApi;
}
