'use client'

import type { FC } from 'react'

import { useCallback, useRef } from 'react'

import { generateTableDataNoStep, DataTable } from '../DataTable'
import { useAddDataPointFormDefaultValues } from './useAddDataPointFormDefaultValues'
import { AddDataPointFloatingButton } from '../AddDataPointFloatingButton'
import { DataPoint } from '../utils/data-point'

export const DataTableWithFloatingButton: FC<{
  dataPoints: DataPoint[]
}> = ({ dataPoints }) => {
  const floatingButtonRef = useRef<HTMLButtonElement>(null)
  const { setDefaultValues } = useAddDataPointFormDefaultValues()

  const openAddDataPointSheet = useCallback(
    (defaultValues: { x: number; y: number; z1: number; z2: number }) => {
      if (floatingButtonRef.current) {
        setDefaultValues(defaultValues)
        floatingButtonRef.current.click()
      }
    },
    [setDefaultValues],
  )

  return (
    <>
      <DataTable
        openAddDataPointSheet={openAddDataPointSheet}
        generateTableData={generateTableDataNoStep}
        dataPoints={dataPoints}
      />

      <AddDataPointFloatingButton ref={floatingButtonRef} />
    </>
  )
}
