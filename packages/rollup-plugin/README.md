# rollup-plugin-neon-ui

A Rollup plugin to automatically extract and generate CSS from your components using [Neon UI](https://github.com/smtdfc/neon-ui).

It scans your `.ts`, `.tsx`, `.js`, `.jsx` files, collects all classes, and emits a CSS file as an asset.

---

## Features

- Works with TypeScript, TSX, JSX, and JS files.
- Collects all classes using `neon-ui-generator`.
- Generates a single CSS file during build.
- Fully configurable via plugin options.

---

## Installation

```bash
npm install --save-dev rollup-plugin-neon-ui neon-ui-generator
# or
yarn add -D rollup-plugin-neon-ui neon-ui-generator
```

---

## Usage

### Rollup Configuration

```ts
// rollup.config.ts
import neonUIPlugin from './rollup-plugin-neon-ui';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
  },
  plugins: [
    neonUIPlugin({
      output: 'styles.css', // CSS file output name, default is 'index.css'
      config: { theme: 'dark' }, // optional Neon UI config
    }),
  ],
};
```

### Example Component

```tsx
// App.tsx
import React from 'react';

export default function App() {
  return <div>{$ui('container')}</div>;
}
```

After building, the plugin will generate a `styles.css` with the collected classes from your components.

---

## Plugin Options

| Option   | Type              | Default       | Description                                |
| -------- | ----------------- | ------------- | ------------------------------------------ |
| `output` | `string`          | `'index.css'` | Name of the CSS file to emit.              |
| `config` | `Partial<Config>` | `{}`          | Optional config object to pass to Neon UI. |

---

## How It Works

1. **Scan**: The plugin scans your source files for `$ui()` calls using `neon-ui-generator`.
2. **Collect**: All class names are collected into an internal array.
3. **Generate**: During `generateBundle`, it calls `generate(classes, config)` from Neon UI and emits a CSS file as an asset.

---

## Notes

- Works seamlessly in **production** build.
- Supports `.ts`, `.tsx`, `.js`, `.jsx` file types by default.
- Can be extended to support incremental builds or HMR with additional hooks.

---

## License

MIT
