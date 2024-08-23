import { api } from '~/trpc/server'

import { generateTableDataNoStep, DataTable } from '../DataTable'
import { AddDataPointFloatingButton } from '../AddDataPointFloatingButton'
import { Breadcrumbs } from '../Breadcrumbs'

const TestDataPage = async () => {
  const dataPoints = await api.dataPoint.getAll()

  return (
    <main className="min-w-fit px-6 pb-6">
      <Breadcrumbs page="Test Data" />
      <DataTable
        generateTableData={generateTableDataNoStep}
        dataPoints={dataPoints}
      />

      <AddDataPointFloatingButton />
    </main>
  )
}

export default TestDataPage
