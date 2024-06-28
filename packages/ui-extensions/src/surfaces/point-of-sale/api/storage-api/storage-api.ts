export interface StorageApi {
  storage: StorageApiContent;
}

export interface StorageApiContent {
  get(key: string): Promise<string | undefined>;
  set(key: string, value: string): Promise<void>;
}
