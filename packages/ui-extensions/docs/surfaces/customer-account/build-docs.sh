API_VERSION=$1
DOCS_PATH=docs/surfaces/customer-account
SRC_PATH=src/surfaces/customer-account

# For the time being we will get the component types from the checkout packages, which means this command will only work when the correct checkout-ui-extension version is present in your top level node_modules
COMPILE_DOCS="yarn tsc --project $DOCS_PATH/tsconfig.docs.json --types react --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --overridePath ./$DOCS_PATH/typeOverride.json --input ./$DOCS_PATH/reference ./$SRC_PATH --typesInput ./$SRC_PATH ../ui-extensions-react/$SRC_PATH --output ./$DOCS_PATH/generated"
COMPILE_STATIC_PAGES="yarn tsc $DOCS_PATH/staticPages/*.doc.ts --types react --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --isLandingPage --input ./$DOCS_PATH/staticPages --output ./$DOCS_PATH/generated"
if [ -z $API_VERSION ]
then
  API_VERSION="unstable"
  echo "Building docs for 'unstable' customer account UI extensions API. You can add a calver version argument (e.g. 'yarn build-docs 2023-10') to generate the docs for a stable version."
else
  echo "Building docs for '$API_VERSION' customer account UI extensions API."
  echo "When generating docs for a stable version, 'unstable' docs are not regenerated. This avoids overwriting other unstable changes that are not included in this version."
  echo "If you need to update the 'unstable' version, run this command again without the '$API_VERSION' parameter."
fi

eval $COMPILE_DOCS
eval $COMPILE_STATIC_PAGES

find ../ -name '*.doc*.js' -exec rm -r {} \;

if [ -n "$SPIN" ]; then
  if [ -n "$SPIN_SHOPIFY_DEV_SERVICE_FQDN" ]; then
    cp ./$DOCS_PATH/generated/* ~/src/github.com/Shopify/shopify-dev/db/data/docs/templated_apis/customer_account_ui_extensions/$API_VERSION
    cp ./$DOCS_PATH/screenshots/* ~/src/github.com/Shopify/shopify-dev/app/assets/images/templated-apis-screenshots/customer-account-ui-extensions/$API_VERSION
    cd ~/src/github.com/Shopify/shopify-dev
    restart
  else
    echo "If you include shopify-dev in your Spin constellation, this will automatically copy ./docs/generated to shopify-dev"
  fi
else
  echo "Not copying docs to shopify-dev because we're not in Spin"
fi
