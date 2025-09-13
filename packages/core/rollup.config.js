import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import os from 'os';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.ts',
  external: ['@rumious/core'],
  output: {
    file: './dist/index.js',
    format: 'esm',
    sourcemap: !isProduction,
  },
  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),
    isProduction &&
      terser({
        maxWorkers: os.cpus().length || 1,
      }),
  ],
};
