import { generateTableDataNoStep, DataTable } from '../DataTable'
import { AddDataPointFloatingButton } from '../AddDataPointFloatingButton'
import { fetchDataPoints } from '../utils/data-point.server'
import { Breadcrumbs } from '../Breadcrumbs'

const TestDataPage = async () => {
  const dataPoints = await fetchDataPoints()

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
