#!/bin/bash

# Check if at least one component name is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 [-t type] component_name1 [component_name2 ...]"
    echo "  -t: Type of documentation (api or components, default: components)"
    exit 1
fi

# Parse arguments
type="components"  # default value
while getopts "t:" opt; do
    case $opt in
        t) type="$OPTARG"
           if [[ "$type" != "components" && "$type" != "api" ]]; then
               echo "Error: type must be either 'components' or 'api'"
               exit 1
           fi
           ;;
        \?) echo "Invalid option -$OPTARG"
            exit 1
            ;;
    esac
done
shift $((OPTIND-1))


echo "Scaffolding ${type} docs for admin"

base_dir="./packages/ui-extensions/src/surfaces/admin/${type}"

for componentName in "$@"; do
    # Create component directory
    folder="${base_dir}/${componentName}"
    mkdir -p "$folder"

    examples_dir="${folder}/examples"
    mkdir -p "$examples_dir"
    
    docs_file="${folder}/${componentName}.doc.ts"
    lowercaseComponentName=$(echo "$componentName" | sed -E 's/([a-z])([A-Z])/\1-\2/g' | tr '[:upper:]' '[:lower:]')

    # Create HTML example file
    html_example="${examples_dir}/basic-${lowercaseComponentName}.example.html"
    if [ ! -f "$html_example" ]; then
        cat << EOF > "$html_example"
  <s-${lowercaseComponentName}></s-${lowercaseComponentName}>
EOF
        echo "Created TSX example file for ${componentName}"
    fi

    if [ ! -f "$docs_file" ]; then
        cat << EOF > "$docs_file"
import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: '${componentName}',
  description: '${componentName} is used to ...',
  requires: '',
  thumbnail: '${lowercaseComponentName}-thumbnail.png',
  isVisualComponent: $(if [ "$type" = "components" ]; then echo "true"; else echo "false"; fi),
  type: '',
  definitions: [
    {
      title: '${componentName}',
      description: '',
      type: '${componentName}',
    },
  ],
  category: '$(if [ "$type" = "components" ]; then echo "Components"; else echo "API"; fi)',
  subCategory: '$(if [ "$type" = "components" ]; then echo "Feedback"; else echo ""; fi)',
  defaultExample: {
    image: '${lowercaseComponentName}-default.png',
    codeblock: {
      title: 'Default Example',
      tabs: [
        {
          title: 'JSX',
          code: './examples/default.html',
          language: 'jsx',
        },
        {
          title: 'Preview',
          code: './examples/default.html', // This gets updated in build-ab-docs.sh
          language: 'preview', // Do not edit. This is required for Live Previews
        },
      ],
    },
  },
  related: [],
};

export default data;
EOF
        echo "Created documentation file for ${componentName}"
    else
        echo "Documentation file for ${componentName} already exists"
    fi
done
