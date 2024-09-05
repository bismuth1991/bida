'use client'

import { Grid3X3Icon, Table2Icon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { buttonVariants } from './components/ui/Button'
import { cn } from './components/utils'
import {
  TooltipContent,
  TooltipTrigger,
  Tooltip,
} from './components/ui/Tooltip'

export const AsideNavs = () => {
  const pathname = usePathname()

  return (
    <nav className="grid gap-1 p-2">
      {[
        { Icon: Grid3X3Icon, label: 'Projected Data', href: '/' },
        { Icon: Table2Icon, label: 'Test Data', href: '/test-data' },
      ].map(({ Icon, label, href }) => (
        <Tooltip key={label}>
          <TooltipTrigger asChild>
            <Link
              href={href}
              prefetch={true}
              className={cn(
                buttonVariants({
                  variant: pathname === href ? 'default' : 'ghost',
                  size: 'icon',
                  className: 'rounded-lg',
                }),
              )}
            >
              <span className="sr-only">{label}</span>
              <Icon className="size-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            {label}
          </TooltipContent>
        </Tooltip>
      ))}
    </nav>
  )
}
