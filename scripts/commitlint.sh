#!/bin/sh

first_line=$(head -n 1 $@)

if [[ $first_line = "Publish" ]]; then
  exit 0
fi

./node_modules/.bin/commitlint --edit $@
