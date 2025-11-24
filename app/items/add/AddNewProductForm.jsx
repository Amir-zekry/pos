'use client'
import { addNewProduct } from '@/app/lib/actions'
import { useForm } from 'react-hook-form'
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
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function AddNewProductForm() {
    const form = useForm({
        defaultValues: {
            name: "",
            discription: "",
            image: "",
            heroImage: "",
            heroImagePhone: "",
            price: 0,
            profit: 0,
        },
    })

    return (
        <Card className="w-full max-w-2xl mx-auto mt-5">
            <CardHeader>
                <CardTitle>Add New Product</CardTitle>
                <CardDescription>Fill in the product details below</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form action={addNewProduct} className="space-y-6">
                        {/* Basic Info Section */}
                        <div className="space-y-4 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold">Basic Information</h2>
                            <FormField control={form.control} name="name" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Product Name *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter product name" {...field} required />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="discription" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter product description" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        </div>

                        {/* Images Section */}
                        <div className="space-y-4 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold">Images</h2>
                            <FormField control={form.control} name="image" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Product Image URL</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://example.com/image.jpg" {...field} type="url" />
                                    </FormControl>
                                    <FormDescription>Main product image</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField control={form.control} name="heroImage" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Hero Image URL</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://example.com/hero.jpg" {...field} type="url" />
                                    </FormControl>
                                    <FormDescription>Large banner image</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField control={form.control} name="heroImagePhone" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Hero Image Phone URL</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://example.com/hero.jpg" {...field} type="url" />
                                    </FormControl>
                                    <FormDescription>Large banner image</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                        </div>

                        {/* Pricing Section */}
                        <div className="space-y-4 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold">Pricing</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <FormField control={form.control} name="price" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Price *</FormLabel>
                                        <FormControl>
                                            <Input step="0.01" placeholder="0.00" {...field} required />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="profit" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Profit Margin</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            </div>
                        </div>

                        <Button type="submit" className="w-full h-10">Add Product</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default AddNewProductForm