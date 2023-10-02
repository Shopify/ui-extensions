# This script generates the default example files for all targets.
# This is useful for regenerating all the default examples for existing targets.

# Usage: /bin/bash ./packages/ui-extensions/docs/surfaces/checkout/generate-target-examples.sh

STR_REPL=".doc.ts"

for FILE in packages/ui-extensions/docs/surfaces/checkout/reference/targets/*.doc.ts; do

  FILENAME=$(basename -a $FILE)
  /bin/bash packages/ui-extensions/docs/surfaces/checkout/generate-target-example.sh $(echo $FILENAME | sed "s/$STR_REPL//g")

done

