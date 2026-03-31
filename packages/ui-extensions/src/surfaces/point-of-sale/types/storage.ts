import type {ReadonlySignalLike} from '../../../shared';

/**
 * @publicDocs
 */
export class StorageError extends Error {
  public name = 'StorageError';
  constructor(
    public code: 'RecordsCount' | 'RecordSize' | 'KeyType' | 'KeySize',
    message: string,
  ) {
    super(message);
  }
}
/**
 * Defines the storage interface for persisting extension data across sessions.
 * @publicDocs
 */
export interface Storage<
  BaseStorageTypes extends Record<string, any> = Record<string, unknown>,
> {
  /**
   * Reactive access to storage values as Subscribables.
   *
   * Each key is exposed as a `ReadonlySignalLike<T | undefined>`, enabling
   * reactive updates across targets of the same extension. One target can
   * subscribe to a key and react when another target updates it via `set()`
   * or `delete()`.
   *
   * Only available on API version `2026-04` and later.
   *
   * @example
   * ```typescript
   * // Subscribe to changes from another target:
   * const unsubscribe = api.storage.keys.syncStatus.subscribe((value) => {
   *   console.log('syncStatus changed:', value);
   * });
   * ```
   */
  keys?: StorageKeys<BaseStorageTypes>;

  /**
   * Stores a value under the specified key, overwriting any existing value. Values must be JSON-serializable and return `StorageError` when storage limits are exceeded. Commonly used for storing user preferences, caching API responses, or passing contextual data from tiles to modals.
   *
   * @param key - The key to set the value for.
   * @param value - The value to set for the key.
   * @throws StorageError when:
   * - Maximum number of records is exceeded (`code: 'RecordsCount'`)
   * - Individual record size exceeds the limit (`code: 'RecordSize'`)
   * - Key is not a string (`code: 'KeyType'`)
   * - Key size exceeds the limit (`code: 'KeySize'`)
   */
  set<
    StorageTypes extends BaseStorageTypes = BaseStorageTypes,
    Keys extends keyof StorageTypes = keyof StorageTypes,
  >(
    key: Keys,
    value: StorageTypes[Keys],
  ): Promise<void>;

  /**
   * Retrieves the value associated with a key, returning `undefined` if the key doesn't exist. Always handle the `undefined` case by providing fallback values or conditional logic. Commonly used for loading user preferences, retrieving cached data, or accessing contextual information passed between extension targets.
   *
   * @param key - The key to get the value for.
   * @returns The value of the key.
   * @throws StorageError when the key isn't a string or exceeds its allotted size.
   */
  get<
    StorageTypes extends BaseStorageTypes = BaseStorageTypes,
    Keys extends keyof StorageTypes = keyof StorageTypes,
  >(
    key: Keys,
  ): Promise<StorageTypes[Keys] | undefined>;

  /**
   * Clears all data from storage, removing all key-value pairs.
   */
  clear: () => Promise<void>;

  /**
   * Deletes a specific key from storage and returns `true` if the key existed, `false` if it didn't exist. Returns `false` for non-existent keys rather than throwing an error. Commonly used for cleaning up temporary workflow data, removing expired cache entries, or handling user preference changes.
   *
   * @param key - The key to delete.
   */
  delete<
    StorageTypes extends BaseStorageTypes = BaseStorageTypes,
    Keys extends keyof StorageTypes = keyof StorageTypes,
  >(
    key: Keys,
  ): Promise<boolean>;

  /**
   * Retrieves all stored key-value pairs as an array of tuples, preserving original data types. Returns all data at once which may impact memory usage with large datasets. Commonly used for debugging storage contents, implementing data export features, or performing bulk operations across stored data.
   *
   * @returns An array containing all the keys and values in the storage.
   */
  entries<
    StorageTypes extends BaseStorageTypes = BaseStorageTypes,
    Keys extends keyof StorageTypes = keyof StorageTypes,
  >(): Promise<[Keys, StorageTypes[Keys]][]>;
}

/**
 * Provides reactive, subscribable access to individual storage keys.
 *
 * Each property is a `ReadonlySignalLike` that reflects the current value of
 * the corresponding storage key. Values are `undefined` when the key does not
 * exist.
 *
 * Mutations are performed through the existing `Storage` methods (`set`,
 * `delete`, `clear`, etc.) — `StorageKeys` is read-only and reactive.
 */
export type StorageKeys<
  BaseStorageTypes extends Record<string, any> = Record<string, unknown>,
> = {
  readonly [K in keyof BaseStorageTypes]: ReadonlySignalLike<
    BaseStorageTypes[K] | undefined
  >;
};
