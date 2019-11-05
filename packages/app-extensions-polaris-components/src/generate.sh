#!/bin/bash
props="props.tsx"
touch $props

for d in */ ; do
  echo "------------------------"
  echo "$d"
  comp=${d/\//}
  # srcfile="$d/$comp.tsx"
  # code="`cat $srcfile`"

  # rm "$d/index.tsx"
  rm "$d/props.ts"
  # rm "$d/$comp.tsx"

  # compfile="$d/index.tsx"

  # touch $compfile
  # echo "import $comp from './$comp';" >>  $compfile
  # echo "import EditableProps from './props';" >> $compfile
  # echo "" >> $compfile
  # echo "export default $comp;" >> $compfile
  # echo "" >> $compfile
  # echo "export {" >> $compfile
  # echo "  EditableProps," >> $compfile
  # echo "};" >> $compfile

  propsfile="$d/props.ts"
  touch $propsfile
  echo "import {AppExtensionMinor} from '@shopify/polaris-icons';" >> $propsfile
  echo "" >> $propsfile
  echo "export default {" >> $propsfile
  echo "  componentType: '$comp'," >> $propsfile
  echo "  icon: AppExtensionMinor," >> $propsfile
  echo "  editableProps: {}," >> $propsfile
  echo "};" >> $propsfile

  # touch $srcfile
  # echo "" >> $compfile

  # echo "export {default as $comp} from './$comp/props';" >> $props

  ls $d

done
