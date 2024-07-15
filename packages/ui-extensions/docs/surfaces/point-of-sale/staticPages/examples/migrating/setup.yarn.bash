# 1. Update Shopify CLI
yarn global add @shopify/cli@latest

# 2. Remove the old packages
yarn remove @shopify/retail-ui-extensions*

# 3. Upgrade React
yarn upgrade react@^18.2.0
yarn upgrade @types/react@^18.2.0

# 4. Install the new packages
yarn add @shopify/ui-extensions@2024.4
yarn add @shopify/ui-extensions-react@2024.4
