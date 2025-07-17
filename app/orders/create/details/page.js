import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import GetCustomers from './getCustomers'

function page() {

    return (
        <div className='flex h-full w-full justify-center'>
            <Card className='w-full'>
                <CardHeader>
                    <CardTitle>Order details</CardTitle>
                </CardHeader>
                <GetCustomers />
            </Card>
        </div>
    )
}

export default page