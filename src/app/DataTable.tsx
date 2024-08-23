import type { DataPoint } from './utils/data-point'
import type { FC } from 'react'

import { cn } from './components/utils'

export const DataTable: FC<{
  hilightTestDataPoints?: boolean
  dataPoints: DataPoint[]
  generateTableData: (dataPoints: DataPoint[]) => TableDataPoint[][]
}> = ({ dataPoints, hilightTestDataPoints = false, generateTableData }) => {
  const tableData = generateTableData(dataPoints)

  return (
    <div className="overflow-hidden rounded-md border border-slate-300">
      <table className="w-full table-fixed text-sm">
        <thead className="border-b border-slate-300">
          <tr className="divide-x divide-slate-300">
            <th className="size-20 bg-slate-200"></th>

            {tableData[0].map((point) => (
              <th key={point.x} scope="col" className="size-20 bg-slate-200">
                {point.x}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-300">
          {tableData.map((group) => (
            <tr key={group[0].y} className="divide-x divide-slate-300">
              <th scope="row" className="size-20 bg-slate-200">
                {group[0].y}
              </th>

              {group.map((point, i) => {
                if (!point.z1 || !point.z2) {
                  return <td key={i} className="size-20 bg-white"></td>
                }
                return (
                  <td
                    key={i}
                    className={cn('relative size-20 bg-white', {
                      'bg-yellow-200 font-semibold':
                        point.type === 'test' && hilightTestDataPoints,
                    })}
                  >
                    <span className="absolute left-2 top-2 text-green-800">
                      {point.z1.toFixed(2)}
                      {point.type === 'test' && <sup>(3)</sup>}
                    </span>

                    <span className="absolute bottom-2 right-2 text-blue-800">
                      {point.z2.toFixed(2)}
                      {point.type === 'test' && <sup>(4)</sup>}
                    </span>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

type TableDataPoint = {
  x: number
  y: number
  z1?: number | undefined
  z2?: number | undefined
  type: 'test' | 'interpolated'
}

export const generateTableDataWithStep = (points: DataPoint[], step = 1) => {
  const allX = points.map((p) => p.x)
  const allY = points.map((p) => p.y)

  const minX = Math.min(...allX)
  const maxX = Math.max(...allX)
  const minY = Math.min(...allY)
  const maxY = Math.max(...allY)

  const offsetX = Math.max(0, minX)
  const offsetY = Math.max(0, minY)

  const tableData: TableDataPoint[][] = []

  for (let y = minY; y <= maxY; y += step) {
    const row: TableDataPoint[] = []

    for (let x = minX; x <= maxX; x += step) {
      row.push({ x, y, type: 'interpolated' })
    }

    tableData.push(row)
  }

  points.forEach((point) => {
    tableData[point.y - offsetY][point.x - offsetX] = {
      ...tableData[point.y - offsetY][point.x - offsetX],
      ...point,
    }
  })

  return tableData
}

export const generateTableDataNoStep = (points: DataPoint[]) => {
  const allX = [...new Set(points.map((p) => p.x))].sort((a, b) => a - b)
  const allY = [...new Set(points.map((p) => p.y))].sort((a, b) => a - b)

  const tableData: TableDataPoint[][] = []

  allY.forEach((y) => {
    const row: TableDataPoint[] = []

    allX.forEach((x) => {
      const point = points.find((p) => p.x === x && p.y === y)
      row.push(point ? point : { x, y, type: 'interpolated' })
    })

    tableData.push(row)
  })

  return tableData
}
