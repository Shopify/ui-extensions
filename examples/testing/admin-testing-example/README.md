This extension was created with:

```
shopify app init --name admin-testing-example
cd admin-testing-example
shopify app generate extension --template admin_block
```

See it in action:

Build the root package:

```
pnpm build
```

Change into this example package and run:

```
npm install
npm run typecheck
npm test
```
