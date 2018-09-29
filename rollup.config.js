import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
}




// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
// import {uglify} from 'rollup-plugin-uglify';
// import obfuscatorPlugin from 'rollup-plugin-javascript-obfuscator';
// import pkg from './package.json';

// // entry path
// const entry = 'src/index.js';

// // get names of package.json dependencies in an array
// // e.g. ['gsap', 'lodash']
// const dependencies = Object.entries(pkg.dependencies).map((d) => d[0]);

// export default [
// 	// browser-friendly UMD build
// 	{
// 		input  : entry,
// 		output : {
// 			name   : pgk.name,
// 			file   : pkg.browser,
// 			format : 'umd',
// 		},
// 		plugins : [
// 			resolve(), // resolve dependencies
// 			commonjs(), // convert dependencies to es module
//       uglify(), // uglify
//       // obfuscatorPlugin()
// 		]
// 	},
//   // ES module (for bundlers) build.
//   {
//     input  : entry,
//     output : {
//       name   : pgk.name,
//       file   : pkg.main,
//       format : 'es',
//     },
//     external: dependencies,
//   }
// ];
