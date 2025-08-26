import OrdersTable from './table'
import Analytics from './analytics'

async function Page({ searchParams }) {
    const params = await searchParams
    const page = params?.page || 1
    return (
        <div className='h-full w-full grid grid-rows-4 gap-4'>
            <Analytics />
            <OrdersTable page={page} />
        </div>
    )
}

export default Page