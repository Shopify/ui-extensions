#!/bin/sh

. "$PWD/scripts/consumer-helper.sh"

usage="
Usage: $(basename "$0") <workspace>

Restore a project by removing Argo packages and running \`yarn install\`

 <workspace>  Target spin workspace, i.e. \`web.test.trish-ta.us.spin.dev\`

 Options:
  -h, --help       Show this help text
  -d, --debug      Output messages for debugging"

# Get Options
while [[ "$#" > 0 ]]; do case $1 in
  -h|--help) echo "$usage"; exit;;
  -d|--debug) debug=1; shift;;
esac; shift; done

restore_consumer true