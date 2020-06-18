export type Version = 'unstable';

export interface StandardApi<
  ExtensionPoint extends import('../../extension-points').ExtensionPoint
> {
  locale: string;
  version: Version;
  extensionPoint: ExtensionPoint;
}
