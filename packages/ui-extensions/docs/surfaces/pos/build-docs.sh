# your_reference_name is the name in your config.json with dashes as underscores.
# your-reference-name is the name in your config.json file downcased
if [ -n "$SPIN" ]; then
  if [ -n "$SPIN_SHOPIFY_DEV_SERVICE_FQDN" ]; then
    cp ./docs/generated/* ~/src/github.com/Shopify/shopify-dev/db/data/docs/templated_apis/pos_ui_extensions/
    cp ./docs/screenshots/* ~/src/github.com/Shopify/shopify-dev/app/assets/images/templated-apis-screenshots/pos_ui_extensions/
    cd ~/src/github.com/Shopify/shopify-dev
    restart
  else
    echo "If you include shopify-dev in your Spin constellation, this will automatically copy ./docs/generated to shopify-dev"
  fi
else
  echo "Not copying docs to shopify-dev because we're not in Spin"
fi