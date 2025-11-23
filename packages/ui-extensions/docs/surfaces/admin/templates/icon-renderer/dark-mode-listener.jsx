/* eslint-disable no-undef */
(function () {
  const initializedIframes = new WeakSet();

  function sendThemeToIframe() {
    const iframe = document.querySelector('#icon-preview-iframe');
    if (iframe && iframe.contentWindow) {
      const isDark = document.documentElement.classList.contains('Mode-Dark');
      iframe.contentWindow.postMessage(
        {type: 'theme', mode: isDark ? 'dark' : 'light'},
        '*',
      );
    }
  }

  const observer = new MutationObserver(() => {
    const iframe = document.querySelector('#icon-preview-iframe');
    if (iframe && !initializedIframes.has(iframe)) {
      initializedIframes.add(iframe);
      iframe.addEventListener('load', sendThemeToIframe);
      sendThemeToIframe();
    }
  });
  observer.observe(document.body, {childList: true, subtree: true});

  window.addEventListener('theme-mode-changed', () => {
    sendThemeToIframe();
  });
})();
