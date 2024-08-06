export interface StorageApi {
  storage: StorageApiContent;
}

export enum StorageApiErrorCode {
  DataSizeLimitExceeded = 'DATA_SIZE_LIMIT_EXCEEDED',
}
export class StorageApiError extends Error {
  constructor(message: string, public code: StorageApiErrorCode) {
    super(message);
    this.name = 'StorageApiError';
    this.code = code;
  }
}

export interface StorageApiContent {
  /**
   * Get the value of a key from the storage
   * @param key
   * @returns the value of the key or undefined if the key does not exist
   */
  get(key: string): Promise<string | undefined>;

  /**
   * Set the value of a key in the storage
   * Value must be encoded as a string
   * @throws StorageApiError with code=StorageApiErrorCode.DataSizeLimitExceeded if the data size limit is exceeded
   * @param key
   * @param value
   */
  set(key: string, value: string): Promise<void>;
}
