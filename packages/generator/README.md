# luminate-ui-generator

A small utility to scan your source code for `$ui()` calls and generate CSS classes. Can be used standalone or in conjunction with Rollup/Vite plugins.

---

## Features

- Scan `.ts`, `.tsx`, `.js`, `.jsx` files for `$ui()` usage.
- Collect class names and generate a CSS file.
- Support optional configuration such as class prefix or theme.
- Can be integrated into Rollup or Vite plugins.

---

## Installation

```bash
npm install --save-dev luminate-ui-generator
# or
yarn add -D luminate-ui-generator
```

---

## Usage

### Scanning and Generating CSS

```ts
import { scan, generate, Config } from 'luminate-ui-generator';

const source = `
const label = $ui("label");
const btn = $ui("btn");
`;

// Scan source code
const { classes } = scan(source);

// Optional configuration
const config: Config = {};

// Generate CSS
const css = generate(classes, config);
console.log(css);
```

---

## API

### `scan(source: string)`

- **Parameters:** `source` - the source code string to scan.
- **Returns:** `ScanResult` containing:

  - `classes: string[]` - collected class names.
  - `code: string` - transformed code (optional, currently unchanged).

### `generate(classes: string[], config?: Config)`

- **Parameters:**

  - `classes` - array of class names collected from scan.
  - `config` - optional configuration object:

    - `prefix?: string` - class prefix.
    - `theme?: 'light' | 'dark'` - theme for generated CSS.

- **Returns:** a string containing generated CSS.

---

## Notes

- Standalone generator can be used in scripts or build pipelines.
- Fully compatible with Rollup and Vite plugins to produce CSS assets.
- Supports incremental use by feeding new classes into `generate()` as needed.

---

## License

MIT
