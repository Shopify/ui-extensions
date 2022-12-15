import {createPackage} from '@shopify/loom';

import {defaultProjectPlugin} from '../../config/loom';

export default createPackage((pkg) => {
  pkg.entry({root: './src/index.ts'});
  pkg.entry({name: 'checkout', root: './src/surfaces/checkout.ts'});
  pkg.use(defaultProjectPlugin({react: true}));
});
