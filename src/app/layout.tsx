import './globals.css'

import type { Metadata } from 'next'

import { Grid3X3Icon, Table2Icon } from 'lucide-react'
import { Inter } from 'next/font/google'

import { Button } from './components/ui/Button'
import { cn } from './components/utils'
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
      <body className={cn(inter.className, 'bg-slate-50 text-slate-700')}>
        <TooltipProvider>
          <div className="grid h-screen w-full pl-[56px]">
            <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r bg-white pt-4">
              <nav className="grid gap-1 p-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-lg"
                      aria-label="Projected Data"
                    >
                      <Grid3X3Icon className="size-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right" sideOffset={5}>
                    Projected Data
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-muted rounded-lg"
                      aria-label="Test Data"
                    >
                      <Table2Icon className="size-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right" sideOffset={5}>
                    Test Data
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
