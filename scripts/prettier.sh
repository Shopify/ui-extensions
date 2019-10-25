#!/bin/sh
files=$(git diff --cached --name-only --diff-filter=ACM "*.ts" "*.tsx" | tr '\n' ' ')
[ -z "$files" ] && exit 0

# Prettify all staged .js files
echo "$files" | xargs ./node_modules/.bin/prettier --write

# Add back the modified/prettified files to staging
echo "$files" | xargs git add

exit 0
