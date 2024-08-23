import { api } from '~/trpc/server'

import { generateTableDataWithStep, DataTable } from './DataTable'
import { interpolate } from './utils/data-point'
import { Breadcrumbs } from './Breadcrumbs'

const ProjectedDataPage = async () => {
  const dataPoints = await api.dataPoint.getAll()

  return (
    <main className="min-w-fit px-6 pb-6">
      <Breadcrumbs page="Projected Data" />
      <DataTable
        generateTableData={generateTableDataWithStep}
        dataPoints={interpolate(dataPoints)}
        hilightTestDataPoints
      />
    </main>
  )
}

export default ProjectedDataPage
