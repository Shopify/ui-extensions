## Guidelines

- 📱 All children of `BlockStack` are placed in a single view object, which makes recycling the views expensive and results in poorer performance when scrolling. Consider keeping your Stacks simple.
- By default, `BlockStack` alignment is `'leading’`.

| ✅ Do                                                                         | 🛑 Don't                              |
| ----------------------------------------------------------------------------- | ------------------------------------- |
| 📱 Keep Stacks narrow. There is typically more vertical space than horizontal | 📱 Use complex and deep Stack layouts |

For more guidelines, refer to Polaris' [Stack best practices](https://polaris.shopify.com/components/layout-and-structure/stack#best-practices).
