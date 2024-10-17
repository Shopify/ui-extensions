import {ReactNode} from 'react';
import {createRoot} from 'react-dom/client';

export const remoteDomRender = (node: ReactNode, root: HTMLElement) => {
  return new Promise<() => void>((resolve, reject) => {
    try {
      const remoteRoot = createRoot(root);
      remoteRoot.render(node);

      resolve(() => remoteRoot.unmount());
    } catch (error) {
      // Workaround for https://github.com/Shopify/ui-extensions/issues/325
      // eslint-disable-next-line no-console
      console.error(error);
      reject(error);
    }
  });
};
