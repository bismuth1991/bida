import type { DataPoint } from './data-point'

export const fetchDataPoints = async () => {
  return [
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
  ] satisfies DataPoint[]
}
