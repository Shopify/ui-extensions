import type {ReadonlySignalLike} from '../../../../shared';
import type {ExtensionTarget as AnyExtensionTarget} from '../../extension-targets';
import type {BlockExtensionApi} from '../block/block';
import type {StandardApi} from '../standard/standard';

/**
 * A metaobject field exposed to a custom form extension.
 * @publicDocs
 */
export interface MetaobjectFormSnapshotField {
  /** The field key from the metaobject definition. */
  key: string;
  /** The metaobject field definition type. */
  type: string;
  /** The field's current serialized value. */
  value: string;
  /** Whether the field can be updated by the extension. */
  editable: boolean;
  /** Validation errors currently associated with the field. */
  errors: string[];
}

/**
 * The current state of the metaobject form.
 * @publicDocs
 */
export interface MetaobjectFormSnapshot {
  /**
   * The complete set of fields in the metaobject form. Admin launches this
   * target only for definitions with at most 40 trusted form fields, so this
   * array is complete whenever the target runs.
   */
  fields: MetaobjectFormSnapshotField[];
}

/**
 * The input used to update a metaobject field.
 * @publicDocs
 */
export interface MetaobjectFormSetFieldValueInput {
  /** The field key from the metaobject definition. */
  key: string;
  /** The new serialized field value. */
  value: string;
}

/**
 * A machine-readable reason why a metaobject field update failed.
 * @publicDocs
 */
export type MetaobjectFormSetFieldValueErrorCode =
  | 'UNKNOWN_FIELD'
  | 'READ_ONLY'
  | 'COMPUTED'
  | 'UNSUPPORTED_FIELD_TYPE'
  | 'INVALID_VALUE'
  | 'VALUE_TOO_LARGE'
  | 'NOT_ACTIVE';

/**
 * The result returned after attempting to update a metaobject field.
 * @publicDocs
 */
export type MetaobjectFormSetFieldValueResult =
  | {status: 'SUCCESS'}
  | {
      status: 'ERROR';
      code: MetaobjectFormSetFieldValueErrorCode;
    };

/**
 * A callback that finishes pending extension writes before Admin saves the
 * metaobject form.
 * @publicDocs
 */
export type MetaobjectFormSaveHandler = () => void | Promise<void>;

/**
 * The API available to extensions that customize a metaobject details form.
 * It intentionally exposes only the baseline APIs provided by this target's
 * Admin runtime in addition to the metaobject form contract. A generic Admin
 * Host might expose an incidental empty `data: {}`, but `data` is not part of
 * this target's supported contract.
 * @publicDocs
 */
export interface MetaobjectFormApi<ExtensionTarget extends AnyExtensionTarget>
  extends Pick<StandardApi<ExtensionTarget>, 'extension' | 'intents'>,
    Pick<BlockExtensionApi<ExtensionTarget>, 'navigation'> {
  /** A reactive snapshot of the current metaobject form. */
  snapshot: ReadonlySignalLike<MetaobjectFormSnapshot>;
  /** Updates a field in the host metaobject form. */
  setFieldValue(
    input: MetaobjectFormSetFieldValueInput,
  ): Promise<MetaobjectFormSetFieldValueResult>;
  /**
   * Registers or removes the callback that runs before the Admin save. Pass
   * `null` to remove a previously registered callback.
   */
  setSaveHandler(handler: MetaobjectFormSaveHandler | null): void;
}
