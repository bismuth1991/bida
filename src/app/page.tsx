import type { DataPoint } from './utils/data-point'

import clsx from 'clsx'

import { interpolate, groupBy } from './utils/data-point'

export default function Home() {
  const inputPoints: DataPoint[] = [
    { x: 40, y: 50, z: 15, type: 'test' },
    { x: 30, y: 50, z: 19, type: 'test' },
    { x: 20, y: 50, z: 28, type: 'test' },
    { x: 10, y: 50, z: 38, type: 'test' },
    { x: 0, y: 50, z: 45, type: 'test' },
    { x: 40, y: 60, z: 27.1875, type: 'test' },
    { x: 30, y: 60, z: 35.375, type: 'test' },
    { x: 20, y: 60, z: 42.75, type: 'test' },
    { x: 10, y: 60, z: 47.5, type: 'test' },
    { x: 0, y: 60, z: 50, type: 'test' },
    { x: 40, y: 70, z: 40.75, type: 'test' },
    { x: 30, y: 70, z: 46.125, type: 'test' },
    { x: 20, y: 70, z: 49.75, type: 'test' },
    { x: 10, y: 70, z: 51.5, type: 'test' },
    { x: 0, y: 70, z: 53, type: 'test' },
    { x: 40, y: 80, z: 48.6875, type: 'test' },
    { x: 30, y: 80, z: 51.25, type: 'test' },
    { x: 20, y: 80, z: 53, type: 'test' },
    { x: 10, y: 80, z: 54.5, type: 'test' },
    { x: 0, y: 80, z: 56, type: 'test' },
  ]

  const points = interpolate(inputPoints)
  const groupedByY = groupBy(points, 'y')

  return (
    <main className="min-w-fit p-10">
      <table className="border border-black">
        <thead className="border-b border-black">
          <tr className="divide-x divide-black">
            <th className="block size-12"></th>
            {groupedByY[0].map((point) => (
              <th key={point.x} scope="col" className="size-12">
                {point.x}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-black">
          {groupedByY.map((group) => (
            <tr key={group[0].y} className="divide-x divide-black">
              <th scope="row">{group[0].y}</th>

              {group.map((point, i) => (
                <td
                  key={i}
                  className={clsx('size-12', {
                    'bg-red-300': point.type === 'test',
                  })}
                >
                  {point.z.toFixed(2)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
