## Behavior

- 📱 All children of StackItems are placed in a single view object, which makes recycling the views expensive. Consider keeping your StackItems simple.

| ✅ Do                                                                      | 🛑 Don't                              |
| -------------------------------------------------------------------------- | ------------------------------------- |
| 📱 Keep StackItems shallow. Complex hierarchies have performance penalties | 📱 Use complex and deep Stack layouts |
| Wrap small UI elements in StackItem to group UI elements and styles        | Use StackItems outside of Stacks      |
