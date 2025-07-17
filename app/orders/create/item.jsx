'use client'
import React from 'react'
import { Card, CardContent } from '@/components/ui/card';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '@/redux/orderSlice';

function Item({ item }) {
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.order.items);
    const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);

    const handleClick = () => {
        const { createdAt, ...itemWithoutDate } = item;

        if (isInCart) {
            dispatch(removeItem(itemWithoutDate));
        } else {
            dispatch(addItem(itemWithoutDate));
        }
    };


    return (
        <Card
            onClick={handleClick}
            key={item.id}
            className={`cursor-pointer transition-colors ${isInCart ? 'bg-green-200' : 'hover:bg-secondary'
                }`}
        >
            <CardContent className='items-center'>
                <p>{item.name}</p>
                <p>{item.price} L.E.</p>
            </CardContent>
        </Card>
    );
}

export default Item;
