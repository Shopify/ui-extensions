import {createPackage, Runtime} from '@sewing-kit/config';
import {uiExtensionsPackage} from '../../config/sewing-kit';

export default createPackage((pkg) => {
  pkg.entry({root: './src/index', runtime: Runtime.Node});
  pkg.entry({name: 'worker', root: './src/worker', runtime: Runtime.WebWorker});
  pkg.use(uiExtensionsPackage());
});
