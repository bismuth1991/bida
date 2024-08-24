import { useCallback, useMemo } from 'react'

import { useQueryClient, useQuery, Updater } from '@tanstack/react-query'

export const useAddDataPointFormDefaultValues = () => {
  const queryClient = useQueryClient()
  const queryKey = useMemo(() => ['add-data-point-form-default-values'], [])

  const { data: defaultValues = DEFAULT_VALUES } = useQuery({
    queryKey,
    queryFn: () => DEFAULT_VALUES,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

  const setDefaultValues = useCallback(
    (
      updater: Updater<
        typeof DEFAULT_VALUES | undefined,
        typeof DEFAULT_VALUES | undefined
      >,
    ) =>
      queryClient.setQueryData<typeof DEFAULT_VALUES | undefined>(
        queryKey,
        updater,
      ),
    [queryKey, queryClient],
  )

  return { defaultValues, setDefaultValues }
}

const DEFAULT_VALUES = {
  x: 0,
  y: 0,
  z1: 0,
  z2: 0,
}
