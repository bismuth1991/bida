import type { TRPCRouterRecord } from '@trpc/server'

import { nanoid } from 'nanoid'

import { AddDataPointFormSchema } from '~/app/utils/data-point'
import { publicProcedure } from '~/server/api/trpc'
import { dataPoint } from '~/server/db/drizzle/schema'

export const dataPointRouter = {
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
