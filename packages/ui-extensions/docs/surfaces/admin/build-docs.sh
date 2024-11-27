#!/bin/bash

API_VERSION=$1
DOCS_PATH=docs/surfaces/admin
SRC_PATH=src/surfaces/admin
COMPONENTS_DEFINITIONS=src/surfaces/admin/components.d.ts
COMPONENTS_TS=src/surfaces/admin/components.ts
SHOPIFY_DEV_PATH="../../../shopify-dev"

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

if [ -z $API_VERSION ]
then
  API_VERSION="unstable"
  echo "Building docs for 'unstable' admin UI extensions API. You can add a calver version argument (e.g. 'yarn docs:admin 2023-07') to generate the docs for a stable version."
else
  echo "Building docs for '$API_VERSION' admin UI extensions API."
  echo "When generating docs for a stable version, 'unstable' docs are not regenerated. This avoids overwriting other unstable changes that are not included in this version."
  echo "If you need to update the 'unstable' version, run this command again without the '$API_VERSION' parameter."
fi

# COMPILE_COMPONENT_DOCS="yarn tsc --project ./docs/surfaces/${surface}/tsconfig.docs.json --types react --moduleResolution node  --target esNext  --module CommonJS && generate-docs --input ./src/surfaces/${surface}/components/* ./src/surfaces/${surface}/api/* --typesInput ./src --output ./docs/surfaces/${surface}/generated && rm -rf ../../src/surfaces/${surface}/**/**/*.doc.js"
# COMPILE_API_DOCS="yarn tsc --project ./docs/${surface}/tsconfig.docs.json --types react --moduleResolution node  --target esNext  --module CommonJS && generate-docs --input ./src/surfaces/${surface}/components/* --typesInput ./src --output ./docs/surfaces/${surface}/generated && rm -rf ./src/surfaces/${surface}/components/**/*.doc.js"
# COMPILE_STATIC_PAGES="yarn tsc ./docs/surfaces/${surface}/staticPages/*.doc.ts --types react --moduleResolution node  --target esNext  --module CommonJS && generate-docs --isLandingPage --input ./docs/surfaces/${surface}/staticPages --output ./docs/surfaces/${surface}/generated && rm -rf ./docs/surfaces/${surface}/staticPages/*.doc.js"

COMPILE_DOCS="yarn tsc --project $DOCS_PATH/tsconfig.docs.json --types react --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --overridePath ./$DOCS_PATH/typeOverride.json --input ./$DOCS_PATH/reference ./$SRC_PATH --typesInput ./$SRC_PATH ../ui-extensions-react/$SRC_PATH --output ./$DOCS_PATH/generated"
COMPILE_STATIC_PAGES="yarn tsc $DOCS_PATH/staticPages/*.doc.ts --types react --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --isLandingPage --input ./$DOCS_PATH/staticPages --output ./$DOCS_PATH/generated"

# Rename components.d.ts to components.ts so it can be picked up be the compiler
cp $COMPONENTS_DEFINITIONS $COMPONENTS_TS
# Remove references to HTMLElement
run_sed "s/typeof globalThis.HTMLElement/any/" $COMPONENTS_TS

eval $COMPILE_DOCS && eval $COMPILE_STATIC_PAGES
build_exit=$?

# Remove .doc.js files
find ./ -name '*.doc*.js' -exec rm -r {} \;
# Remove components.ts as it's no longer needed
# rm $COMPONENTS_TS

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

if [ -d $SHOPIFY_DEV_PATH ]; then
  mkdir -p $SHOPIFY_DEV_PATH/db/data/docs/templated_apis/admin_extensions/$API_VERSION
  cp ./$DOCS_PATH/generated/* $SHOPIFY_DEV_PATH/db/data/docs/templated_apis/admin_extensions/$API_VERSION
  # Replace 'unstable' with the exact API version in relative doc links
  run_sed \
    "s/\/docs\/api\/admin-extensions\/unstable/\/docs\/api\/admin-extensions\/$API_VERSION/gi" \
    $SHOPIFY_DEV_PATH/db/data/docs/templated_apis/admin_extensions/$API_VERSION/generated_docs_data.json
  sed_exit=$?
  if [ $sed_exit -ne 0 ]; then
    fail_and_exit $sed_exit
  fi
  rsync -a --delete ./$DOCS_PATH/screenshots/ $SHOPIFY_DEV_PATH/app/assets/images/templated-apis-screenshots/admin-extensions/$API_VERSION

  if [ -n "$SPIN_SHOPIFY_DEV_SERVICE_FQDN" ]; then
    echo "Docs: https://$SPIN_SHOPIFY_DEV_SERVICE_FQDN/docs/api/admin-extensions"
  else
    echo "Docs: https://shopify-dev.myshopify.io/docs/api/admin-extensions"
  fi
else
  echo "Not copying docs to shopify-dev because it was not found at $SHOPIFY_DEV_PATH."
fi
