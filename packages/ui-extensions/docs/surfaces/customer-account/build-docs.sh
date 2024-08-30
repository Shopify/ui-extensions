API_VERSION=$1
DOCS_PATH=docs/surfaces/customer-account
SRC_PATH=src/surfaces/customer-account

fail_and_exit() {
  echo "** Failed to generate docs"
  echo "See https://vault.shopify.io/page/Extension-Docs~SkgE.md"
  exit $1
}

run_sed() {
  if [ -n "$SPIN" ]
  then
    sed -i "$1" $2
  else
    sed -i '' "$1" $2
  fi
}

API_VERSION=$1

if [ -z $API_VERSION ]
then
  API_VERSION="unstable"
  echo "Building docs for 'unstable' customer account UI extensions API. You can add a calver version argument (e.g. 'yarn build-docs 2023-10') to generate the docs for a stable version."
else
  echo "Building docs for '$API_VERSION' customer account UI extensions API."
  echo "When generating docs for a stable version, 'unstable' docs are not regenerated. This avoids overwriting other unstable changes that are not included in this version."
  echo "If you need to update the 'unstable' version, run this command again without the '$API_VERSION' parameter."
fi

# For the time being we will get the component types from the checkout packages, which means this command will only work when the correct checkout-ui-extension version is present in your top level node_modules
COMPILE_DOCS="yarn tsc --project $DOCS_PATH/tsconfig.docs.json --types react --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --overridePath ./$DOCS_PATH/typeOverride.json --input ./$DOCS_PATH/reference ./$SRC_PATH  --typesInput ./$SRC_PATH ../ui-extensions-react/$SRC_PATH --output ./$DOCS_PATH/generated"
COMPILE_STATIC_PAGES="yarn tsc $DOCS_PATH/staticPages/*.doc.ts --types react --moduleResolution node  --target esNext  --module CommonJS && generate-docs --isLandingPage --input ./$DOCS_PATH/staticPages --output ./$DOCS_PATH/generated"
COMPILE_CATEGORY_PAGES="yarn tsc $DOCS_PATH/categories/*.doc.ts --types react --moduleResolution node  --target esNext  --module CommonJS && generate-docs --isCategoryPage --input ./$DOCS_PATH/categories --output ./$DOCS_PATH/generated"



if echo "$PWD" | grep -q '\customer-account'; then
  # We are generating docs from the private package, which does not have other surfaces aside from customer-account
  eval $COMPILE_DOCS && eval $COMPILE_STATIC_PAGES && eval $COMPILE_CATEGORY_PAGES
  build_exit=$?
else
  # Other surfaces may have duplicate types that cause issues with documentation generation,
  # so we erase their contents and replace them afterwards
  echo "export {}" > src/surfaces/checkout.ts
  echo "export {}" > src/surfaces/admin.ts
  echo "export {}" > src/surfaces/point-of-sale.ts
  echo "export {}" > ../ui-extensions-react/src/surfaces/checkout.ts
  echo "export {}" > ../ui-extensions-react/src/surfaces/admin.ts
  echo "export {}" > ../ui-extensions-react/src/surfaces/point-of-sale.ts
  eval $COMPILE_DOCS && eval $COMPILE_STATIC_PAGES && eval $COMPILE_CATEGORY_PAGES
  build_exit=$?
  git checkout HEAD -- src/surfaces/checkout.ts
  git checkout HEAD -- src/surfaces/admin.ts
  git checkout HEAD -- src/surfaces/point-of-sale.ts
  git checkout HEAD -- ../ui-extensions-react/src/surfaces/checkout.ts
  git checkout HEAD -- ../ui-extensions-react/src/surfaces/admin.ts
  git checkout HEAD -- ../ui-extensions-react/src/surfaces/point-of-sale.ts
fi


find ./ -name '*.doc*.js' -exec rm -r {} \;

# Make sure https://shopify.dev URLs are relative so they work in Spin.
# See https://github.com/Shopify/generate-docs/issues/181
run_sed 's/https:\/\/shopify.dev//gi' ./$DOCS_PATH/generated/generated_docs_data.json
sed_exit=$?
if [ $sed_exit -ne 0 ]; then
  fail_and_exit $sed_exit
fi

if [ -d ~/src/github.com/Shopify/shopify-dev ]; then
  mkdir -p ../../../shopify-dev/db/data/docs/templated_apis/customer_account_ui_extensions/$API_VERSION
  cp ./$DOCS_PATH/generated/* ../../../shopify-dev/db/data/docs/templated_apis/customer_account_ui_extensions/$API_VERSION
  # Replace 'unstable' with the exact API version in relative doc links
  run_sed \
    "s/\/docs\/api\/customer-account-ui-extensions\/unstable/\/docs\/api\/customer-account-ui-extensions\/$API_VERSION/gi" \
    ../../../shopify-dev/db/data/docs/templated_apis/customer_account_ui_extensions/$API_VERSION/generated_docs_data.json
  sed_exit=$?
  if [ $sed_exit -ne 0 ]; then
    fail_and_exit $sed_exit
  fi
  rsync -a --delete ./$DOCS_PATH/screenshots/ ../../../shopify-dev/app/assets/images/templated-apis-screenshots/customer-account-ui-extensions/$API_VERSION

  if [ -n "$SPIN_SHOPIFY_DEV_SERVICE_FQDN" ]; then
    echo "Docs: https://$SPIN_SHOPIFY_DEV_SERVICE_FQDN/docs/api/customer-account-ui-extensions"
  else
    echo "Docs: https://shopify-dev.myshopify.io/docs/api/customer-account-ui-extensions"
  fi
else
  echo "Not copying docs to shopify-dev because it was not found at ~/src/github.com/Shopify/shopify-dev."
fi
