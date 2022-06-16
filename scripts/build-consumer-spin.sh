#!/bin/bash

. "$PWD/scripts/consumer-helper.sh"

usage="
Usage: $(basename "$0") <workspace short name> [<package_name>]

Build UI Extensions packages into a project

 <workspace short name>  Target spin workspace short name, i.e. only enter \`web\` if your workspace is \`web.test.trish-ta.us.spin.dev\`
 <package_name>    Space separated package names
                   default: ${AVAILABLE_PACKAGES[@]}

 Options:
  -h, --help       Show this help text
  -d, --debug      Output messages for debugging"

# Get Options
options_counter=0
while [[ $# > 0 ]]; do
  options_counter=$(( options_counter+1 ))
  if (( $options_counter >= 3 )) && [[ $1 != '-'* ]]; then
    packageName="$packageName $1"; shift
  fi
  case $1 in
    -h|--help) echo "$usage"; exit;;
    -d|--debug) debug=1; shift;;
  esac
  shift
done

build_consumer true
