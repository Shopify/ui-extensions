# Web Pixel Extension

Provides an `extend` method to register a Web Pixel Extension.

## Usage

Registering a Web Pixel Extension:

```js
import {extend} from '@shopify/web-pixel-ui-extensions';

extend('WebPixel::Render', ({analytics, context, config}) => {
  window.my_pixel.configure({
    pixelId: config.pixelId,
  });

  analytics.subscribe("page_viewed", async (event) => {
    const cookieValue = await context.cookie.get("my_pixel_cookie");

    window.my_pixel.publish("page_viewed", {
      href: event.href,
      domain: event.domain,
      title: event.title,
      cookie: cookieValue,
    });
  });
});
```
