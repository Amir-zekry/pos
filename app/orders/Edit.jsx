import React from 'react'
import { editOrder } from '../lib/actions'

function Edit({ id }) {
    return (
        <form action={editOrder}>
            <input type="hidden" name="id" value={id} />
            <select name="status" className='bg-black'>
                <option value="pending">pending</option>
                <option value="processing">processing</option>
                <option value="canceled">canceled</option>
                <option value="completed">completed</option>
                <option value="refunded">refunded</option>
                <option value="replaced">replaced</option>
            </select>
            <button type="submit">Save</button>
        </form>
    )
}

export default Edit