API_VERSION=$1

if [ -z $API_VERSION ]
then
  echo "Building docs for 'unstable' checkout UI extensions API. You can add a calver version argument (e.g. 'yarn docs:checkout 2023-04') to generate the docs for a specific version in addition to 'unstable'."
else
  echo "Building docs for 'unstable' and '$API_VERSION' checkout UI extensions API."
fi

COMPILE_DOCS="yarn tsc --project docs/tsconfig.docs.json --types react --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --overridePath ./docs/typeOverride.json --input ./docs/reference ./src --typesInput ./src ../checkout-ui-extensions-react/src --output ./docs/generated"
COMPILE_STATIC_PAGES="yarn tsc docs/staticPages/*.doc.ts --types react --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --isLandingPage --input ./docs/staticPages --output ./docs/generated"

eval $COMPILE_DOCS && eval $COMPILE_STATIC_PAGES
build_exit=$?

# TODO: get generate-docs to stop requiring JS files:
# https://github.com/Shopify/generate-docs#important-note
find ./ -name '*.doc*.js' -exec rm -r {} \;

if [ $build_exit -ne 0 ]; then
  echo "** Failed to generate docs"
  echo "See https://vault.shopify.io/page/Extension-Docs~SkgE.md"
  exit $build_exit
fi

# Make sure https://shopify.dev URLs are relative so they work in Spin.
# See https://github.com/Shopify/generate-docs/issues/181
sed -i 's/https:\/\/shopify.dev//gi' ./docs/generated/generated_docs_data.json

if [ -n "$SPIN" ]; then
  if [ -n "$SPIN_SHOPIFY_DEV_SERVICE_FQDN" ]; then
    cp ./docs/generated/* ~/src/github.com/Shopify/shopify-dev/db/data/docs/templated_apis/checkout_extensions/unstable
    rsync -a --delete ./docs/screenshots/ ~/src/github.com/Shopify/shopify-dev/app/assets/images/templated-apis-screenshots/checkout-ui-extensions/unstable

    # Copy over to specified calver version
    if [ $# -gt 0 ]
    then
      mkdir -p ~/src/github.com/Shopify/shopify-dev/db/data/docs/templated_apis/checkout_extensions/$API_VERSION
      cp ./docs/generated/* ~/src/github.com/Shopify/shopify-dev/db/data/docs/templated_apis/checkout_extensions/$API_VERSION
      rsync -a --delete ./docs/screenshots/ ~/src/github.com/Shopify/shopify-dev/app/assets/images/templated-apis-screenshots/checkout-ui-extensions/$API_VERSION
    fi

    cd ~/src/github.com/Shopify/shopify-dev
    restart
    echo "Docs: https://$SPIN_SHOPIFY_DEV_SERVICE_FQDN/docs/api/checkout-ui-extensions"
  else
    echo "If you include shopify-dev in your Spin constellation, this will automatically copy ./docs/generated to shopify-dev"
  fi
else
  echo "Not copying docs to shopify-dev because we're not in Spin"
fi
