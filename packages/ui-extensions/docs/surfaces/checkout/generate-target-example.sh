# This script generates the default example files for a given target based off a template which matches the target's name.
# This is useful for adding new targets to the docs, or updating the default examples for existing targets.

# Usage: /bin/bash ./packages/ui-extensions/docs/surfaces/checkout/generate-target-example.sh <target>

TARGET=$1
EXAMPLE_PATH=./packages/ui-extensions/docs/surfaces/checkout/reference/examples

case $TARGET in

  *".cart-line-item."*)
    TEMPLATE="cart-line-item-target.example.template"
    ;;

  *".shipping-option-item."*)
    TEMPLATE="shipping-option-item-target.example.template"
    ;;

  *".pickup-location-list.")
    TEMPLATE="pickup-location-list-target.example.template"
    ;;

  *".pickup-point-list.")
    TEMPLATE="pickup-point-list-target.example.template"
    ;;

  *"purchase.checkout.shipping-option-list."*)
    TEMPLATE="shipping-option-list-target.example.template"
    ;;

  *"purchase.checkout"*)
    TEMPLATE="checkout-target.example.template"
    ;;

  *"purchase.thank-you"*)
    TEMPLATE="standard-target.example.template"
    ;;

  *)
    echo "No template found for '$TARGET'."
    exit 1;
    ;;

esac

mkdir -p $EXAMPLE_PATH/$TARGET
cp $EXAMPLE_PATH/templates/$TEMPLATE.tsx $EXAMPLE_PATH/$TARGET/default.example.tsx
cp $EXAMPLE_PATH/templates/$TEMPLATE.ts $EXAMPLE_PATH/$TARGET/default.example.ts

sed -i "s/##TARGET##/$TARGET/gi" $EXAMPLE_PATH/$TARGET/default.example.tsx
sed -i "s/##TARGET##/$TARGET/gi" $EXAMPLE_PATH/$TARGET/default.example.ts

touch $EXAMPLE_PATH/$TARGET/README.md
cat <<EOT > $EXAMPLE_PATH/$TARGET/README.md
# Auto-generated files

The \`default.example.tsx\` and \`default.example.ts\` files for _this_ extension target are generated from the template \`$TEMPLATE.tsx\` and \`$TEMPLATE.ts\` files.

To update the generated files, run \`/bin/bash ./packages/ui-extensions/docs/surfaces/checkout/generate-target-example.sh  $TARGET\`.

You can also run \`/bin/bash ./packages/ui-extensions/docs/surfaces/checkout/generate-target-examples.sh\` to re-generate all the default examples across documented targets.
Documented targets can be found in \`./packages/ui-extensions/docs/surfaces/checkout/reference/targets\`.
EOT

echo "---"
echo "Generated $EXAMPLE_PATH/$TARGET/default.example.tsx"
echo "Generated $EXAMPLE_PATH/$TARGET/default.example.ts"

