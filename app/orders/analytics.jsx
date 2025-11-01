import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
async function Analytics() {
    const metrics = [
        { name: 'Total Orders', value: 1234 },
        { name: 'Total Revenue', value: '$56,789.00' },
        { name: 'Average Order Value', value: '$46.12' },
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