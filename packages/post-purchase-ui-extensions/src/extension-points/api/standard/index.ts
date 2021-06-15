export type Version = 'unstable';

export interface StandardApi<
  ExtensionPoint extends import('../../extension-points').ExtensionPoint
> {
  version: Version;
  locale: string;
  extensionPoint: ExtensionPoint;
}
