# 1. Remove the old packages
yarn remove @shopify/retail-ui-extensions*

# 2. Upgrade React
yarn upgrade react@^18.2.0
yarn upgrade @types/react@^18.2.0

# 3. Install the new packages
yarn add @shopify/ui-extensions@2024.4
yarn add @shopify/ui-extensions-react@2024.4
