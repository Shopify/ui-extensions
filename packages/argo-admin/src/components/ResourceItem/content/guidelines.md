## Behavior

- 📱 All children of ResourceItems are placed in a single view object, which makes recycling the views expensive. Consider making your ResourceItems simple.
- 📱 Any child of ResourceItem that has an `onPress` will take precedence and the `onPress` of ResourceItem will not be invoked

| ✅ Do                                                                        | 🛑 Don't                              |
| ---------------------------------------------------------------------------- | ------------------------------------- |
| 📱 Keep ResourceItem shallow. Complex hierarchies have performance penalties | 📱 Use complex and deep Stack layouts |