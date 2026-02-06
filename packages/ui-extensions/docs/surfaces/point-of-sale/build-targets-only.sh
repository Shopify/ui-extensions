#!/bin/bash

API_VERSION=$1
DOCS_PATH=docs/surfaces/point-of-sale

fail_and_exit() {
  echo "** Failed to generate targets.json"
  exit $1
}

if [ -z $API_VERSION ]
then
  API_VERSION="unstable"
  echo "Building targets.json for 'unstable' point-of-sale API. You can add a calver version argument (e.g. 'yarn docs:point-of-sale 2024-04') to generate for a stable version."
else
  echo "Building targets.json for '$API_VERSION' point-of-sale API."
fi

# Generate targets.json
echo "Generating targets.json..."
node $DOCS_PATH/build-docs-targets-json.mjs $API_VERSION
targets_exit=$?
if [ $targets_exit -ne 0 ]; then
  fail_and_exit $targets_exit
fi

# Copy targets.json to shopify-dev
if [ -d ../../../shopify-dev ]; then
  echo "Copying targets.json to shopify-dev..."
  mkdir -p ../../../shopify-dev/db/data/docs/templated_apis/point_of_sale_extensions/$API_VERSION
  cp ./$DOCS_PATH/generated/targets.json ../../../shopify-dev/db/data/docs/templated_apis/point_of_sale_extensions/$API_VERSION/

  if [ -n "$SPIN_SHOPIFY_DEV_SERVICE_FQDN" ]; then
    echo "Targets: https://$SPIN_SHOPIFY_DEV_SERVICE_FQDN/docs/api/point-of-sale-extensions/$API_VERSION/targets.json"
  else
    echo "✓ targets.json copied to shopify-dev"
  fi
else
  echo "Not copying targets.json to shopify-dev because it was not found at ../../../shopify-dev."
  echo "✓ targets.json generated at ./$DOCS_PATH/generated/targets.json"
fi
