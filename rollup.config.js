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
  resolve({
    jsnext: true,
    main: true,
    browser: true,
  }),

  // commonjs plugin
  commonjs(),

  // eslint
  // eslint({
  //   exclude: [
  //     'src/styles/**',
  //   ],
  // }),

  // bundle logger
  bundleSize(),

  // vue
  vue({
    template: {
      isProduction,
      compilerOptions: { preserveWhitespace: false }
    },
    autoStyles: false,
    styleToImports: true,
    css: true,
  }),

  //babel
  buble({
    objectAssign: 'Object.assign'
  }),


  // postcss
  postcss({
    extensions: ['.css'],
    modules: true
  }),

  // url
  url({
    limit: 10 * 1024, // inline files < 10k, copy files > 10k
    include: ["**/*.svg"], // defaults to .svg, .png, .jpg and .gif files
    emitFiles: true // defaults to true
  }),
];

export default {
  external: ['vue', 'vuex', 'vue-types'],
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
