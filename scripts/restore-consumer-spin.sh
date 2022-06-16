#!/bin/bash

. "$PWD/scripts/consumer-helper.sh"

usage="
Usage: $(basename "$0") <workspace short name>

Restore a project by removing UI Extension packages and running \`yarn install\`

 <workspace short name>  Target spin workspace short name, i.e. only enter \`web\` if your workspace is \`web.test.trish-ta.us.spin.dev\`

 Options:
  -h, --help       Show this help text
  -d, --debug      Output messages for debugging"

# Get Options
while [[ "$#" > 0 ]]; do case $1 in
  -h|--help) echo "$usage"; exit;;
  -d|--debug) debug=1; shift;;
esac; shift; done

restore_consumer true
