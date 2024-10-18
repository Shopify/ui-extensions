import {createPackage} from '@shopify/loom';

import {defaultProjectPlugin} from '../../config/loom';

export default createPackage((pkg) => {
  pkg.entry({root: './src/index.ts'});
  pkg.entry({name: 'admin', root: './src/surfaces/admin.ts'});
  pkg.use(defaultProjectPlugin());
});
