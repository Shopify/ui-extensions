# Validate surface argument
surface="$1"

echo "surface: $surface"

# if [ "$surface" = "admin" ] || [ "$surface" = "checkout" ]; then
#   continue
# else
#   echo "ERR: No surface argument provided. Please provide a surface argument (admin or checkout)."
#   exit 1
# fi

COMPILE_COMPONENT_DOCS="yarn tsc --project docs/${surface}/tsconfig.docs.json --types react --moduleResolution node  --target esNext  --module CommonJS && generate-docs --input ./packages/ui-extensions/src/surfaces/${surface}/components/* --typesInput ./packages/ui-extensions/src --output ./docs/${surface}/generated && rm -rf ./packages/ui-extensions/src/surfaces/${surface}/components/**/*.doc.js"
COMPILE_API_DOCS="yarn tsc --project docs/${surface}/tsconfig.docs.json --types react --moduleResolution node  --target esNext  --module CommonJS && generate-docs --input ./packages/ui-extensions/src/surfaces/${surface}/components/* --typesInput ./packages/ui-extensions/src --output ./docs/${surface}/generated && rm -rf ./packages/ui-extensions/src/surfaces/${surface}/components/**/*.doc.js"
COMPILE_STATIC_PAGES="yarn tsc docs/${surface}/staticPages/*.doc.ts --types react --moduleResolution node  --target esNext  --module CommonJS && generate-docs --isLandingPage --input ./docs/staticPages --output ./docs/${surface}/generated && rm -rf docs/${surface}/staticPages/*.doc.js"


eval $COMPILE_COMPONENT_DOCS
eval $COMPILE_API_DOCS
eval $COMPILE_STATIC_PAGES
