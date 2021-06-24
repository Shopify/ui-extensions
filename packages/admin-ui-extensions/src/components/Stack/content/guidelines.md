## Guidelines

- 📱 All children of Stack are placed in a single view object, which makes recycling the views expensive and results in poorer performance when scrolling. Consider keeping your Stacks simple.
- By default, Stacks alignment is `'leading’`.
- Distribution is ignored for vertical stacks

| ✅ Do                                                                             | 🛑 Don't                              |
| --------------------------------------------------------------------------------- | ------------------------------------- |
| 📱 Keep Stacks narrow. There is typically more vertical space than horizontal     | 📱 Use complex and deep Stack layouts |
| 📱 Keep Horizontal Stacks shallow. Complex hierarchies have performance penalties |                                       |

For more guidelines, refer to Polaris' [Stack best practices](https://polaris.shopify.com/components/structure/stack#section-best-practices).