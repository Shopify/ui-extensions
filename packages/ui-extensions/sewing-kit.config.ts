import {createPackage} from '@sewing-kit/config';
import {uiExtensionsPackage} from '../../config/sewing-kit';

export default createPackage((pkg) => {
  pkg.entry({root: './src'});
  pkg.entry({name: 'admin', root: './src/surfaces/admin'});
  pkg.entry({name: 'checkout', root: './src/surfaces/checkout'});
  pkg.use(uiExtensionsPackage());
});
