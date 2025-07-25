export interface Storage<
  BaseStorageTypes extends Record<string, any> = Record<string, unknown>,
> {
  /**
   * Sets the value of a key in the storage.
   *
   * @param key - The key to set the value for.
   * @param value - The value to set for the key.
   * Can be any primitive type supported by `JSON.stringify`.
   *
   * Rejects with a `StorageExceededError` if the extension exceeds its allotted storage limit.
   */
  set<
    StorageTypes extends BaseStorageTypes = BaseStorageTypes,
    Keys extends keyof StorageTypes = keyof StorageTypes,
  >(
    key: Keys,
    value: StorageTypes[Keys],
  ): Promise<void>;

  /**
   * Sets multiple key-value pairs in the storage at once.
   *
   * If the operation fails, no changes are made to storage.
   *
   * @param entries - An object containing key-value pairs to store.
   * Values can be any primitive type supported by `JSON.stringify`.
   *
   * Rejects with a `StorageExceededError` if the extension exceeds its allotted storage limit.
   */
  setMany<StorageTypes extends BaseStorageTypes = BaseStorageTypes>(
    entries: Partial<StorageTypes>,
  ): Promise<void>;

  /**
   * Gets the value of a key in the storage.
   *
   * @param key - The key to get the value for.
   * @returns The value of the key.
   *
   * If no value for the key exists, the resolved value is undefined.
   */
  get<
    StorageTypes extends BaseStorageTypes = BaseStorageTypes,
    Keys extends keyof StorageTypes = keyof StorageTypes,
  >(
    key: Keys,
  ): Promise<StorageTypes[Keys] | undefined>;

  /**
   * Gets the values of multiple keys in the storage at once.
   *
   * @param keys - An array of keys to get the values for.
   * @returns An object containing key-value pairs for the requested keys.
   *
   * The returned array is in the same order as `keys`, with `undefined` values for keys that do not exist.
   */
  getMany<
    StorageTypes extends BaseStorageTypes = BaseStorageTypes,
    Keys extends keyof StorageTypes = keyof StorageTypes,
  >(
    keys: Keys[],
  ): Promise<(StorageTypes[Keys] | undefined)[]>;

  /**
   * Clears the storage.
   */
  clear(): Promise<void>;

  /**
   * Deletes a key from the storage.
   *
   * @param key - The key to delete.
   * @returns A promise that resolves to `true` if the key was deleted, or `false` if the key did not exist.
   */
  delete<
    StorageTypes extends BaseStorageTypes = BaseStorageTypes,
    Keys extends keyof StorageTypes = keyof StorageTypes,
  >(
    key: Keys,
  ): Promise<boolean>;

  /**
   * Deletes multiple keys from the storage at once.
   *
   * @param keys - An array of keys to delete.
   * @returns A promise that resolves to an object with `keys` keys, and boolean values,
   * which are `true` if the key was deleted, or `false` if the key did not exist.
   */
  deleteMany<
    StorageTypes extends BaseStorageTypes = BaseStorageTypes,
    Keys extends keyof StorageTypes = keyof StorageTypes,
  >(
    keys: Keys[],
  ): Promise<Record<Keys, boolean>>;

  /**
   * Gets all the keys and values in the storage.
   *
   * @returns An iterator containing all the keys and values in the storage.
   */
  entries<
    StorageTypes extends BaseStorageTypes = BaseStorageTypes,
    Keys extends keyof StorageTypes = keyof StorageTypes,
  >(): Promise<IterableIterator<[Keys, StorageTypes[Keys]]>>;
}

export interface StorageExceededError extends Error {
  name: 'StorageExceededError';
}
