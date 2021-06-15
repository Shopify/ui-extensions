import {createPackage} from '@sewing-kit/config';
import {uiExtensionsPackage} from '../../config/sewing-kit';

export default createPackage((pkg) => {
  pkg.entry({root: './src/index'});
  pkg.entry({name: 'extension-points', root: './src/extension-points'});
  pkg.entry({name: 'extension-api', root: './src/extension-api'});
  pkg.use(uiExtensionsPackage());
});
