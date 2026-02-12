This extension was created with:

```
shopify app init --name checkout-basic-testing-example
cd checkout-basic-testing-example
shopify app generate extension
# I chose 'Checkout UI'
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
