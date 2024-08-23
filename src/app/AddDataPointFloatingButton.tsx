'use client'

import { useForm } from 'react-hook-form'
import { useRef } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { PlusIcon } from 'lucide-react'
import { z } from 'zod'

import { api } from '~/trpc/react'

import { AddDataPointFormSchema } from './utils/data-point'
import { Button } from './components/ui/Button'
import { Input } from './components/ui/input'
import {
  SheetDescription,
  SheetContent,
  SheetTrigger,
  SheetFooter,
  SheetHeader,
  SheetClose,
  SheetTitle,
  Sheet,
} from './components/ui/sheet'
import {
  FormControl,
  FormMessage,
  FormField,
  FormLabel,
  FormItem,
  Form,
} from './components/ui/form'

export const AddDataPointFloatingButton = () => {
  const sheetCloseRef = useRef<HTMLButtonElement>(null)
  const router = useRouter()

  const form = useForm<z.input<typeof AddDataPointFormSchema>>({
    resolver: zodResolver(AddDataPointFormSchema),
    defaultValues: {
      x: 0,
      y: 0,
      z1: 0,
      z2: 0,
    },
    mode: 'onBlur',
  })

  const { mutateAsync: createDataPoint, isPending } =
    api.dataPoint.create.useMutation()

  const onSubmit = async (data: z.output<typeof AddDataPointFormSchema>) => {
    await createDataPoint(data)
    router.refresh()
    sheetCloseRef.current?.click()
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" className="absolute bottom-4 right-4">
          <span className="sr-only">Add data point</span>
          <PlusIcon className="size-6" />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <SheetHeader>
              <SheetTitle>Add data point</SheetTitle>
              <SheetDescription>
                Add new data point here. Click save when you&apos;re done.
              </SheetDescription>
            </SheetHeader>

            <div className="grid gap-4 py-4">
              {(['x', 'y', 'z1', 'z2'] as const).map((label) => (
                <FormField
                  key={label}
                  control={form.control}
                  name={label}
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-8 items-center gap-x-4">
                      <FormLabel className="text-right">{label}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          inputMode="decimal"
                          className="col-span-7"
                        />
                      </FormControl>
                      <FormMessage className="col-span-7 col-start-2" />
                    </FormItem>
                  )}
                />
              ))}
            </div>

            <SheetFooter>
              <SheetClose className="sr-only" ref={sheetCloseRef}>
                Close
              </SheetClose>

              <Button type="submit" disabled={isPending}>
                Save changes
              </Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}
