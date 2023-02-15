COMPILE_DOCS="yarn tsc --project docs/tsconfig.docs.json --types react --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --overridePath ./docs/typeOverride.json --input ./src --output ./docs/generated"
COMPILE_STATIC_PAGES="yarn tsc docs/staticPages/*.doc.ts --types react --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --isLandingPage --input ./docs/staticPages --output ./docs/generated"

eval $COMPILE_DOCS && eval $COMPILE_STATIC_PAGES
build_exit=$?

find . -name '*.doc.js' -exec rm -r {} \;

if [ $build_exit -ne 0 ]; then
  echo "** Failed to generate docs"
  exit $build_exit
fi


if [ -n "$SPIN" ]; then
  if [ -n "$SPIN_SHOPIFY_DEV_SERVICE_FQDN" ]; then
    cp ./docs/generated/* ~/src/github.com/Shopify/shopify-dev/db/data/docs/templated_apis/checkout_extensions/
    cp ./docs/screenshots/* ~/src/github.com/Shopify/shopify-dev/app/assets/images/templated-apis-screenshots/checkout-ui-extensions/
    cd ~/src/github.com/Shopify/shopify-dev
    restart
  else
    echo "If you include shopify-dev in your Spin constellation, this will automatically copy ./docs/generated to shopify-dev"
  fi
else
  echo "Not copying docs to shopify-dev because we're not in Spin"
fi
