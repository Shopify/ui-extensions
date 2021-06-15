#!/bin/sh

. "$PWD/scripts/consumer-helper.sh"

usage="
Usage: $(basename "$0") <target_project>

Restore a project by removing UI Extension packages and running \`yarn install\`

 <target_project>  Target project relative to Shopify root \`src/github.com/shopify\`, i.e. \`web\` or \`checkout-web\`

 Options:
  -h, --help       Show this help text
  -d, --debug      Output messages for debugging"

# Get Options
while [[ "$#" > 0 ]]; do case $1 in
  -h|--help) echo "$usage"; exit;;
  -d|--debug) debug=1; shift;;
esac; shift; done

restore_consumer