export type Version = 'unstable';

export interface StandardApi {
  locale: string;
  version: Version;
  extensionPoint: import('../../extension-points').ExtensionPoint;
}
