import vue from 'rollup-plugin-vue';
import url from 'rollup-plugin-url'
import postcss from 'rollup-plugin-postcss';
import buble from 'rollup-plugin-buble';
import eslint from 'rollup-plugin-eslint';
import bundleSize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'

import pkg from './package.json';

const isProduction = process.env.NODE_ENV === `production`
const isDevelopment = process.env.NODE_ENV === `development`

const plugins = [
  // node resolve
  resolve(),

  // commonjs plugin
  commonjs(),

  // eslint
  eslint(),

  // bundle logger
  bundleSize(),

  // vue
  vue({
    template: {
      isProduction,
      compilerOptions: { preserveWhitespace: false }
    },
    css: true,
  }),

  //babel
  buble({
    objectAssign: 'Object.assign'
  }),

  // postcss
  postcss({
    modules: true
  }),

  // url
  url(),
];

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: isDevelopment
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: isDevelopment
    }
  ],
  plugins,
};


// if(isProduction) {
//   config.plugins.push(
//     replace({
//       'process.env.NODE_ENV': JSON.stringify('production')
//     })
//   )
//   config.plugins.push(uglify())
// }

// if (isDevelopment) {
//   config.plugins.push(livereload())
//   )
// }
