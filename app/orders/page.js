import React from 'react'
import OrdersTable from './table'
import Analytics from './analytics'

function page() {
    return (
        <div className='h-full w-full space-y-8'>
            <Analytics />
            <OrdersTable />
        </div>
    )
}

export default page