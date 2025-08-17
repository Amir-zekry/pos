import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React from 'react'
import { getOrderById } from '../lib/data'

async function Edit({ id }) {
    const order = await getOrderById(id)
    return (
        <form className='space-y-4'>
            <div className='flex items-center space-x-4'>
                <Label>Status</Label>
                <Select defaultValue={order.status}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pending">pending</SelectItem>
                        <SelectItem value="processing">processing</SelectItem>
                        <SelectItem value="done">done</SelectItem>
                        <SelectItem value="deliverd">deliverd</SelectItem>
                        <SelectItem value="canceled">canceled</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='flex items-center space-x-4'>
                <Label>payment status</Label>
                <Select defaultValue={order.paymentStatus}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="payment status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pending">pending</SelectItem>
                        <SelectItem value="paid">paid</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='flex items-center space-x-4'>
                <Label>payment method</Label>
                <Select defaultValue={order.paymentMethod}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="payment method" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="cash">cash</SelectItem>
                        <SelectItem value="wallet">wallet</SelectItem>
                        <SelectItem value="card">card</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </form>
    )
}

export default Edit