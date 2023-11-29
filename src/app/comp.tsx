'use client';

import { trpcQuery } from '@/server/trpcProvider'

export function FooComp() {
  const { data } = trpcQuery.ciao.useQuery()
  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  )
}
