import fs from 'fs'
import path from 'path'

interface CodegenConfig {
  outdir: string
  /** Append to tsconfig.json `compilerOptions.paths` */
  compiler?: {
    paths?: {
      [key: string]: string[]
    }
  }
  componentMap: { [key: string]: string }
  pages: any[]
  website: {
    menu: {
      pages: {
        title: string
        url: string
        type: string
      }[]
      style: string
    }
    footer: any
  }
}

function footerStyleNumber(footer: string) {
  return footer.slice(-1)
}

export function getBlockWidth(columns: number) {
  const gap = '8px'

  if (columns === 4) {
    return '100%'
  }

  if (columns === 3) {
    return `calc(75% - ${gap})`
  }

  if (columns === 2) {
    return `calc(50% - ${gap})`
  }

  return `calc(25% - ${gap})`
}

/** TODO: dynamic */
export default async function codegen(options: CodegenConfig) {
  const { outdir, compiler, pages, componentMap, website } = options
  const menu = website?.menu
  const footer = website?.footer

  const tsconfig = {
    compilerOptions: {
      paths: {
        /** pollyfill for imports from module 'react' */
        react: [path.join(__dirname, '../shim/react.ts')],
        ...compiler?.paths,
      },
    },
  }
  await fs.promises.writeFile(path.join(outdir, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2))

  const data = `
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
  import '@polly/components/styles.css'
  import MenuBar from '@polly/components/MenuBar'
  import Footer1 from '@polly/components/Footer1'
  import Footer2 from '@polly/components/Footer2'
  import Footer3 from '@polly/components/Footer3'
  import Footer4 from '@polly/components/Footer4'
  import RenderSection from '@polly/components/sections'
  import RenderSection from '@polly/components/sections/Renderer/Renderer'
  ${pages
    .flatMap((page, x) =>
      page.blocks.map(
        (block: any, y: any) => `import Component${x}x${y} from "@polly/components/${componentMap[block.type]}"`,
      ),
    )
    .join('\n')}
  
  function App() {
    return (
      <Router>
        <Routes>
          ${pages
            .map(
              (page, x) => `
            <Route exact path="${page.path}" element={
              <>
                ${menu && `<MenuBar {...${JSON.stringify(menu)}} website={${JSON.stringify(website)}} />`}
  
                ${page.blocks
                  .map(
                    (block: any, y: any) => `
                    <>
                    ${
                      block.isSection
                        ? `<RenderSection section={${JSON.stringify(block)}} />`
                        : `
                    <div className="wrapper">
                      <div className="blocks">
                        <div className="md-blocks" {...${JSON.stringify({
                          style: {
                            width: getBlockWidth(block?.columns ?? 4),
                          },
                        })}}>
                          <Component${x}x${y} {...${JSON.stringify(block.props)}} />
                        </div>
                        <div className="sm-blocks">
                          <Component${x}x${y} {...${JSON.stringify(block.props)}} />
                        </div>
                      </div>
                    </div>
                    `
                    }
                    </>
                  `,
                  )
                  .join('')}
  
                ${footer && `<Footer${footerStyleNumber(footer.style)} {...{ ...${JSON.stringify(footer)} }} />`}
              </>
            }/>
          `,
            )
            .join('')}
        </Routes>
      </Router>
    )
  }
  
  var root = document.getElementById('root')
  ReactDOM.render(<App />, root)
  `

  await fs.promises.writeFile(path.join(outdir, 'index.tsx'), data)
}
