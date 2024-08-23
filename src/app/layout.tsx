import './globals.css'

import type { ReactNode, FC } from 'react'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import { TRPCReactProvider } from '~/trpc/react'
import { HydrateClient } from '~/trpc/server'

import { TooltipProvider } from './components/ui/Tooltip'
import { AsideNavs } from './AsideNavs'
import { cn } from './components/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bida',
}

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-slate-50 text-slate-700')}>
        <TooltipProvider>
          <div className="grid h-screen w-full pl-[56px]">
            <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r bg-white pt-4">
              <AsideNavs />
            </aside>

            <TRPCReactProvider>
              <HydrateClient>{children}</HydrateClient>
            </TRPCReactProvider>
          </div>
        </TooltipProvider>
      </body>
    </html>
  )
}

export default RootLayout
