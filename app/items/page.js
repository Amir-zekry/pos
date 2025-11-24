import Analytics from "./analytics"
import ProductsTable from "./table"
function page() {
    return (
        <div className='h-full w-full grid grid-rows-4 gap-4'>
            <Analytics />
            <ProductsTable />
        </div>
    )
}

export default page