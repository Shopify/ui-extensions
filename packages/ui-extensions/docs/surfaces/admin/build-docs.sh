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

# Read tsconfig.ab.docs.json and extract include/exclude patterns
# Find all .doc.ts files in SRC_PATH
FIND_CMD="find ./$SRC_PATH -name '*.doc.ts'"

# Store original files for restoration
declare -a MODIFIED_FILES

echo "Creating preview files and updating references..."
while IFS= read -r file; do
  # Check if the file contains a reference to default.html with preview language
  if grep -q "language: 'preview'" "$file"; then
    # Add file to modified list if not already there
    if [[ ! " ${MODIFIED_FILES[@]} " =~ " ${file} " ]]; then
      cp "$file" "$file.bak"
      MODIFIED_FILES+=("$file")
    fi
    
    # Replace default.html with preview.html in preview code blocks
    run_sed "s|code: './examples/default.html', // This gets updated in build-ab-docs.sh|code: './examples/preview.html',|" "$file"
    
    # Get the directory containing the examples
    EXAMPLES_DIR=$(dirname "$file")/examples
    
    # Check if default.html exists and create preview.html
    if [ -f "$EXAMPLES_DIR/default.html" ]; then
      cp "$EXAMPLES_DIR/default.html" "$EXAMPLES_DIR/preview.html"
      
      # Determine the layout type from the doc file
      LAYOUT="default"
      if grep -q "layout: 'inline'" "$file"; then
        LAYOUT="inline"
      elif grep -q "layout: 'section'" "$file"; then
        LAYOUT="section"
      fi
      
      # Add prefix and suffix content based on layout type
      if [ "$LAYOUT" = "inline" ]; then
        echo "<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.shopify.com/shopifycloud/app-bridge-ui-experimental.js"></script>
    <style>
      html, body {height:100%}
      body { box-sizing: border-box; margin: 0; padding:0.5rem; display: flex; justify-content: center; align-items: center; gap: 0.5rem;}
    </style>
  </head>
  <body>" > temp_file
      elif [ "$LAYOUT" = "section" ]; then
        echo "<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.shopify.com/shopifycloud/app-bridge-ui-experimental.js"></script>
    <style>
      html, body {height:100%}
      body { box-sizing: border-box; margin: 0; padding:0.5rem; display: grid; place-items: center; background: #F1F1F1;}
    </style>
  </head>
  <body>
    <div>
      <s-section padding="none">" > temp_file
      else # default layout
        echo "<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.shopify.com/shopifycloud/app-bridge-ui-experimental.js"></script>
    <style>
      html, body {height:100%}
      body { box-sizing: border-box; margin: 0; padding:0.5rem; display: grid; place-items: center; gap: 0.5rem;}
    </style>
  </head>
  <body>
    <div>" > temp_file
      fi

      cat "$EXAMPLES_DIR/preview.html" >> temp_file

      if [ "$LAYOUT" = "section" ]; then
        echo "</s-section>
    </div>
</body>
</html>" >> temp_file
      else
        echo "</div>
</body>
</html>" >> temp_file
      fi
      
      mv temp_file "$EXAMPLES_DIR/preview.html"
    fi
  fi
done < <(eval "$FIND_CMD")

COMPILE_DOCS="yarn tsc --project $DOCS_PATH/tsconfig.docs.json --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --overridePath ./$DOCS_PATH/typeOverride.json --input ./$DOCS_PATH/reference ./$SRC_PATH --typesInput ./$SRC_PATH --output ./$DOCS_PATH/generated"
COMPILE_STATIC_PAGES="yarn tsc $DOCS_PATH/staticPages/*.doc.ts --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --isLandingPage --input ./$DOCS_PATH/staticPages --output ./$DOCS_PATH/generated"

# Rename components.d.ts to components.ts so it can be picked up be the compiler
cp $COMPONENTS_DEFINITIONS $COMPONENTS_TS
# Remove references to HTMLElement
run_sed "s/typeof globalThis.HTMLElement/any/" $COMPONENTS_TS

eval $COMPILE_DOCS && eval $COMPILE_STATIC_PAGES
build_exit=$?

# Remove .doc.js files
find ./ -name '*.doc*.js' -exec rm -r {} \;
# Remove components.ts as it's no longer needed
rm $COMPONENTS_TS

# Remove shared.js files
find . -name "shared.js" -type f -delete

# Restore original files
for file in "${MODIFIED_FILES[@]}"; do
  if [ -f "$file.bak" ]; then
    mv "$file.bak" "$file"
  fi
done

# Clean up any preview.html files we created
echo "Cleaning up preview files..."
find ./$SRC_PATH -name 'preview.html' -exec rm {} \;

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

GENERATED_DOCS_JSON="./$DOCS_PATH/generated/generated_docs_data.json"
echo "Adding isOptional: true to members that don't have it..."
node "$(dirname "$0")/remove-required.js" "$GENERATED_DOCS_JSON"

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
