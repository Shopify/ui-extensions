---
'@shopify/ui-extensions': minor
'@shopify/ui-extensions-react': minor
---

# Add checkoutToken Api

Extensions now have access to the checkout token (a stable id used to identify the checkout) directly through the standard api. The checkout token will match:

- **token** field in [WebPixel checkout payload](https://shopify.dev/docs/api/pixels/customer-events#checkout).
- **checkout_token** in the [Admin REST Api Order resource](https://shopify.dev/docs/api/admin-rest/unstable/resources/order#resource-object)
