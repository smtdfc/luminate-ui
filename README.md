# Neon UI

Neon UI is a modular, modern front-end system that provides a complete solution for building user interfaces with dynamic class management, CSS generation, and runtime helpers. It consists of multiple packages including the core runtime (`neon-ui`), generator (`neon-ui-generator`), and build plugins for Vite and Rollup.

---

## Features

- **Core runtime (`neon-ui`)**: Provides APIs to manage classes, apply styles dynamically, and register themes.
- **Generator (`neon-ui-generator`)**: Scan source code for `$ui()` calls and generate CSS assets.
- **Build plugins**: Vite and Rollup plugins to integrate Neon UI into your build pipeline.
- **Dynamic class management**: Use `$ui()` to reference classes and have them automatically included in the generated CSS.
- **Theme support**: Register themes for runtime or generate theme-specific CSS.

---

## Installation

```bash
# Core and generator
npm install neon-ui neon-ui-generator
# or with yarn
yarn add neon-ui neon-ui-generator

# Vite plugin
npm install vite-plugin-neon-ui --save-dev
# or
yarn add vite-plugin-neon-ui -D

# Rollup plugin
npm install rollup-plugin-neon-ui --save-dev
# or
yarn add rollup-plugin-neon-ui -D
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

- Neon UI is modular: use only what you need (runtime, generator, plugins).
- Supports TypeScript, React, Vite, and Rollup environments.
- CSS generation can be theme-aware.

---

## License

MIT
