This extension was created with:

```
shopify app init --name customer-account-testing-example
cd customer-account-testing-example
shopify app generate extension
# I chose 'Customer account UI'
```

See it in action:

Build the root package:

```
yarn build
```

Change into this example package and run:

```
npm install
npm run typecheck
npm test
```
