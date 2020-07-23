import {MessageEndpoint} from '@shopify/rpc';

const RUN = '__run';
const defaultSrc = 'https://shopify-argo-internal.com/load.html';

export function createIframeWorkerMessenger(url: URL): MessageEndpoint {
  const {port1, port2} = new MessageChannel();

  const iframe = document.createElement('iframe');
  iframe.setAttribute('style', 'display:none;');
  iframe.addEventListener('load', () => {
    port1.start();
    iframe.contentWindow!.postMessage({[RUN]: url.href}, '*', [port2]);
  });
  iframe.src = defaultSrc;
  document.body.appendChild(iframe);

  return {
    postMessage: (...args: [any, Transferable[]]) => port1.postMessage(...args),
    addEventListener: (...args) => port1.addEventListener(...args),
    removeEventListener: (...args) => port1.removeEventListener(...args),
    terminate() {
      port1.close();
      iframe.remove();
    },
  };
}
