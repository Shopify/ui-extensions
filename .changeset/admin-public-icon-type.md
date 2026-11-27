---
'@shopify/ui-extensions': patch
---

The admin `s-icon` `type` and the `icon` props of Badge, Button, Select and TextField now list only the public icons that `s-icon` draws. Names that draw an icon, such as `text-ai` and `live-filled`, now type-check. Names that draw nothing, such as `truck`, `gift`, `complete` and `live-critical`, are now type errors.
