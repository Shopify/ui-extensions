# Font color
ORANGE='\033[1;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
NONE='\033[0m'

target=$1

function version_bump {
  # set packages we don't want to version bump private
  if [ ! -z "$target" ]; then echo "🔒 marking packages not bumping as private"; fi
  for file in packages/*/package.json
  do
    if [[ $file != *$target* && $file != "packages/ui-extensions"* ]]; then
      # echo "marking file private $ORANGE$file$NONE"
      node -e "let pkg=require('./${file}'); pkg.private=true; require('fs').writeFileSync('./${file}', JSON.stringify(pkg, null, '  ') + '\n')"
    fi
  done

  # lerna version --no-push --no-private --include-merged-tags
  # lerna version below is for testing purposes
  lerna version --no-push --no-git-tag-version --no-private

  # unset packages private
  if [ ! -z "$target" ]; then echo "🔓 unmarking private packages not bumped"; fi
  for file in packages/*/package.json
  do
    if [[ $file != *$target* && $file != "packages/ui-extensions"* ]]; then
      # echo "unmarking file private $ORANGE$file$NONE"
      node -e "let pkg=require('./${file}'); pkg.private=undefined; require('fs').writeFileSync('./${file}', JSON.stringify(pkg, null, '  ') + '\n')"
    fi
  done
}

version_bump
