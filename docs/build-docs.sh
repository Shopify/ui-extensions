# Validate surface argument
surface="$1"

echo "surface: $surface"

if [ "$surface" = "admin" ] || [ "$surface" = "checkout" ]; then
  continue
else
  echo "ERR: No surface argument provided. Please provide a surface argument (admin or checkout)."
  exit 1
fi

COMPILE_DOCS="yarn tsc --project docs/tsconfig.docs.json --types react --moduleResolution node  --target esNext  --module CommonJS && generate-docs --input ./packages/ui-extensions/src/surfaces/${surface}/components/* --typesInput ./packages/ui-extensions/src --output ./docs/generated && rm -rf ./packages/ui-extensions/src/surfaces/${surface}/components/**/*.doc.js"
# COMPILE_DOCS="yarn tsc --project docs/tsconfig.docs.json --types react --moduleResolution node  --target esNext  --module CommonJS && generate-docs --overridePath ./docs/typeOverride.json --input ./src  --output ./docs/generated && rm -rf src/**/*.doc.js src/*.doc.js"
COMPILE_STATIC_PAGES="yarn tsc docs/staticPages/*.doc.ts --types react --moduleResolution node  --target esNext  --module CommonJS && generate-docs --isLandingPage --input ./docs/staticPages --output ./docs/generated && rm -rf docs/staticPages/*.doc.js"

if [ "$1" = "isTest" ];
then
COMPILE_DOCS="yarn tsc --project docs/tsconfig.docs.json --types react --moduleResolution node  --target esNext  --module CommonJS && generate-docs --overridePath ./docs/typeOverride.json --input ./src --output ./docs/temp && rm -rf src/**/*.doc.js src/*.doc.js"
COMPILE_STATIC_PAGES="yarn tsc docs/staticPages/*.doc.ts --types react --moduleResolution node  --target esNext  --module CommonJS && generate-docs --isLandingPage --input ./docs/staticPages  --output ./docs/temp && rm -rf docs/staticPages/*.doc.js"
fi

eval $COMPILE_DOCS
eval $COMPILE_STATIC_PAGES
