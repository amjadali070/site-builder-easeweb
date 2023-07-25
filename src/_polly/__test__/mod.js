const fs = require('fs')
const path = require('path')
const { build, codegen } = require('@polly/bundler')
const { pages, website } = require('./mock/testcase.js')
const { PollyComponentPath } = require('@polly/components/component.path')

;(async () => {
  const source = path.join(__dirname, 'output/template')

  await fs.promises.mkdir(source, { recursive: true })
  await codegen({
    outdir: source,
    compiler: {
      // paths: {
      //   '@polly/components/*': [path.join(__dirname, '../../components/dist/*')]
      // }
    },
    componentMap: PollyComponentPath,
    pages,
    website,
  })

  const outputs = await build({
    sourcedir: source,
    outdir: 'output/dist',
  })

  console.log(outputs.map(x => x.path))
  outputs.forEach(x => {
    const p = path.join(__dirname, x.path)
    fs.mkdirSync(path.dirname(p), { recursive: true })
    fs.writeFileSync(p, x.data)
  })
})()
