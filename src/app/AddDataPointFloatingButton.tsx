'use client'

import { forwardRef, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { PlusIcon } from 'lucide-react'
import { z } from 'zod'

import { api } from '~/trpc/react'

import { useAddDataPointFormDefaultValues } from './test-data/useAddDataPointFormDefaultValues'
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

export const AddDataPointFloatingButton = forwardRef<HTMLButtonElement>(
  (_, ref) => {
    const sheetCloseRef = useRef<HTMLButtonElement>(null)
    const router = useRouter()

    const { defaultValues, setDefaultValues } =
      useAddDataPointFormDefaultValues()

    const form = useForm<z.input<typeof AddDataPointFormSchema>>({
      resolver: zodResolver(AddDataPointFormSchema),
      defaultValues,
      mode: 'onBlur',
    })
    useEffect(() => {
      form.setValue('x', defaultValues.x)
      form.setValue('y', defaultValues.y)
      form.setValue('z1', defaultValues.z1)
      form.setValue('z2', defaultValues.z2)
    }, [
      defaultValues.x,
      defaultValues.y,
      defaultValues.z1,
      defaultValues.z2,
      form,
    ])

    const { mutateAsync: createDataPoint, isPending } =
      api.dataPoint.upsert.useMutation()

    const onSubmit = async (data: z.output<typeof AddDataPointFormSchema>) => {
      await createDataPoint(data)
      router.refresh()
      sheetCloseRef.current?.click()
    }

    return (
      <Sheet
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setDefaultValues({
              x: 0,
              y: 0,
              z1: 0,
              z2: 0,
            })
          }
        }}
      >
        <SheetTrigger asChild>
          <Button ref={ref} size="icon" className="absolute bottom-4 right-4">
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
  },
)

AddDataPointFloatingButton.displayName = 'AddDataPointFloatingButton'
