import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { getAverageProductPrice, getTopSellingItem, getTotalItems } from '../lib/data'

async function Analytics() {
    const totalItems = await getTotalItems()
    const averageProductPrice = (await getAverageProductPrice())._avg.price

    const metrics = [
        { name: 'Total Products', value: totalItems || 0 },
        { name: 'Average Product Price', value: averageProductPrice || 0 },
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