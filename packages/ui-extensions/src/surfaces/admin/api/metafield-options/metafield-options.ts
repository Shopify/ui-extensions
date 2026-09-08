import type {StandardApi} from '../standard/standard';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';

/**
 * The [metafield definition types](/docs/apps/build/metafields/list-of-data-types) that support app-provided options.
 * @publicDocs
 */
export type MetafieldOptionsSupportedType =
  | 'single_line_text_field'
  | 'list.single_line_text_field';

/**
 * The resource whose metafields the admin is currently editing.
 * @publicDocs
 */
export interface MetafieldOptionsOwner {
  /** The resource's global ID, or `null` when the resource has not been created yet. */
  id: string | null;
  /** The [metafield owner type](/docs/api/admin-graphql/latest/enums/MetafieldOwnerType) of the resource, for example `ARTICLE` or `PRODUCT`. */
  type: string;
}

/**
 * A metafield definition owned by your app that the admin is currently rendering.
 * @publicDocs
 */
export interface MetafieldOptionsDefinition {
  /** The definition's reserved namespace. */
  namespace: string;
  /** The definition's key. */
  key: string;
  /** The merchant-facing name of the definition. */
  name: string;
  /** The definition's type. */
  type: MetafieldOptionsSupportedType;
  /** The value currently held in the editor, or an empty string when unset. */
  value: string;
}

/**
 * The data passed to a metafield options extension. Only definitions owned by your app are included.
 * @publicDocs
 */
export interface MetafieldOptionsData {
  /** The resource whose metafields are being edited. */
  owner: MetafieldOptionsOwner;
  /** The app-owned definitions the admin is asking your extension to supply options for. */
  metafields: MetafieldOptionsDefinition[];
}

/**
 * Presentation-only options for one of your app's metafield definitions.
 * @publicDocs
 */
export interface MetafieldOptions {
  /** The namespace of the definition these options belong to. Must match one of the definitions in `data.metafields`. */
  namespace: string;
  /** The key of the definition these options belong to. Must match one of the definitions in `data.metafields`. */
  key: string;
  /** The values the merchant can choose from. Options beyond the first 250 are ignored, and duplicates are removed. */
  options: string[];
}

/**
 * The output returned by a metafield options extension.
 *
 * These options are presentation guidance only. They are not persisted as `choices` validations, they do not change
 * save-time enforcement, and a value already saved on the metafield stays visible even if you stop returning it.
 * Entries for definitions that are not in `data.metafields` are ignored.
 * @publicDocs
 */
export interface MetafieldOptionsOutput {
  /** One entry per definition you want to supply options for. Omit a definition to leave it as a free-text field. */
  metafields: MetafieldOptions[];
}

/**
 * The `MetafieldOptionsApi` object provides the context a metafield options extension needs to supply choices for its
 * own metafield definitions. Access the following properties to read the resource being edited and the app-owned
 * definitions the admin is rendering.
 * @publicDocs
 */
export interface MetafieldOptionsApi<ExtensionTarget extends AnyExtensionTarget>
  extends StandardApi<ExtensionTarget> {
  /**
   * The resource being edited, and the metafield definitions owned by your app that the admin is rendering. The admin
   * never includes definitions owned by the merchant or by another app.
   */
  data: MetafieldOptionsData;
}
