# no plans to merge this into main, as it's only being used for the testing
#!/bin/bash

. "$PWD/scripts/consumer-helper.sh"
yarnpkg build
projectName="web"
package="admin-ui-extensions"
targetRoot=$(resolve "$ROOT/../web")
shopifyNodeModulesDir="$targetRoot/node_modules/@shopify"
targetDir="$shopifyNodeModulesDir/$package-v1"
packageDir="$ROOT/packages/$package"
packageFile="shopify-$package-latest.tgz"

echo "Processing ${CYAN}$package${NONE}:"

    if [[ -d $packageDir ]]; then

      cd $packageDir

      packCmd="yarn pack --filename $packageFile"

      if [[ $debug = 0 ]]; then
        buildCmd+=" > /dev/null"
        packCmd+=" > /dev/null"
      fi

      echo "${DIM}[1/3]${NORMAL} 🏗  Building package..."
      eval $buildCmd

      if [[ $? != 0 ]]; then
        err "Build failed. Please ensure there are no errors in the package."
        exit 1
      fi

      echo "${DIM}[2/3]${NORMAL} 📦 Packing for transport..."
      eval $packCmd
    fi
echo "copy_to_target $package $packageFile --> $targetDir "
rm -rf $targetDir

if ([ ! -d $targetDir ]); then
    mkdir -p $targetDir
fi

if ([ -d $targetDir ] && [[ -f "$packageFile" ]]); then
    echo "${DIM}[3/3]${NORMAL} 💿 Installing to node_modules..."
    cat $packageFile | tar xzf - --strip-components=1 -C $targetDir
fi

if [[ -f "$packageFile" ]]; then

    rm $packageFile
    fi

echo "💪 Done."
