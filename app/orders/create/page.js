import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Items from './items'
import SummaryItems from './summaryItems'
import TotalPrice from './totalPrice'
import Link from 'next/link'
import Cancel from './cancel'

function Page() {
    return (
        <div className='flex flex-col space-y-4 w-full h-full'>
            <Input placeholder='Search for products...' />
            <section className='grid grid-cols-2 gap-x-4'>
                <Button>Food</Button>
                <Button>Drinks</Button>
            </section>
            <div className='flex space-x-4 h-full'>
                <Items />
                <Card className='h-full w-1/4 flex flex-col bg-secondary'>
                    <CardHeader>
                        <CardTitle>Order summary</CardTitle>
                    </CardHeader>
                    <SummaryItems />
                    <CardFooter className="mt-auto flex flex-col space-y-2 items-start">
                        <TotalPrice />
                        <div className='grid grid-cols-2 gap-x-2 w-full'>
                            <Button asChild>
                                <Link href='/orders/create/details'>Next</Link>
                            </Button>
                            <Cancel />
                        </div>
                    </CardFooter>
                </Card>
            </div>

        </div>
    )
}

export default Page