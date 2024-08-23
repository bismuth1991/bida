import { dataPoint } from '~/db/drizzle/schema'
import { dz } from '~/db/drizzle'

export const fetchDataPoints = async () => {
  const result = await dz
    .select({
      id: dataPoint.id,
      x: dataPoint.x,
      y: dataPoint.y,
      z1: dataPoint.z1,
      z2: dataPoint.z2,
    })
    .from(dataPoint)
    .then((points) =>
      points.map((point) => ({
        ...point,
        type: 'test' as const,
      })),
    )

  return result
}
