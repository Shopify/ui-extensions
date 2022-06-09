const RUN = '__run';
// const defaultSrc = 'https://shopify-argo-internal.com/load.html';

// const defaultSrc = 'load.html';
const defaultSrc = `${window?.location?.origin}/load.html`;

export function createIframeWorkerMessenger(url) {
  const {port1, port2} = new MessageChannel();

  /**
   * Log messages coming from worker
   */
  port1.addEventListener('message', ({data}) => {
    console.log('Host: receive message from worker', data);
  });

  const iframe = document.createElement('iframe');
  iframe.setAttribute('style', 'display:none;');
  iframe.addEventListener('load', () => {
    port1.start();
    iframe.contentWindow.postMessage({[RUN]: url.href}, '*', [port2]);
  });
  iframe.src = defaultSrc;
  document.body.appendChild(iframe);

  return {
    postMessage: (...args) => port1.postMessage(...args),
    addEventListener: (...args) => port1.addEventListener(...args),
    removeEventListener: (...args) => port1.removeEventListener(...args),
    terminate() {
      port1.close();
      iframe.remove();
    },
  };
}
