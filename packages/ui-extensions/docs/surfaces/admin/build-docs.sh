API_VERSION=$1
DOCS_PATH=docs/surfaces/admin
SRC_PATH=src/surfaces/admin

fail_and_exit() {
  echo "** Failed to generate docs"
  exit $1
}

if [ -z $API_VERSION ]
then
  echo "Building docs for 'unstable' admin UI extensions API. You can add a calver version argument (e.g. 'yarn docs:admin 2023-04') to generate the docs for a specific version."
  API_VERSION="unstable"
else
  echo "Building docs for '$API_VERSION' admin UI extensions API."
fi

# COMPILE_COMPONENT_DOCS="yarn tsc --project ./docs/surfaces/${surface}/tsconfig.docs.json --types react --moduleResolution node  --target esNext  --module CommonJS && generate-docs --input ./src/surfaces/${surface}/components/* ./src/surfaces/${surface}/api/* --typesInput ./src --output ./docs/surfaces/${surface}/generated && rm -rf ../../src/surfaces/${surface}/**/**/*.doc.js"
# COMPILE_API_DOCS="yarn tsc --project ./docs/${surface}/tsconfig.docs.json --types react --moduleResolution node  --target esNext  --module CommonJS && generate-docs --input ./src/surfaces/${surface}/components/* --typesInput ./src --output ./docs/surfaces/${surface}/generated && rm -rf ./src/surfaces/${surface}/components/**/*.doc.js"
# COMPILE_STATIC_PAGES="yarn tsc ./docs/surfaces/${surface}/staticPages/*.doc.ts --types react --moduleResolution node  --target esNext  --module CommonJS && generate-docs --isLandingPage --input ./docs/surfaces/${surface}/staticPages --output ./docs/surfaces/${surface}/generated && rm -rf ./docs/surfaces/${surface}/staticPages/*.doc.js"


COMPILE_DOCS="yarn tsc --project $DOCS_PATH/tsconfig.docs.json --types react --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --overridePath ./$DOCS_PATH/typeOverride.json --input ./$DOCS_PATH/reference ./$SRC_PATH --typesInput ./$SRC_PATH ../ui-extensions-react/$SRC_PATH --output ./$DOCS_PATH/generated"
COMPILE_STATIC_PAGES="yarn tsc $DOCS_PATH/staticPages/*.doc.ts --types react --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --isLandingPage --input ./$DOCS_PATH/staticPages --output ./$DOCS_PATH/generated"


eval $COMPILE_DOCS && eval $COMPILE_STATIC_PAGES
build_exit=$?


# Remove .doc.js files
find ./ -name '*.doc*.js' -exec rm -r {} \;

if [ $build_exit -ne 0 ]; then
  fail_and_exit $build_exit
fi

# Generate targets.json
echo "Generating targets.json..."
node ./$DOCS_PATH/build-docs-targets-json.mjs $API_VERSION
targets_exit=$?
if [ $targets_exit -ne 0 ]; then
  fail_and_exit $targets_exit
fi

# Make sure https://shopify.dev URLs are relative so they work in Spin (same as checkout)
if [ -f ./$DOCS_PATH/generated/generated_docs_data.json ]; then
  sed -i.bak 's|https://shopify.dev||gi' ./$DOCS_PATH/generated/generated_docs_data.json 2>/dev/null || true
  rm -f ./$DOCS_PATH/generated/generated_docs_data.json.bak
fi

# Copy the generated docs (including targets.json) to shopify-dev when repo is present as sibling
if [ -d ../../../shopify-dev ]; then
  DEST_DIR="../../../shopify-dev/areas/platforms/shopify-dev/db/data/docs/templated_apis/admin_extensions/$API_VERSION"
  mkdir -p "$DEST_DIR"
  cp ./$DOCS_PATH/generated/* "$DEST_DIR/"
  if [ "$API_VERSION" != "unstable" ]; then
    sed -i.bak "s|/docs/api/admin-extensions/unstable|/docs/api/admin-extensions/$API_VERSION|gi" "$DEST_DIR/generated_docs_data.json" 2>/dev/null || true
    rm -f "$DEST_DIR/generated_docs_data.json.bak"
  fi
  echo "Copied admin docs and targets.json to shopify-dev at $DEST_DIR"
  if [ -n "$SPIN_SHOPIFY_DEV_SERVICE_FQDN" ]; then
    echo "Docs: https://$SPIN_SHOPIFY_DEV_SERVICE_FQDN/docs/api/admin-extensions"
  fi
else
  echo "Not copying to shopify-dev (not found at ../../../shopify-dev)."
fi
