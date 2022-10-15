import { stringify } from 'querystring'
import { useState } from 'react'
import RGL, { WidthProvider } from 'react-grid-layout'

import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'

const ReactGridLayout = WidthProvider(RGL)

const Dashboard: React.FC<{}> = () => {
  const [layout, _] = useState<RGL.Layout[]>([
    { w: 6, h: 24, x: 0, y: 0, i: '0' },
    { w: 3, h: 7, x: 6, y: 17, i: '1' },
    { w: 6, h: 9, x: 6, y: 0, i: '2' },
    { w: 3, h: 8, x: 9, y: 9, i: '3' },
    { w: 3, h: 8, x: 6, y: 9, i: '4' },
    { w: 3, h: 7, x: 9, y: 17, i: '5' },
  ])

  const [blocks, setBlocks] = useState<{ i: string; name: string }[]>([
    { i: '0', name: 'yes' },
    { i: '1', name: 'no' },
    { i: '2', name: 'iFrame' },
    { i: '3', name: 'Integration 2' },
    { i: '4', name: 'Integration' },
    { i: '5', name: 'pick' },
  ])

  return (
    <div className="select-none	">
      <ReactGridLayout
        layout={layout}
        rowHeight={30}
        cols={12}
        className="layout"
      >
        {blocks.map((block, i) => {
          return (
            <div key={i} className="border border-base-300 cursor-pointer p-2">
              <div className="flex justify-between ">
                <span className="text">{block.name}</span>
                <div>X</div>
              </div>
            </div>
          )
        })}
      </ReactGridLayout>
    </div>
  )
}

export default Dashboard
