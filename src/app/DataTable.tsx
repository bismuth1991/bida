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
                  className={cn('size-20 bg-white text-center', {
                    'bg-red-300':
                      point.type === 'test' && hilightTestDataPoints,
                  })}
                >
                  {point.z.toFixed(2)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
