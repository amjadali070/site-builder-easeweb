import path from 'path'
import bundle from './bundle'

const TESTING = process.env.NODE_ENV === 'testing'

interface BuildConfig {
  sourcedir: string
  outdir: string
}

interface BuildOutput {
  path: string
  data: string | Buffer
}

export { default as codegen } from './codegen'

export const build = async function (options: BuildConfig): Promise<BuildOutput[]> {
  const buildResult = await bundle({
    /** TODO: generate entrypoints instead */
    tsconfig: path.join(options.sourcedir, 'tsconfig.json'),
    entryPoints: [path.join(options.sourcedir, 'index.tsx')],
    outdir: '/'
  })

  // path will start with '/' there
  const outputs = buildResult.outputFiles
  const css = outputs
    .filter(x => x.path.endsWith('.css'))
    .map(x => ({ ...x, path: path.join('/css', x.path.toLowerCase()) }))
  const js = outputs
    .filter(x => x.path.endsWith('.js'))
    .map(x => ({ ...x, path: path.join('/js', x.path.toLowerCase()) }))

  const results = []

  // Write files
  css.forEach(x =>
    results.push({
      path: path.join(options.outdir, x.path),
      data: x.text
    })
  )

  js.forEach(x =>
    results.push({
      path: path.join(options.outdir, x.path),
      data: x.text
    })
  )

  results.push({
    path: path.join(options.outdir, 'index.html'),
    data: generateHTML(
      css.map(x => x.path),
      js.map(x => x.path)
    )
  })

  return results
}

function generateHTML(css: string[], js: string[]) {
  const suffix = TESTING ? 'development.js' : 'production.min.js'

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script crossorigin src="https://unpkg.com/react@17/umd/react.${suffix}"></script>
  <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.${suffix}"></script>
  ${css.map(x => `<link rel="stylesheet" href="${x}"/>\n`)}
</head>
<body>
  <div id="root"></div>
  ${js.map(x => `<script src="${x}"></script>\n`)}
</body>
</html>
`
}
