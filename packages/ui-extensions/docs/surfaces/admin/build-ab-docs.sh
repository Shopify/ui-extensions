#!/bin/bash

API_VERSION=$1
DOCS_PATH=docs/surfaces/admin
SRC_PATH=src/surfaces/admin
COMPONENTS_DEFINITIONS=src/surfaces/admin/components.d.ts
COMPONENTS_TS=src/surfaces/admin/components.ts
SHOPIFY_DEV_PATH="../../../shopify-dev"
DOT_DEV_DOCS_JSON="$SHOPIFY_DEV_PATH/db/data/docs/templated_apis/app_bridge/generated_docs_data.json"
GENERATED_DOCS_JSON="./$DOCS_PATH/generated/generated_docs_data.json"

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

# Read tsconfig.ab.docs.json and extract include/exclude patterns
# Find all .doc.ts files in SRC_PATH
FIND_CMD="find ./$SRC_PATH -name '*.doc.ts'"

# Store original files for restoration
declare -a MODIFIED_FILES

echo "Replacing JSX/tsx references..."
while IFS= read -r file; do
  if grep -q "JSX\|\.tsx" "$file"; then
    cp "$file" "$file.bak"
    MODIFIED_FILES+=("$file")
    run_sed 's/JSX/HTML/g' "$file"
    run_sed 's/\.tsx/\.html/g' "$file"
  fi
done < <(eval "$FIND_CMD")


COMPILE_DOCS="yarn tsc --project $DOCS_PATH/tsconfig.ab.docs.json --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --overridePath ./$DOCS_PATH/typeOverride.json --input ./$DOCS_PATH/reference ./$SRC_PATH --typesInput ./$SRC_PATH --output ./$DOCS_PATH/generated"
# COMPILE_STATIC_PAGES="yarn tsc $DOCS_PATH/staticPages/*.doc.ts --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --isLandingPage --input ./$DOCS_PATH/staticPages --output ./$DOCS_PATH/generated"

# Rename components.d.ts to components.ts so it can be picked up be the compiler
cp $COMPONENTS_DEFINITIONS $COMPONENTS_TS
# Remove references to HTMLElement
run_sed "s/typeof globalThis.HTMLElement/any/" $COMPONENTS_TS

eval $COMPILE_DOCS 
build_exit=$?

# Restore original files
for file in "${MODIFIED_FILES[@]}"; do
  if [ -f "$file.bak" ]; then
    mv "$file.bak" "$file"
  fi
done

# Remove .doc.js files
find ./ -name '*.doc*.js' -exec rm -r {} \;
# Remove components.ts as it's no longer needed
rm $COMPONENTS_TS

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
  mkdir -p $SHOPIFY_DEV_PATH/db/data/docs/templated_apis/app_bridge

  jq 'map(select(.category != "Experimental Components"))' $DOT_DEV_DOCS_JSON > temp1.json

  jq 'map(.category = "Experimental Components")' $GENERATED_DOCS_JSON > temp2.json

  jq -s '.[0] + .[1]' temp1.json temp2.json > $DOT_DEV_DOCS_JSON

  rm temp1.json temp2.json
    
  rsync -a --delete ./$DOCS_PATH/screenshots/ $SHOPIFY_DEV_PATH/app/assets/images/templated-apis-screenshots/admin-extensions/$API_VERSION

  if [ -n "$SPIN_SHOPIFY_DEV_SERVICE_FQDN" ]; then
    echo "Docs: https://$SPIN_SHOPIFY_DEV_SERVICE_FQDN/docs/api/app-bridge-library"
  else
    echo "Docs: https://shopify-dev.myshopify.io/docs/api/app-bridge-library"
  fi
else
  echo "Not copying docs to shopify-dev because it was not found at $SHOPIFY_DEV_PATH."
fi
