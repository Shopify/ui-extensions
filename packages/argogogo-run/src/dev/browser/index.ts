import {execSync} from 'child_process';
import open from 'open';

// https://github.com/sindresorhus/open#app
const OSX_CHROME = 'google chrome';

export function openBrowser(url: string) {
  const browser = process.env.BROWSER;
  const args = process.env.BROWSER_ARGS
    ? process.env.BROWSER_ARGS.split(' ')
    : [];

  return startBrowserProcess(browser, url, ...args);
}

function startBrowserProcess(
  browser: string | undefined,
  url: string,
  ...args: any[]
) {
  // If we're on OS X, the user hasn't specifically
  // requested a different browser, we can try opening
  // Chrome with AppleScript. This lets us reuse an
  // existing tab when possible instead of creating a new one.
  const shouldTryOpenChromiumWithAppleScript =
    process.platform === 'darwin' &&
    (typeof browser !== 'string' || browser === OSX_CHROME);

  if (shouldTryOpenChromiumWithAppleScript) {
    // Will use the first open browser found from list
    const supportedChromiumBrowsers = [
      'Google Chrome Canary',
      'Google Chrome',
      'Microsoft Edge',
      'Brave Browser',
      'Vivaldi',
      'Chromium',
    ];

    for (const chromiumBrowser of supportedChromiumBrowsers) {
      try {
        // Try our best to reuse existing tab
        // on OSX Chromium-based browser with AppleScript
        execSync(`ps cax | grep "${chromiumBrowser}"`);
        execSync(
          `osascript openChrome.applescript "${encodeURI(
            url,
          )}" "${chromiumBrowser}"`,
          {
            cwd: __dirname,
            stdio: 'ignore',
          },
        );

        return true;
      } catch {
        // Ignore errors.
      }
    }
  }

  let openArguments: string | undefined | string[] = browser;

  // Another special case: on OS X, check if BROWSER has been set to "open".
  // In this case, instead of passing `open` to `opn` (which won't work),
  // just ignore it (thus ensuring the intended behavior, i.e. opening the system browser):
  // https://github.com/facebook/create-react-app/pull/1690#issuecomment-283518768
  if (process.platform === 'darwin' && openArguments === 'open') {
    openArguments = undefined;
  }

  // If there are arguments, they must be passed as array with the browser
  if (typeof openArguments === 'string' && args.length > 0) {
    openArguments = [openArguments, ...args];
  }

  // Fallback to open
  // (It will always open new tab)
  try {
    const options = {app: browser, wait: false, url: true};
    // squelch errors
    open(url, options).catch(() => {});
    return true;
  } catch {
    return false;
  }
}
