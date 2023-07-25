import * as esbuild from 'esbuild'

const TESTING = process.env.NODE_ENV === 'testing'

export default function (config: any) {
  const { tsconfig, entryPoints, outdir } = config

  return esbuild.build({
    bundle: true,
    tsconfig,
    inject: [
      /** This helps to minify _jsx identifier */
      // path.join(__dirname, '../shim/jsx.ts')
    ],
    external: [],
    loader: {},

    // minify configs
    minifySyntax: !TESTING,
    minifyIdentifiers: !TESTING,
    minifyWhitespace: !TESTING,

    // output configs
    write: false,
    entryPoints,
    outdir,
    entryNames: '[dir]/[name]-[hash]',

    // format configs
    format: 'iife',
    platform: 'browser',
    target: ['es6']
    // jsxFactory: '_jsx'
  })
}
