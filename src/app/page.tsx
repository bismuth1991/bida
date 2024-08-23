import { fetchDataPoints } from './utils/data-point.server'
import { interpolate } from './utils/data-point'
import { Breadcrumbs } from './Breadcrumbs'
import { DataTable } from './DataTable'

const ProjectedDataPage = async () => {
  const dataPoints = await fetchDataPoints()

  return (
    <main className="min-w-fit px-6 pb-6">
      <Breadcrumbs page="Projected Data" />
      <DataTable dataPoints={interpolate(dataPoints)} hilightTestDataPoints />
    </main>
  )
}

export default ProjectedDataPage
