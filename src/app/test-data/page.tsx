import { fetchDataPoints } from '../utils/data-point.server'
import { Breadcrumbs } from '../Breadcrumbs'
import { DataTable } from '../DataTable'

const TestDataPage = async () => {
  const dataPoints = await fetchDataPoints()

  dataPoints.sort((a, b) => (a.y === b.y ? a.x - b.x : a.y - b.y))

  return (
    <main className="min-w-fit px-6 pb-6">
      <Breadcrumbs page="Test Data" />
      <DataTable dataPoints={dataPoints} />
    </main>
  )
}

export default TestDataPage
