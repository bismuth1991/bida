import { z } from 'zod'

export type DataPoint = {
  x: number
  y: number
  z1: number
  z2: number
  type: 'test' | 'interpolated'
}

export const interpolate = (points: DataPoint[]) => {
  // Sort the points by y first, and then by x within each y group
  points.sort((a, b) => (a.y === b.y ? a.x - b.x : a.y - b.y))

  const allPoints: DataPoint[] = []

  // Interpolate along the x-axis within the same y
  const groupedByY = groupBy(points, 'y')
  for (const yGroup of groupedByY) {
    for (let i = 0; i < yGroup.length - 1; i++) {
      const start = yGroup[i]
      const end = yGroup[i + 1]
      const numPoints = end.x - start.x - 1 // Deduce number of points based on x difference
      const z1Step = (end.z1 - start.z1) / (numPoints + 1)
      const z2Step = (end.z2 - start.z2) / (numPoints + 1)

      allPoints.push(start) // Add the start point

      for (let j = 1; j <= numPoints; j++) {
        const z1 = start.z1 + z1Step * j
        const z2 = start.z2 + z2Step * j
        const x = start.x + j
        allPoints.push({ x, y: start.y, z1, z2, type: 'interpolated' })
      }
    }
    allPoints.push(yGroup[yGroup.length - 1]) // Add the last point of the group
  }

  // Interpolate along the y-axis within the same x
  const groupedByX = groupBy(allPoints, 'x')
  const finalPoints: DataPoint[] = []
  for (const xGroup of groupedByX) {
    for (let i = 0; i < xGroup.length - 1; i++) {
      const start = xGroup[i]
      const end = xGroup[i + 1]
      const numPoints = end.y - start.y - 1 // Deduce number of points based on y difference
      const z1Step = (end.z1 - start.z1) / (numPoints + 1)
      const z2Step = (end.z2 - start.z2) / (numPoints + 1)

      finalPoints.push(start) // Add the start point

      for (let j = 1; j <= numPoints; j++) {
        const z1 = start.z1 + z1Step * j
        const z2 = start.z2 + z2Step * j
        const y = start.y + j
        finalPoints.push({ x: start.x, y, z1, z2, type: 'interpolated' })
      }
    }
    finalPoints.push(xGroup[xGroup.length - 1]) // Add the last point of the group
  }

  return finalPoints
}

// Helper function to group points by a given key ('x' or 'y')
export const groupBy = (
  points: DataPoint[],
  key: keyof DataPoint,
): DataPoint[][] => {
  const groups: Record<string, DataPoint[]> = {}

  points.forEach((point) => {
    const groupKey = point[key]
    if (!groups[groupKey]) {
      groups[groupKey] = []
    }
    groups[groupKey].push(point)
  })

  return Object.values(groups)
}

export const AddDataPointFormSchema = z.object({
  x: z.coerce.number(),
  y: z.coerce.number(),
  z1: z.coerce.number(),
  z2: z.coerce.number(),
})
