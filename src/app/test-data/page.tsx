import { api } from '~/trpc/server'

import { DataTableWithFloatingButton } from './DataTableWithFloatingButton'
import { Breadcrumbs } from '../Breadcrumbs'

const TestDataPage = async () => {
  const dataPoints = await api.dataPoint.getAll()

  return (
    <main className="min-w-fit px-6 pb-6">
      <Breadcrumbs page="Test Data" />
      <DataTableWithFloatingButton dataPoints={dataPoints} />
    </main>
  )
}

export default TestDataPage
