import {createRemoteRoot} from '@remote-ui/core';

import type {
  RenderExtension,
  RenderExtensionWithRemoteRoot,
} from '../../extension';

import type {ExtensionPoint, ExtensionPoints} from './extension-points';

export * from '../../extension';

export function extension<Point extends ExtensionPoint>(
  _extensionPoint: Point,
  extensionWithRemoteRoot: ExtensionPoints[Point] extends RenderExtension<
    infer Api,
    infer AllowedComponents
  >
    ? RenderExtensionWithRemoteRoot<Api, AllowedComponents>
    : ExtensionPoints[Point],
): ExtensionPoints[Point] {
  async function extension(...args: any[]) {
    if (
      args.length === 1 ||
      typeof args[0] !== 'object' ||
      args[0] == null ||
      !('channel' in args[0])
    ) {
      const result = await (extensionWithRemoteRoot as any)(...args);
      return result;
    }

    const [{channel, components}, ...rest] = args;

    const root = createRemoteRoot(channel, {components, strict: true});

    const result = await (extensionWithRemoteRoot as any)(root, ...rest);
    await root.mount();

    return result;
  }

  return extension as any;
}
