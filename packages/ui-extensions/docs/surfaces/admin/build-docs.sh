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
