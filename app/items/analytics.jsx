import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { getLowStockAlerts, getTopSellingProduct, getTotalProducts } from '../lib/data'

async function Analytics() {
    const totalItems = await getTotalProducts()
    const topSellingProduct = await getTopSellingProduct()
    const lowStockAlerts = await getLowStockAlerts() // Assuming this function exists to fetch low stock alerts
    const metrics = [
        { name: 'Total Products', value: totalItems },
        { name: 'Top Selling Product', value: topSellingProduct || 'N/A' },
        { name: 'Low Stock Alerts', value: lowStockAlerts || '0' },
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