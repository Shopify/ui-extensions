export class StorageError extends Error {
  public name = 'StorageError';
  constructor(
    public code: 'RecordsCount' | 'RecordSize' | 'KeyType' | 'KeySize',
    message: string,
  ) {
    super(message);
  }
}
export interface Storage<
  BaseStorageTypes extends Record<string, any> = Record<string, unknown>,
> {
  /**
   * Sets the value of a key in the storage.
   *
   * @param key - The key to set the value for.
   * @param value - The value to set for the key.
   * Can be any primitive type supported by `JSON.stringify`.
   * @throws StorageError when:
   *    the extension exceeds its allotted storage limit.
   *    the value exceeds its allotted storage limit.
   *    the key is not a string or exceeds its allotted size.
   */
  set<
    StorageTypes extends BaseStorageTypes = BaseStorageTypes,
    Keys extends keyof StorageTypes = keyof StorageTypes,
  >(
    key: Keys,
    value: StorageTypes[Keys],
  ): Promise<void>;

  /**
   * Gets the value of a key in the storage.
   *
   * @param key - The key to get the value for.
   * @returns The value of the key.
   * If no value for the key exists, the resolved value is undefined.
   * @throws StorageError when the key is not a string or exceeds its allotted size.
   */
  get<
    StorageTypes extends BaseStorageTypes = BaseStorageTypes,
    Keys extends keyof StorageTypes = keyof StorageTypes,
  >(
    key: Keys,
  ): Promise<StorageTypes[Keys] | undefined>;

  /**
   * Clears the storage.
   */
  clear: () => Promise<void>;

  /**
   * Deletes a key from the storage.
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
   * Gets all the keys and values in the storage.
   *
   * @returns An array containing all the keys and values in the storage.
   */
  entries<
    StorageTypes extends BaseStorageTypes = BaseStorageTypes,
    Keys extends keyof StorageTypes = keyof StorageTypes,
  >(): Promise<[Keys, StorageTypes[Keys]][]>;
}
