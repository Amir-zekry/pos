'use client'
import { createNewOrder } from '@/app/lib/actions'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { clearOrder } from '@/redux/orderSlice'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

function page() {
    const order = useSelector((state) => state.order)
    const disptach = useDispatch()
    const router = useRouter()
    return (
        <form
            action={async (formData) => {
                await createNewOrder(formData)
                disptach(clearOrder())
                router.push('/orders')
            }}
            className='h-full w-full flex'
        >
            <Card className='w-full'>
                <CardHeader>
                    <CardTitle className='flex justify-between items-center'>
                        <p>Order summary</p>
                        <Button type='submit' className='w-1/4'>Submit</Button>
                    </CardTitle>
                </CardHeader>
                <CardContent className='grid grid-cols-2 grid-rows-2 h-full gap-4'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Customer info</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{order.customer?.name || null}</p>
                            <p>{order.customer?.number || null}</p>
                            <p>{order.customer?.address || null}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <input name='type' defaultValue={order.type || null} readOnly />
                            <input name='paymentMethod' defaultValue={order.paymentMethod || null} readOnly />
                            <input name='paymentStatus' defaultValue={order.paymentStatus || null} readOnly />
                            <p>
                                Total: <input name='total' defaultValue={`${order.total || null} L.E.`} readOnly />
                            </p>
                        </CardContent>
                    </Card>
                    <Card className=' col-span-2'>
                        <CardHeader>
                            <CardTitle>Order Items</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableCaption>A list of your order items.</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">Item</TableHead>
                                        <TableHead>Qty</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead className="text-right">Amount</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {order.items.map((item, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell className="font-medium">{item.name}</TableCell>
                                            <TableCell>{item.amount}</TableCell>
                                            <TableCell>{item.price}</TableCell>
                                            <TableCell className="text-right">{item.amount}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>

            <input name='customerId' type='hidden' defaultValue={order.customer?.id || null} />
            <input name='items' type='hidden' defaultValue={JSON.stringify(order.items || null)} />
        </form>
    )
}

export default page