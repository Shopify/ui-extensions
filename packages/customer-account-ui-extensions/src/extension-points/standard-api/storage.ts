/**
 * A key-value storage object for extension points.
 *
 * Stored data is only available to this specific app
 * but can be shared across multiple extension points.
 *
 * The storage backend is implemented with `localStorage` and
 * should persist for ... days
 * However, data persistence isn't guaranteed.
 */
export interface Storage {
  /**
   * Read and return a stored value by key.
   *
   * The stored data is deserialized from JSON and returned as
   * its original primitive.
   *
   * Returns `null` if no stored data exists.
   */
  read<T = unknown>(key: string): Promise<T | null>;

  /**
   * Write stored data for this key.
   *
   * The data must be serializable to JSON.
   */
  write(key: string, data: any): Promise<void>;

  /**
   * Delete stored data by key.
   */
  delete(key: string): Promise<void>;
}
