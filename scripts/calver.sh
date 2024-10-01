#!/bin/bash

# Get the current version from a package.json file
get_version() {
  grep -m1 '"version":' "$1" | awk -F'"' '{print $4}'
}

ui_version=$(get_version "packages/ui-extensions/package.json")
react_version=$(get_version "packages/ui-extensions-react/package.json")

create_new_version() {
  branch_name=$(git rev-parse --abbrev-ref HEAD)
  # Split the branch name into year and month
  IFS='-' read -r year month <<<"$branch_name"

  # Remove leading zero from month
  month=${month#0}

  echo "$year.$month.0"
}

increment_patch() {
  echo "$1" | awk -F. '{$NF = $NF + 1;}1' OFS=.
}

# Determine the new versions
if [ "$ui_version" = "0.0.0" ]; then
  new_version=$(create_new_version)
else
  new_version=$(increment_patch "$ui_version")
fi
if [ "$react_version" = "0.0.0" ]; then
  new_version_react=$(create_new_version)
else
  new_version_react=$(increment_patch "$react_version")
fi

update_version() {
  local package_file="$1"
  local changelog_file="$2"
  local version="$3"

  # Update package.json
  awk -v version="$version" '
    /"version":/ { gsub(/"version": "[^"]*"/, "\"version\": \"" version "\"") }
    /"peerDependencies"/, /}/ {
      if (/"@shopify\/ui-extensions":/) {
        gsub(/"@shopify\/ui-extensions": "[^"]*"/, "\"@shopify/ui-extensions\": \"" version "\"")
      }
    }
    /"devDependencies"/, /}/ {
      if (/"@shopify\/ui-extensions":/) {
        gsub(/"@shopify\/ui-extensions": "[^"]*"/, "\"@shopify/ui-extensions\": \"" version "\"")
      }
    }
    { print }
  ' "$package_file" >"${package_file}.tmp" && mv "${package_file}.tmp" "$package_file"

  # Update CHANGELOG.md
  awk -v version="$version" '
    /^## 0\.0\.0/ { sub(/^## 0\.0\.0/, "## " version); }
    { print }
  ' "$changelog_file" >"${changelog_file}.tmp" && mv "${changelog_file}.tmp" "$changelog_file"
}

# Update versions in all relevant files
update_version "packages/ui-extensions/package.json" "packages/ui-extensions/CHANGELOG.md" "$new_version"
update_version "packages/ui-extensions-react/package.json" "packages/ui-extensions-react/CHANGELOG.md" "$new_version_react"

echo "Version updated to $new_version"
