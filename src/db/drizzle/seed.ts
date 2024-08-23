import { nanoid } from 'nanoid'

import { dataPoint } from './schema'
import { dz } from '.'

const seed = async () => {
  await dz.insert(dataPoint).values(
    [
      { x: 40, y: 50, z: 15 },
      { x: 30, y: 50, z: 19 },
      { x: 20, y: 50, z: 28 },
      { x: 10, y: 50, z: 38 },
      { x: 0, y: 50, z: 45 },
      { x: 40, y: 60, z: 27.1875 },
      { x: 30, y: 60, z: 35.375 },
      { x: 20, y: 60, z: 42.75 },
      { x: 10, y: 60, z: 47.5 },
      { x: 0, y: 60, z: 50 },
      { x: 40, y: 70, z: 40.75 },
      { x: 30, y: 70, z: 46.125 },
      { x: 20, y: 70, z: 49.75 },
      { x: 10, y: 70, z: 51.5 },
      { x: 0, y: 70, z: 53 },
      { x: 40, y: 80, z: 48.6875 },
      { x: 30, y: 80, z: 51.25 },
      { x: 20, y: 80, z: 53 },
      { x: 10, y: 80, z: 54.5 },
      { x: 0, y: 80, z: 56 },
    ].map(({ z, ...data }) => ({
      ...data,
      id: nanoid(),
      z1: z,
      z2: z,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    })),
  )
}

void seed()
