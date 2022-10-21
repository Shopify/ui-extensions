export interface ExtensionInstance {
  readonly id: string;
}

export interface StandardApi {
  readonly extension: ExtensionInstance;
  readonly extensionPoint: string;
}
