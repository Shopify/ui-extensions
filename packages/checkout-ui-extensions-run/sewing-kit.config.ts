import {createPackage} from '@sewing-kit/config';
import {checkouUiExtensionsBinary} from '../../config/sewing-kit';

export default createPackage((pkg) => {
  pkg.binary({name: 'checkout-ui-extensions-run', root: './src/index'});
  pkg.use(checkouUiExtensionsBinary());
});
