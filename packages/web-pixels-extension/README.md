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

register(({configuration, analytics, browser}) => {
  const origin = await browser.origin.get();

  window.my_pixel.configure({
    pixelId: configuration.pixelId,
    origin,
  });

  analytics.subscribe("page_viewed", async (event, metadata) => {
    const cookieValue = await browser.cookie.get("my_pixel_cookie");

    window.my_pixel.publish("page_viewed", {
      href: event.href,
      domain: event.domain,
      title: metadata.title,
      referrer: metadata.referrer,
      origin: metadata.origin,
      cookie: cookieValue,
    });
  });
});
```
