#!/bin/bash

# Validate surface argument
surface="$1"

echo "surface: $surface"

if [ "$surface" = "admin" ] || [ "$surface" = "checkout" ]; then
  echo "Scaffolding docs for ${surface}"
else
  echo "ERR: No surface argument provided. Please provide a surface argument (admin or checkout)."
  exit 1
fi

# Make this an input to the script
components_dir="src/surfaces/${surface}/components"
# components_dir="./packages/ui-extensions/src/surfaces/${surface}/components"

# components_dir="./packages/ui-extensions/src/surfaces/${surface}/api"

addExamples() {
    folder=$1
    if [ -d "${folder}/examples" ]; then
      example_folder_path="${folder}/examples"
      examples=("$example_folder_path"/*)

      if [ ${#examples[@]} -eq 1 ] && [[ ${examples[0]} == *"basic"* ]]; then
        echo ""
        return
      fi

constructed_string="examples: {
    description: '',
    examples: [
"
      for example_file in "${examples[@]}"; do
        example_name=$(basename "$example_file" ".example.tsx")
        # Skip files starting with "basic-"
        if [[ $example_name == basic-* ]]; then
          continue
        fi
        constructed_string+="      {
        description: 'TODO: add description',
        image: '${example_name}.png',
        codeblock: {
          tabs: [
            {
              title: 'Preact',
              code: '${example_file}',
              language: 'typescript',
            },
          ],
          title: 'TODO: add example title',
        },
      },"$'\n'
        done
        constructed_string+="    ],
  },"
      echo "$constructed_string"
    fi
}

for folder in "$components_dir"/*; do
    if [ -d "$folder" ]; then
        if [[ $folder == shared ]]; then
          continue
        fi
        componentName=$(basename "$folder")
        docs_file="${folder}/${componentName}.doc.ts"

                if [ ! -f "$docs_file" ]; then
          lowercaseComponentName=$(echo "$componentName" | tr '[:upper:]' '[:lower:]')
          cat > "$docs_file" << EOF
import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: '${componentName}',
  description: '${componentName} is used to ...',
  requires: '',
  thumbnail: '${lowercaseComponentName}-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: '${componentName}',
      description: '',
      type: '${componentName}',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: '${lowercaseComponentName}-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'JS',
          code: './examples/basic-${lowercaseComponentName}.example.ts',
          language: 'js',
        },
      ],
    },
  },
  $(addExamples "$folder")
  related: [],
};

export default data;
EOF
        fi
    fi
done
