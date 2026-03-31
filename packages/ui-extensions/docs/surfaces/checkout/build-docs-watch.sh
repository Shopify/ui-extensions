API_VERSION=$1
DOCS_PATH=docs/surfaces/checkout

if [ -z $API_VERSION ]
then
  echo "You must specify a calver version YYYY-MM or YYYY-MM-rc (for a release candidate)."
  exit 1;
else
  echo "Watching docs for '$API_VERSION' checkout UI extensions API..."
fi

# Function to build docs
build_docs() {
  echo "Building docs..."

  # Get list of changed .doc.ts files
  CHANGED_DOCS=$(git diff --name-only HEAD | grep "\.doc\.ts$" | grep "$DOCS_PATH/staticPages")

  if [ -z "$CHANGED_DOCS" ]; then
    echo "No .doc.ts files changed, building all static pages..."
    COMPILE_STATIC_PAGES="yarn tsc $DOCS_PATH/staticPages/*.doc.ts --types react --moduleResolution node --target esNext --module CommonJS && yarn generate-docs --isLandingPage --input ./$DOCS_PATH/staticPages --output ./$DOCS_PATH/generated"
  else
    echo "Changed files:"
    echo "$CHANGED_DOCS"

    # Convert full paths to relative paths from package root
    RELATIVE_DOCS=$(echo "$CHANGED_DOCS" | sed 's|packages/ui-extensions/||g')

    COMPILE_STATIC_PAGES="yarn tsc $RELATIVE_DOCS --types react --moduleResolution node --target esNext --module CommonJS && yarn generate-docs --isLandingPage --input ./$DOCS_PATH/staticPages --output ./$DOCS_PATH/generated"
  fi

  eval $COMPILE_STATIC_PAGES
  build_exit=$?

  # Clean up generated JS files
  find ./ -name '*.doc*.js' -exec rm -r {} \;

  if [ $build_exit -ne 0 ]; then
    echo "** Failed to generate docs"
    return $build_exit
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
      echo "✓ Copied docs to shopify-dev"
    fi
  }

  SHOPIFY_DEV_PATH="$HOME/world/trees/root/src"
  copy_generated_docs_to_shopify_dev

  echo "✓ Build complete at $(date +%H:%M:%S)"
}

# Check for fswatch before building
if ! command -v fswatch &> /dev/null; then
  echo "Error: fswatch is required for watch mode"
  echo "Install it with: brew install fswatch"
  exit 1
fi

# Initial build
build_docs

echo ""
echo "Watching for changes in $DOCS_PATH/staticPages/*.doc.ts..."
echo "Press Ctrl+C to stop"
echo ""

fswatch -o $DOCS_PATH/staticPages/*.doc.ts | while read f; do
  build_docs
done
