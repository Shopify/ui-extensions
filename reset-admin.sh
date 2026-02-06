#!/bin/bash
# scripts/reset-and-rebuild-docs.sh

SHOPIFY_DEV_PATH="${SHOPIFY_DEV_PATH:-$HOME/src/github.com/Shopify/shopify-dev/areas/platforms/shopify-dev}"

echo "Resetting generated docs in shopify-dev..."
cd "$SHOPIFY_DEV_PATH"
git checkout -- db/data/docs/templated_apis/

echo "Rebuilding docs..."
cd -
cd packages/ui-extensions
yarn docs:admin 2026-01

echo "Done!"