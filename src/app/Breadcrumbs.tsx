import type { FC } from 'react'

import { HomeIcon } from 'lucide-react'

import {
  BreadcrumbSeparator,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  Breadcrumb,
} from './components/ui/Breadcrumb'

export const Breadcrumbs: FC<{ page: 'Projected Data' | 'Test Data' }> = ({
  page,
}) => {
  return (
    <Breadcrumb className="ml-0.5 mt-4 flex h-14 items-center">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <HomeIcon className="size-3.5" />
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage>{page}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
