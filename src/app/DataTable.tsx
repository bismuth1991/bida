import type { DataPoint } from './utils/data-point'
import type { FC } from 'react'

import { groupBy } from './utils/data-point'
import { cn } from './components/utils'

export const DataTable: FC<{
  hilightTestDataPoints?: boolean
  dataPoints: DataPoint[]
}> = ({ dataPoints, hilightTestDataPoints = false }) => {
  const groupedByY = groupBy(dataPoints, 'y')

  return (
    <div className="overflow-hidden rounded-md border border-slate-300">
      <table className="w-full table-fixed text-sm">
        <thead className="border-b border-slate-300">
          <tr className="divide-x divide-slate-300">
            <th className="size-20 bg-slate-200"></th>

            {groupedByY[0].map((point) => (
              <th key={point.x} scope="col" className="size-20 bg-slate-200">
                {point.x}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-300">
          {groupedByY.map((group) => (
            <tr key={group[0].y} className="divide-x divide-slate-300">
              <th scope="row" className="size-20 bg-slate-200">
                {group[0].y}
              </th>

              {group.map((point, i) => (
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
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
