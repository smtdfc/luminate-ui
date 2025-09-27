# Luminate UI

Luminate UI is a modular, modern front-end system that provides a complete solution for building user interfaces with dynamic class management, CSS generation, and runtime helpers. It consists of multiple packages including the core runtime (`luminate-ui`), generator (`luminate-ui-generator`), and build plugins for Vite and Rollup.

---

## Features

- **Core runtime (`luminate-ui`)**: Provides APIs to manage classes, apply styles dynamically, and register themes.
- **Generator (`luminate-ui-generator`)**: Scan source code for `$ui()` calls and generate CSS assets.
- **Build plugins**: Vite and Rollup plugins to integrate Luminate UI into your build pipeline.
- **Dynamic class management**: Use `$ui()` to reference classes and have them automatically included in the generated CSS.
- **Theme support**: Register themes for runtime or generate theme-specific CSS.

---

## Installation

```bash
# Core and generator
npm install luminate-ui luminate-ui-generator
# or with yarn
yarn add luminate-ui luminate-ui-generator

# Vite plugin
npm install vite-plugin-luminate-ui --save-dev
# or
yarn add vite-plugin-luminate-ui -D

# Rollup plugin
npm install rollup-plugin-luminate-ui --save-dev
# or
yarn add rollup-plugin-luminate-ui -D
```

---

### Plugins (Vite / Rollup)

- Collect classes from source code.
- Emit CSS file as asset.
- Optionally inline CSS during dev.
- Fully configurable via plugin options.

---

## Usage

- Use `$ui()` in your code to reference classes.
- Generator or plugin will automatically collect these classes.
- During build, CSS will be emitted to a file, or optionally inlined during dev.
- Core runtime provides APIs to dynamically apply classes at runtime.

---

## Notes

- Luminate UI is modular: use only what you need (runtime, generator, plugins).
- Supports TypeScript, React, Vite, and Rollup environments.
- CSS generation can be theme-aware.

---

## License

MIT
