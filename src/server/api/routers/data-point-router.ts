import type { TRPCRouterRecord } from '@trpc/server'

import { nanoid } from 'nanoid'

import { AddDataPointFormSchema } from '~/app/utils/data-point'
import { publicProcedure } from '~/server/api/trpc'
import { dataPoint } from '~/server/db/drizzle/schema'

export const dataPointRouter = {
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.dz
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
  }),

  create: publicProcedure
    .input(AddDataPointFormSchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.dz.insert(dataPoint).values({
        id: nanoid(),
        createdAt: Date.now(),
        updatedAt: Date.now(),
        ...input,
      })
    }),
} satisfies TRPCRouterRecord
