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
 */
export interface Storage<
  BaseStorageTypes extends Record<string, any> = Record<string, unknown>,
> {
  /**
   * Stores a value under the specified key, overwriting any existing value. Values must be JSON-serializable.
   * Use for storing user preferences, caching API responses, or passing contextual data from tiles to modals.
   *
   * @param key - The key to set the value for.
   * @param value - The value to set for the key. Can be any primitive type supported by `JSON.stringify`.
   * @throws StorageError when:
   *    the extension exceeds its allotted storage limit (100 entries maximum).
   *    the value exceeds its allotted storage limit (~1 MB maximum).
   *    the key is not a string or exceeds its allotted size (~1 KB maximum).
   */
  set<
    StorageTypes extends BaseStorageTypes = BaseStorageTypes,
    Keys extends keyof StorageTypes = keyof StorageTypes,
  >(
    key: Keys,
    value: StorageTypes[Keys],
  ): Promise<void>;

  /**
   * Retrieves the value associated with a key, returning `undefined` if the key doesn't exist. Always handle the `undefined` case
   * by providing fallback values or conditional logic. Use for loading user preferences, retrieving cached data, or accessing
   * contextual information passed between extension targets.
   *
   * @param key - The key to get the value for.
   * @returns The value of the key. If no value for the key exists, the resolved value is undefined.
   * @throws StorageError when the key is not a string or exceeds its allotted size.
   */
  get<
    StorageTypes extends BaseStorageTypes = BaseStorageTypes,
    Keys extends keyof StorageTypes = keyof StorageTypes,
  >(
    key: Keys,
  ): Promise<StorageTypes[Keys] | undefined>;

  /**
   * Removes all stored data for the extension. This operation is irreversible and affects all key-value pairs stored by your extension.
   * Use for resetting extension state, handling user logout scenarios, or implementing "factory reset" functionality.
   */
  clear: () => Promise<void>;

  /**
   * Deletes a specific key from storage and returns `true` if the key existed, `false` if it didn't exist. Returns `false` for
   * non-existent keys rather than throwing an error. Use for cleaning up temporary workflow data, removing expired cache entries,
   * or handling user preference changes.
   *
   * @param key - The key to delete.
   * @returns A promise that resolves to `true` if the key was deleted, `false` if it didn't exist.
   */
  delete<
    StorageTypes extends BaseStorageTypes = BaseStorageTypes,
    Keys extends keyof StorageTypes = keyof StorageTypes,
  >(
    key: Keys,
  ): Promise<boolean>;

  /**
   * Retrieves all stored key-value pairs as an array of tuples, preserving original data types. Returns all data at once which may
   * impact memory usage with large datasets. Use for debugging storage contents, implementing data export features, or performing
   * bulk operations across stored data.
   *
   * @returns An array of tuples containing all the keys and values in the storage.
   */
  entries<
    StorageTypes extends BaseStorageTypes = BaseStorageTypes,
    Keys extends keyof StorageTypes = keyof StorageTypes,
  >(): Promise<[Keys, StorageTypes[Keys]][]>;
}
