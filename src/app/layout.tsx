import './globals.css'

import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import { GridFourIcon } from './components/ui/icons/GridFourIcon'
import { GridNineIcon } from './components/ui/icons/GridNineIcon'
import { Button } from './components/ui/Button'
import { cn } from './components/ui/utils'
import {
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
  Tooltip,
} from './components/ui/Tooltip'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bida',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-slate-50')}>
        <TooltipProvider>
          <div className="grid h-screen w-full pl-[56px]">
            <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r bg-white pt-10">
              <nav className="grid gap-1 p-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-muted rounded-lg"
                      aria-label="Test Data"
                    >
                      <GridFourIcon className="size-6" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right" sideOffset={5}>
                    Test Data
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-lg"
                      aria-label="Projected Data"
                    >
                      <GridNineIcon className="size-6" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right" sideOffset={5}>
                    Projected Data
                  </TooltipContent>
                </Tooltip>
              </nav>
            </aside>

            <div>{children}</div>
          </div>
        </TooltipProvider>
      </body>
    </html>
  )
}
