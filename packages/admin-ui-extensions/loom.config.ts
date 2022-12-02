import {createPackage} from '@shopify/loom';

import {defaultProjectPlugin} from '../../config/loom';

export default createPackage((pkg) => {
  pkg.entry({root: './src/index.ts'});
  pkg.entry({
    name: 'extension-points',
    root: './src/extension-points/index.ts',
  });
  pkg.entry({name: 'extension-api', root: './src/extension-api/index.ts'});
  pkg.use(defaultProjectPlugin());
});
