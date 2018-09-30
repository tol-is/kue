import path from 'path';
import babel from 'rollup-plugin-babel'

import vue from 'rollup-plugin-vue';
import url from 'rollup-plugin-url'
import postcss from 'rollup-plugin-postcss';
// import babel from 'rollup-plugin-buble';
import eslint from 'rollup-plugin-eslint';
import bundleSize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'

import cssimport from 'postcss-import';
import presetEnv from 'postcss-preset-env';

import pkg from './package.json';

const isProduction = process.env.NODE_ENV === `production`;
const isDevelopment = process.env.NODE_ENV === `development`;

const src = path.resolve(__dirname, '..', 'src');
const root = path.resolve(__dirname, '../');

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


  // postcss
  postcss({
    extensions: ['.css'],
    modules: false,
    plugins: [
      cssimport({
        root: root,
        path: [
          src,
        ],
      }),
      presetEnv({
        stage    : 1,
          features : {
            'nesting-rules': true,
          },
          browsers : [
            '>1%',
            'last 4 versions',
          ],
      }),
    ]
  }),


  //babel
  // buble({
  //   objectAssign: 'Object.assign'
  // }),
  babel({
    exclude: ['node_modules/**', 'src/styles/**']
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
