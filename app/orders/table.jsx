import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getOrders, getTotalPagesForOrders } from "../lib/data"
import { Badge } from "@/components/ui/badge"
import { Ellipsis } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import OrdersPagination from "./pagination"
import Search from "./search"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Remove from "./Remove"
import Edit from "./Edit"
import OrdersDropdownMenuDialog from "./DropDownMenyDialog"
async function OrdersTable({ page }) {
    const orders = await getOrders(page)
    const totalPages = await getTotalPagesForOrders()
    return (
        <Card className='row-span-3'>
            <CardHeader>
                <div className="flex items-center justify-between space-x-4">
                    <Search />
                    <Button asChild>
                        <Link
                            href='https://sort-psi.vercel.app'
                            target="_blank"
                        >
                            Create new order
                        </Link>
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Id</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Item</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Total</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell className="font-medium">{order.id}</TableCell>
                                <TableCell className='flex flex-col'>
                                    <p>{order.customer.name}</p>
                                    <p className="text-muted-foreground">{order.customer.number}</p>
                                </TableCell>
                                <TableCell>{order.item.name}</TableCell>
                                <TableCell>
                                    <Badge variant={order.status === 'canceled' ? 'destructive' : 'default'}>
                                        {order.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{order.total} L.E.</TableCell>
                                <TableCell className='text-right'>
                                    <OrdersDropdownMenuDialog order={order} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter className='mt-auto'>
                <OrdersPagination totalPages={totalPages} />
            </CardFooter>
        </Card>
    )
}

export default OrdersTable