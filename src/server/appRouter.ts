import { z } from 'zod'
import { createServerSideHelpers } from '@trpc/react-query/server'
import { publicProcedure, router } from './router'
import { createInternalContext } from './context'

export const appRouter = router({
  ciao: publicProcedure
    .input(z.void())
    .output(z.object({
      succeed: z.boolean(),
    }))
    .query(() => {
      return { succeed: true }
    })
})

export type AppRouter = typeof appRouter

export async function useTrpcPreload() {
  const ctx = await createInternalContext()
  return createServerSideHelpers({
    router: appRouter,
    ctx,
  })
}
