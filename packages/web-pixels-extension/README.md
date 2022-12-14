# Web Pixels Extension

Provides an `register` method to register a Web Pixels Extension.

## Installation

```bash
$ yarn add @shopify/web-pixels-extension
```

## Usage

Registering a Web Pixels Extension:

```js
import {register} from '@shopify/web-pixels-extension';

register(({configuration, analytics, browser, init}) => {
  window.my_pixel.configure({
    pixelId: configuration.pixelId,
    href: init.context.window.location.href,
    origin: init.context.window.location.origin,
  });

  analytics.subscribe('page_viewed', async (event) => {
    const cookieValue = await browser.cookie.get('my_pixel_cookie');

    window.my_pixel.publish('page_viewed', {
      href: event.context.window.location.href,
      origin: event.context.window.location.origin,
      cookie: cookieValue,
    });
  });
});
```
