import {createPackage} from '@sewing-kit/config';
import {argoCheckoutBinary} from '../../config/sewing-kit';

export default createPackage((pkg) => {
  pkg.binary({name: 'argogogo', root: './src/index'});
  pkg.use(argoCheckoutBinary());
});
