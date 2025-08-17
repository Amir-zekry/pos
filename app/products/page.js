import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

import Link from "next/link"
import Analytics from "./analytics"
import ProductsTable from "./table"
function page() {
    return (
        <div className="h-full w-full space-y-8">
            <Analytics />
            <Card>
                <CardHeader>
                    <Button asChild>
                        <Link href='products/add'>Add new product</Link>
                    </Button>
                </CardHeader>
                <CardContent>
                    <ProductsTable />
                </CardContent>
            </Card>
        </div>
    )
}

export default page