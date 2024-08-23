import type { ClassValue } from 'clsx'
import type { SVGProps } from 'react'

import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type SvgProps = SVGProps<SVGSVGElement>
