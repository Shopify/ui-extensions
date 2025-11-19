/* eslint-disable no-undef */
(function () {
  function setIframeTheme(isDark) {
    const iframe = document.querySelector('#icon-preview-iframe');
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        {type: 'theme', mode: isDark ? 'dark' : 'light'},
        '*',
      );
    }
  }
  function getThemeMode() {
    return document.documentElement.classList.contains('Mode-Dark')
      ? 'dark'
      : 'light';
  }
  const initialMode = getThemeMode();
  const isDark = initialMode === 'dark';
  // Wait for iframe to load before setting initial theme
  const iframe = document.querySelector('#icon-preview-iframe');
  if (iframe) {
    iframe.addEventListener('load', () => {
      setIframeTheme(isDark);
    });
    // If already loaded, set immediately
    if (iframe.contentWindow) {
      setIframeTheme(isDark);
    }
  }
  window.addEventListener('theme-mode-changed', (event) => {
    const themeMode = event.detail.themeMode;
    const isDarkMode = themeMode === 'Mode-Dark';
    setIframeTheme(isDarkMode);
  });
})();
