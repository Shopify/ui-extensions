import {createPackage} from '@sewing-kit/config';
import {createProjectBuildPlugin} from '@sewing-kit/plugins';
import {argoCheckoutBinary} from '../../config/sewing-kit';

export default createPackage((pkg) => {
  pkg.binary({name: 'argogogo-run', root: './src/index'});
  pkg.use(argoCheckoutBinary());
  pkg.use(
    createProjectBuildPlugin(
      'Argogogo.CopyAppleScript',
      ({api, hooks, project}) => {
        hooks.steps.hook((steps, {variant}) => [
          ...steps,
          api.createStep(
            {id: 'Argogogo.CopyAppleScript', label: 'Copying AppleScripts'},
            async () => {
              const {copy} = await import('fs-extra');
              const variantName = Object.keys(variant)[0];

              await copy(
                project.fs.resolvePath(
                  'src/dev/browser/openChrome.applescript',
                ),
                project.fs.buildPath(
                  variantName === 'commonjs' ? 'cjs' : variantName,
                  'dev/browser/openChrome.applescript',
                ),
                {
                  overwrite: true,
                },
              );
            },
          ),
        ]);
      },
    ),
  );
});
