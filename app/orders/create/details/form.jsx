'use client'
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { cn } from "@/lib/utils"
import { Check, ChevronsUpDown } from "lucide-react"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useDispatch, useSelector } from "react-redux"
import { setOrderDetails } from "@/redux/orderSlice"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import CreateCustomerForm from "./createCustomerForm"

function DetailsForm({ customers }) {
    const order = useSelector((state) => state.order)
    const form = useForm({
        defaultValues: {
            customer: order.customer,
            type: order.type,
            paymentMethod: order.paymentMethod,
            paymentStatus: order.paymentStatus,
        }
    })
    const dispatch = useDispatch()
    const router = useRouter()
    return (
        <Form {...form}>
            <form
                id="detailsForm"
                className="space-y-8"
                onSubmit={form.handleSubmit((values) => {
                    const { createdAt, ...customerWithoutDate } = values.customer;
                    dispatch(setOrderDetails({
                        customer: customerWithoutDate,
                        orderType: values.type,
                        paymentMethod: values.paymentMethod,
                        paymentStatus: values.paymentStatus
                    }));
                    router.push('/orders/create/details/submit')
                })}>
                <FormField
                    control={form.control}
                    name="customer"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Customer</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                "w-[200px] justify-between",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? field.value.name : "Select customer"}
                                            <ChevronsUpDown className="opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput
                                            placeholder="Search customers..."
                                            className="h-9"
                                        />
                                        <CommandList>
                                            <CommandEmpty>
                                                <Dialog>
                                                    <DialogTrigger>
                                                        Create new customer
                                                    </DialogTrigger>
                                                    <DialogContent>
                                                        <DialogHeader>
                                                            <DialogTitle>Customer info</DialogTitle>
                                                        </DialogHeader>
                                                        <CreateCustomerForm />
                                                    </DialogContent>
                                                </Dialog>
                                            </CommandEmpty>
                                            <CommandGroup>
                                                {customers.map((customer) => (
                                                    <CommandItem
                                                        value={customer.number}
                                                        key={customer.id}
                                                        onSelect={() => {
                                                            form.setValue("customer", customer)
                                                        }}
                                                    >
                                                        {customer.name}
                                                        <Check
                                                            className={cn(
                                                                "ml-auto",
                                                                customer.id === field.value?.id
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            )}
                                                        />
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>Order type...</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col"
                                >
                                    <FormItem className="flex items-center gap-3">
                                        <FormControl>
                                            <RadioGroupItem value="takeaway" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Takeaway
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center gap-3">
                                        <FormControl>
                                            <RadioGroupItem value="delivery" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Delivery
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center gap-3">
                                        <FormControl>
                                            <RadioGroupItem value="dine-in" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Dine-in</FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>Payment method...</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col"
                                >
                                    <FormItem className="flex items-center gap-3">
                                        <FormControl>
                                            <RadioGroupItem value="cash" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Cash
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center gap-3">
                                        <FormControl>
                                            <RadioGroupItem value="wallet" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Wallet
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center gap-3">
                                        <FormControl>
                                            <RadioGroupItem value="card" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Card</FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="paymentStatus"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>Payment status...</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col"
                                >
                                    <FormItem className="flex items-center gap-3">
                                        <FormControl>
                                            <RadioGroupItem value="paid" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Paid
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center gap-3">
                                        <FormControl>
                                            <RadioGroupItem value="pending" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Pending
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className='w-1/2' type="submit">Next</Button>
            </form>
        </Form>
    )
}

export default DetailsForm