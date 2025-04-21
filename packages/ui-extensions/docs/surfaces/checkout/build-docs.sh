API_VERSION=$1
DOCS_PATH=docs/surfaces/checkout
SRC_PATH=src/surfaces/checkout

fail_and_exit() {
  echo "** Failed to generate docs"
  echo "See https://vault.shopify.io/page/Extension-Docs~SkgE.md"
  exit $1
}

run_sed() {
  if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' "$1" "$2"
  else
    # Linux and other Unix-like systems
    sed -i "$1" "$2"
  fi
}

if [ "$API_VERSION" = "unstable" ]; then
  echo "Publishing docs for the 'unstable' checkout UI extensions API is not supported. You must specify a calver version YYYY-MM or YYYY-MM-rc (for a release candidate)."
  exit 1;
fi

if [ -z $API_VERSION ]
then
  echo "You must specify a calver version YYYY-MM or YYYY-MM-rc (for a release candidate)."
  exit 1;
else
  echo "Building docs for '$API_VERSION' checkout UI extensions API."
fi

COMPILE_DOCS="yarn tsc --project $DOCS_PATH/tsconfig.docs.json --types react --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --overridePath ./$DOCS_PATH/typeOverride.json --input ./$DOCS_PATH/reference ./$SRC_PATH --typesInput ./$SRC_PATH  --output ./$DOCS_PATH/generated"
COMPILE_STATIC_PAGES="yarn tsc $DOCS_PATH/staticPages/*.doc.ts --types react --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --isLandingPage --input ./$DOCS_PATH/staticPages --output ./$DOCS_PATH/generated"


if echo "$PWD" | grep -q '\checkout-web'; then
  # We are generating docs from the private package, which does not have other surfaces aside from checkout
  eval $COMPILE_DOCS && eval $COMPILE_STATIC_PAGES
  build_exit=$?
else
  # Other surfaces may have duplicate types that cause issues with documentation generation,
  # so we erase their contents and replace them afterwards
  echo "export {}" > src/surfaces/customer-account.ts
  echo "export {}" > src/surfaces/admin.ts
  eval $COMPILE_DOCS && eval $COMPILE_STATIC_PAGES
  build_exit=$?
  git checkout HEAD -- src/surfaces/customer-account.ts
  git checkout HEAD -- src/surfaces/admin.ts
fi

# TODO: get generate-docs to stop requiring JS files:
# https://github.com/Shopify/generate-docs#important-note
find ./ -name '*.doc*.js' -exec rm -r {} \;

if [ $build_exit -ne 0 ]; then
  fail_and_exit $build_exit
fi

# Make sure https://shopify.dev URLs are relative so they work in Spin.
# See https://github.com/Shopify/generate-docs/issues/181
run_sed 's/https:\/\/shopify.dev//gi' ./$DOCS_PATH/generated/generated_docs_data.json
sed_exit=$?
if [ $sed_exit -ne 0 ]; then
  fail_and_exit $sed_exit
fi



copy_generated_docs_to_shopify_dev() {
# Copy the generated docs to shopify-dev
if [ -d $SHOPIFY_DEV_PATH ]; then
  mkdir -p $SHOPIFY_DEV_PATH/db/data/docs/templated_apis/checkout_extensions/$API_VERSION
  cp ./$DOCS_PATH/generated/* $SHOPIFY_DEV_PATH/db/data/docs/templated_apis/checkout_extensions/$API_VERSION
  # Replace 'unstable' with the exact API version in relative doc links
  run_sed \
    "s/\/docs\/api\/checkout-ui-extensions\/unstable/\/docs\/api\/checkout-ui-extensions\/$API_VERSION/gi" \
    $SHOPIFY_DEV_PATH/db/data/docs/templated_apis/checkout_extensions/$API_VERSION/generated_docs_data.json
  sed_exit=$?
  if [ $sed_exit -ne 0 ]; then
    fail_and_exit $sed_exit
  fi
  rsync -a --delete ./$DOCS_PATH/screenshots/ $SHOPIFY_DEV_PATH/app/assets/images/templated-apis-screenshots/checkout-ui-extensions/$API_VERSION

  if [ -n "$SPIN_SHOPIFY_DEV_SERVICE_FQDN" ]; then
    echo "Docs: https://$SPIN_SHOPIFY_DEV_SERVICE_FQDN/docs/api/checkout-ui-extensions"
  else
    echo "Docs: https://shopify-dev.myshopify.io/docs/api/checkout-ui-extensions"
  fi
else
    echo "Not copying docs to shopify-dev because it was not found at $SHOPIFY_DEV_PATH."
  fi
}

# Assume we have a relative path to shopify-dev (for non-local environments like CI, and Github Actions)
SHOPIFY_DEV_PATH="../../../shopify-dev"

if [ -d $SHOPIFY_DEV_PATH ]; then
  copy_generated_docs_to_shopify_dev
else
  # We could be in the shop/world repo and its in a different location on your local machine
  # This is a best guess as to where it might be located in local dev environments
  SHOPIFY_DEV_PATH="$HOME/src/github.com/Shopify/shopify-dev"
  copy_generated_docs_to_shopify_dev
fi

