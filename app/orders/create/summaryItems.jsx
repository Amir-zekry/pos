'use client'
import { Button } from '@/components/ui/button'
import { decreaseItemAmount, increaseItemAmount } from '@/redux/orderSlice'
import { Plus, Minus } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function SummaryItems() {
    const items = useSelector((state) => state.order.items)
    const dispatch = useDispatch()
    return (
        <div>
            {items.map((item) => (
                <div key={item.id} className='flex justify-between p-2 border-b items-center'>
                    <p>{item.name} x {item.amount}</p>
                    <div className='flex space-x-1'>
                        <Button onClick={() => dispatch(decreaseItemAmount(item))}>
                            <Minus size={8} />
                        </Button>
                        <Button onClick={() => dispatch(increaseItemAmount(item))}>
                            <Plus size={8} />
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SummaryItems