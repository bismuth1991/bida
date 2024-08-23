import { dataPoint } from '~/db/drizzle/schema'
import { dz } from '~/db/drizzle'

export const fetchDataPoints = async () => {
  return dz
    .select()
    .from(dataPoint)
    .then((points) =>
      points.map((point) => ({
        ...point,
        type: 'test' as const,
      })),
    )
}
