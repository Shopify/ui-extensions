API_VERSION=$1
DOCS_PATH=docs/surfaces/checkout

if [ -z $API_VERSION ]
then
  echo "You must specify a calver version YYYY-MM or YYYY-MM-rc (for a release candidate)."
  exit 1;
else
  echo "Building docs for '$API_VERSION' checkout UI extensions API (fast mode - only changed files)."
fi

# Get list of changed .doc.ts files
CHANGED_DOCS=$(git diff --name-only HEAD | grep "\.doc\.ts$" | grep "$DOCS_PATH/staticPages")

if [ -z "$CHANGED_DOCS" ]; then
  echo "No .doc.ts files changed in static pages. Nothing to rebuild."
  exit 0
fi

echo "Changed files:"
echo "$CHANGED_DOCS"

# Convert full paths to relative paths from package root
RELATIVE_DOCS=$(echo "$CHANGED_DOCS" | sed 's|packages/ui-extensions/||g')

echo "Compiling: $RELATIVE_DOCS"

# Only compile changed static pages
COMPILE_STATIC_PAGES="yarn tsc $RELATIVE_DOCS --types react --moduleResolution node --target esNext --module CommonJS && yarn generate-docs --isLandingPage --input ./$DOCS_PATH/staticPages --output ./$DOCS_PATH/generated"

eval $COMPILE_STATIC_PAGES
build_exit=$?

# Clean up generated JS files
find ./ -name '*.doc*.js' -exec rm -r {} \;

if [ $build_exit -ne 0 ]; then
  echo "** Failed to generate docs"
  exit $build_exit
fi

# Generate targets.json
echo "Generating targets.json..."
node $DOCS_PATH/build-docs-targets-json.mjs $API_VERSION
targets_exit=$?
if [ $targets_exit -ne 0 ]; then
  echo "Warning: Failed to generate targets.json"
fi

# Copy generated docs to shopify-dev
copy_generated_docs_to_shopify_dev() {
  if [ -d $SHOPIFY_DEV_PATH ]; then
    mkdir -p $SHOPIFY_DEV_PATH/areas/platforms/shopify-dev/db/data/docs/templated_apis/checkout_extensions/$API_VERSION
    cp ./$DOCS_PATH/generated/* $SHOPIFY_DEV_PATH/areas/platforms/shopify-dev/db/data/docs/templated_apis/checkout_extensions/$API_VERSION
    echo "✓ Copied docs to shopify-dev: $SHOPIFY_DEV_PATH/areas/platforms/shopify-dev/db/data/docs/templated_apis/checkout_extensions/$API_VERSION"
  else
    echo "Not copying docs to shopify-dev because it was not found at $SHOPIFY_DEV_PATH."
  fi
}

SHOPIFY_DEV_PATH="$HOME/world/trees/root/src"
copy_generated_docs_to_shopify_dev

echo "✓ Fast docs build complete"
