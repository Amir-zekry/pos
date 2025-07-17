import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import React from 'react'

function Analytics() {
    const metrics = [
        { name: 'Total Products', value: 120 },
        { name: 'Top Selling Product', value: 'Wireless Mouse' },
        { name: 'Low Stock Alerts', value: 8 },
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