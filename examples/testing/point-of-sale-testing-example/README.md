This extension was created with:

```
shopify app init --name point-of-sale-testing-example
cd point-of-sale-testing-example
shopify app generate extension
# I chose 'POS block'
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
