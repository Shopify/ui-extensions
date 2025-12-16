# Generate POS Targets JSON

This script generates a JSON file that maps Point of Sale extension targets to their available components and APIs.

## Usage

Run the script from the project root:

```bash
node scripts/generate-pos-targets-json.js
```

## Output

The script generates a JSON file at:
```
packages/ui-extensions/src/surfaces/point-of-sale/generated-targets.json
```

## Generated JSON Structure

The output JSON has the following structure:

```json
{
  "extension-target-name": {
    "components": ["Component1", "Component2", ...],
    "apis": ["Api1", "Api2", ...]
  },
  "ApiName": {
    "targets": ["target1", "target2", ...]
  },
  "ComponentName": {
    "targets": ["target1", "target2", ...]
  }
}
```

The generated file contains:
1. **Extension Target Mappings**: Each extension target (e.g., `pos.home.tile.render`) maps to its available components and APIs
2. **API Reverse Mappings**: Each API (e.g., `ActionApi`) maps to the list of targets that use it
3. **Component Reverse Mappings**: Each Component (e.g., `Tile`) maps to the list of targets that use it

### Example

#### Extension Target Mappings
```json
{
  "pos.home.tile.render": {
    "components": ["Tile"],
    "apis": [
      "ActionApi",
      "CartApi",
      "ConnectivityApi",
      "DeviceApi",
      "LocaleApi",
      "ProductSearchApi",
      "SessionApi",
      "SmartGridApi",
      "StandardApi",
      "ToastApi"
    ]
  },
  "pos.home.modal.render": {
    "components": ["ActionItem", "Badge", "Banner", ...],
    "apis": [
      "CartApi",
      "ConnectivityApi",
      "DeviceApi",
      "LocaleApi",
      "NavigationApi",
      "ProductSearchApi",
      "ScannerApi",
      "SessionApi",
      "StandardApi",
      "ToastApi"
    ]
  }
}
```

#### API Reverse Mappings
```json
{
  "ActionApi": {
    "targets": [
      "pos.home.tile.render",
      "pos.purchase.post.action.menu-item.render"
    ]
  },
  "StandardApi": {
    "targets": [
      "pos.home.modal.render",
      "pos.home.tile.render",
      "pos.purchase.post.action.menu-item.render",
      "pos.purchase.post.action.render"
    ]
  }
}
```

#### Component Reverse Mappings
```json
{
  "Tile": {
    "targets": [
      "pos.home.tile.render"
    ]
  },
  "ActionItem": {
    "targets": [
      "pos.home.modal.render",
      "pos.purchase.post.action.menu-item.render",
      "pos.purchase.post.action.render"
    ]
  }
}
```

Note how `StandardApi` includes all its nested APIs (`LocaleApi`, `ToastApi`, `SessionApi`, `ProductSearchApi`, `DeviceApi`, `ConnectivityApi`) in addition to the explicitly declared APIs.

## How it Works

The script:

1. Reads the `targets.ts` file to extract the `ExtensionTargets` interface
2. Parses each extension target's `RenderExtension` type definition
3. Extracts the API types from the intersection types (e.g., `StandardApi & CartApi & ...`)
4. **Recursively resolves nested APIs** - when it encounters an API like `StandardApi<'pos.home.tile.render'>`, it:
   - Reads the API definition file (e.g., `api/standard/standard-api.ts`)
   - Extracts any nested APIs from that definition (e.g., `LocaleApi`, `ToastApi`, `SessionApi`, etc.)
   - Includes both the parent API and all nested APIs in the final output
5. Extracts the component types by resolving type aliases:
   - `SmartGridComponents` → components with `Tile`
   - `ActionComponents` → components with `ActionItem`
   - `BasicComponents` → all components except `Tile`
6. **Creates reverse mappings** for quick lookups:
   - For each API, lists all targets that use it
   - For each Component, lists all targets that use it
7. Generates a single JSON file with both forward mappings (target → APIs/components) and reverse mappings (API/component → targets)

### Example of Nested API Resolution

For `StandardApi`, which is defined as:
```typescript
export type StandardApi<T> = {[key: string]: any} & {
  extensionPoint: T;
} & LocaleApi &
  ToastApi &
  SessionApi &
  ProductSearchApi &
  DeviceApi &
  ConnectivityApi;
```

The script will include all of these APIs in the output:
- `StandardApi` (the parent)
- `LocaleApi`, `ToastApi`, `SessionApi`, `ProductSearchApi`, `DeviceApi`, `ConnectivityApi` (nested)

### Reverse Mapping Benefits

The reverse mappings allow you to quickly answer questions like:
- "Which targets can use the `CartApi`?" → Look up `CartApi.targets`
- "Where can I use the `Button` component?" → Look up `Button.targets`

## Source File

The script parses: `packages/ui-extensions/src/surfaces/point-of-sale/extension-targets.ts`

The script reads components from: `packages/ui-extensions/src/surfaces/point-of-sale/components/targets/StandardComponents.ts`

