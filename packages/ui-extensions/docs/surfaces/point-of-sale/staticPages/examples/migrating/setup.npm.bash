# 1. Remove the old packages
npm uninstall @shopify/retail-ui-extensions*

# 2. Upgrade React
npm update react@^18.2.0
npm update @types/react@^18.2.0

# 3. Install the new packages
npm install @shopify/ui-extensions@2024.4
npm install @shopify/ui-extensions-react@2024.4
