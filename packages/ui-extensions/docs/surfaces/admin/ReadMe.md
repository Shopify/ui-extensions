# create-doc-files.sh

A utility script to scaffold documentation files for UI components in the ui-extensions package.

## Usage

```bash
./create-doc-files.sh [-t type] component_name1 [component_name2 ...]
```

### Options

- `-t`: Specifies the type of documentation to create (optional)
  - Valid values: `components` or `api`
  - Default: `components`

### Arguments

- `component_name1`: Name of the component to document (required)
- `component_name2 ...`: Additional component names (optional)

### Examples

# Create documentation for a single component

```bash
./create-doc-files.sh Button
```

# Create documentation for multiple components

```bash
./create-doc-files.sh Button Card
```

# Create API documentation

```bash
./create-doc-files.sh -t api Toast
```

# Create multiple API docs

```bash
./create-doc-files.sh -t api Modal Toast
```

### Output

For each component, the script creates:

1. A component directory at `packages/ui-extensions/src/surfaces/admin/{type}/{componentName}/`
2. An examples directory containing:
   - A TypeScript example (`basic-{lowercase-name}.example.ts`)
   - A TSX/Preact example (`basic-{lowercase-name}.example.tsx`)
3. A documentation file (`{ComponentName}.doc.ts`) with a basic template including:
   - Component metadata
   - Description placeholder
   - Example code references
   - Category and subcategory settings

The script will skip creating files that already exist to prevent overwriting existing documentation.
