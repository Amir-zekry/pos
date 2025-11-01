import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'

async function Analytics() {
    const totalItems = 128
    const topSellingProduct = 'Blue T-Shirt'
    const averageProductPrice = '$24.99'

    const metrics = [
        { name: 'Total Products', value: totalItems },
        { name: 'Top Selling Product', value: topSellingProduct },
        { name: 'Average Product Price', value: averageProductPrice },
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