import {createPackage} from '@shopify/loom';

import {defaultProjectPlugin} from '../../config/loom';

export default createPackage((pkg) => {
  pkg.entry({root: './src/index.ts'});
  pkg.entry({name: 'admin', root: './src/surfaces/admin/index.ts'});
  pkg.entry({name: 'checkout', root: './src/surfaces/checkout/index.ts'});
  pkg.use(defaultProjectPlugin());
});

