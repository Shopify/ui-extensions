API_VERSION=$1
DOCS_PATH=docs/surfaces/checkout
SRC_PATH=src/surfaces/checkout

fail_and_exit() {
  echo "** Failed to generate docs"
  echo "See https://vault.shopify.io/page/Extension-Docs~SkgE.md"
  exit $1
}

if [ -z $API_VERSION ]
then
  echo "Building docs for 'unstable' checkout UI extensions API. You can add a calver version argument (e.g. 'yarn docs:checkout 2023-04') to generate the docs for a specific version in addition to 'unstable'."
else
  echo "Building docs for 'unstable' and '$API_VERSION' checkout UI extensions API."
fi

COMPILE_DOCS="yarn tsc --project $DOCS_PATH/tsconfig.docs.json --types react --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --overridePath ./$DOCS_PATH/typeOverride.json --input ./$DOCS_PATH/reference ./$SRC_PATH --typesInput ./$SRC_PATH ../ui-extensions-react/$SRC_PATH --output ./$DOCS_PATH/generated"
COMPILE_STATIC_PAGES="yarn tsc $DOCS_PATH/staticPages/*.doc.ts --types react --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --isLandingPage --input ./$DOCS_PATH/staticPages --output ./$DOCS_PATH/generated"

eval $COMPILE_DOCS && eval $COMPILE_STATIC_PAGES
build_exit=$?

# TODO: get generate-docs to stop requiring JS files:
# https://github.com/Shopify/generate-docs#important-note
find ./ -name '*.doc*.js' -exec rm -r {} \;

if [ $build_exit -ne 0 ]; then
  fail_and_exit $build_exit
fi

# Make sure https://shopify.dev URLs are relative so they work in Spin.
# See https://github.com/Shopify/generate-docs/issues/181
sed -i 's/https:\/\/shopify.dev//gi' ./$DOCS_PATH/generated/generated_docs_data.json
sed_exit=$?
if [ $sed_exit -ne 0 ]; then
  fail_and_exit $sed_exit
fi

if [ -n "$SPIN" ]; then
  if [ -n "$SPIN_SHOPIFY_DEV_SERVICE_FQDN" ]; then
    cp ./$DOCS_PATH/generated/* ~/src/github.com/Shopify/shopify-dev/db/data/docs/templated_apis/checkout_extensions/unstable
    rsync -a --delete ./$DOCS_PATH/screenshots/ ~/src/github.com/Shopify/shopify-dev/app/assets/images/templated-apis-screenshots/checkout-ui-extensions/unstable

    # Copy over to specified calver version
    if [ $# -gt 0 ]
    then
      mkdir -p ~/src/github.com/Shopify/shopify-dev/db/data/docs/templated_apis/checkout_extensions/$API_VERSION
      cp ./$DOCS_PATH/generated/* ~/src/github.com/Shopify/shopify-dev/db/data/docs/templated_apis/checkout_extensions/$API_VERSION
      # Replace 'unstable' with the exact API version in relative doc links
      sed -i \
        "s/\/docs\/api\/checkout-ui-extensions\/unstable/\/docs\/api\/checkout-ui-extensions\/$API_VERSION/gi" \
        ~/src/github.com/Shopify/shopify-dev/db/data/docs/templated_apis/checkout_extensions/$API_VERSION/generated_docs_data.json
      sed_exit=$?
      if [ $sed_exit -ne 0 ]; then
        fail_and_exit $sed_exit
      fi
      rsync -a --delete ./$DOCS_PATH/screenshots/ ~/src/github.com/Shopify/shopify-dev/app/assets/images/templated-apis-screenshots/checkout-ui-extensions/$API_VERSION
    fi

    cd ~/src/github.com/Shopify/shopify-dev
    restart
    echo "Docs: https://$SPIN_SHOPIFY_DEV_SERVICE_FQDN/docs/api/checkout-ui-extensions"
  else
    echo "If you include shopify-dev in your Spin constellation, this will automatically copy ./$DOCS_PATH/generated to shopify-dev"
  fi
else
  echo "Not copying docs to shopify-dev because we're not in Spin"
fi