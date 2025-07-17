import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import DetailsForm from './form'
import { getCustomers } from '@/app/lib/data'

async function GetCustomers() {
    const customers = await getCustomers()
    return (
        <CardContent>
            <DetailsForm customers={customers} />
        </CardContent>
    )
}

export default GetCustomers