import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import React from 'react'
import { getTotalOrders, getTotalRevenue, getAverageOrderValue } from '../lib/data'

async function Analytics() {
    const totalOrders = await getTotalOrders()
    const totalRevenue = await getTotalRevenue()
    const averageOrderValue = await getAverageOrderValue()
    const metrics = [
        { name: 'Total Orders', value: totalOrders },
        { name: 'Total Revenue', value: totalRevenue._sum.total },
        { name: 'Average Order Value', value: averageOrderValue._avg.total },
    ]
    return (
        <div className='grid grid-cols-3 gap-4'>
            {metrics.map((metric) => (
                <Card key={metric.name}>
                    <CardHeader>
                        <CardTitle>{metric.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{metric.value}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default Analytics