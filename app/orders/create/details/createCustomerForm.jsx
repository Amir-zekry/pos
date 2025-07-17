'use client'

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createNewCustomer } from "@/app/lib/actions"

function CreateCustomerForm() {
    const form = useForm({
        defaultValues: {
            name: '',
            number: '',
            address: '',
        }
    })

    const handleSubmit = async () => {
        const values = form.getValues()
        await createNewCustomer(values)
        form.reset() // optional
    }

    return (
        <Form {...form}>
            <div className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="address" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="button" onClick={handleSubmit}>Submit</Button>
            </div>
        </Form>
    )
}

export default CreateCustomerForm
