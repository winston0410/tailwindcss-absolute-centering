const {
  terser
} = require('rollup-plugin-terser')
const {
  nodeResolve
} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')

export default [{
  input: './src/index.js',
  external: ['tailwindcss', 'tailwindcss/plugin'],
  output: [{
    exports: 'auto',
    file: 'dist/esm/index.mjs.js',
    format: 'esm',
    plugins: [
      (process.env.NODE_ENV === 'production' && terser({
        compress: {
          drop_console: true
        },
        output: {
          comments: false
        },
        ecma: 2019
      }))
    ]
  },
  {
    exports: 'auto',
    file: 'dist/cjs/index.cjs.js',
    format: 'cjs',
    plugins: [
      (process.env.NODE_ENV === 'production' && terser({
        compress: {
          drop_console: true
        },
        output: {
          comments: false
        },
        ecma: 2019
      }))
    ]
  }
  ],
  plugins: [
    nodeResolve({}),
    commonjs({
      include: ['./src/**', 'node_modules/**']
    })
  ]
}]
