## Guidelines

- 📱 Only nest Text within Link. Other components will be ignored. Nested Text components can be used to render the content of the Link

| ✅ Do                                                                     | 🛑 Don't                                              |
| ------------------------------------------------------------------------- | ----------------------------------------------------- |
| 📱 Use `external` to launch URLs with the device browser                  | Inject Javascript into the URL. This will be blocked. |
| 🖥 Use `external` to launch URLs in a new browser tab. Use HTTPS for URLs. |                                                       |

For more guidelines, refer to Polaris' [Link best practices](https://polaris.shopify.com/components/navigation/link#section-best-practices).
