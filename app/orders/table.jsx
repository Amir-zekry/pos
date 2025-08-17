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
import Cancel from "./cancel"
import Remove from "./remove"
import OrdersPagination from "./pagination"
import Search from "./search"
import Edit from "./edit"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
async function OrdersTable({ page }) {
    const orders = await getOrders(page)
    const totalPages = await getTotalPagesForOrders()
    return (
        <Card className='row-span-3'>
            <CardHeader>
                <div className="flex items-center justify-between space-x-4">
                    <Search />
                    <Button asChild>
                        <Link href='/orders/create'>Create new order</Link>
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Id</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Order Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Payment Status</TableHead>
                            <TableHead>Payment Method</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell className="font-medium">{order.id}</TableCell>
                                <TableCell className='flex flex-col'>
                                    <p>{order.customer?.name}</p>
                                    <p className="text-muted-foreground">{order.customer?.number}</p>
                                </TableCell>
                                <TableCell>{order.type}</TableCell>
                                <TableCell>
                                    <Badge variant={order.status === 'canceled' ? 'destructive' : 'default'}>
                                        {order.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Badge variant={order.paymentStatus === 'pending' ? 'destructive' : 'default'}>
                                        {order.paymentStatus}
                                    </Badge>
                                </TableCell>
                                <TableCell>{order.paymentMethod}</TableCell>
                                <TableCell>{order.total} L.E.</TableCell>
                                <TableCell className="text-right">
                                    <div className='flex justify-center ml-auto'>
                                        <Dialog>
                                            <DropdownMenu modal={false}>
                                                <DropdownMenuTrigger>
                                                    <Ellipsis size={16} className="text-right" />
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DialogTrigger asChild>
                                                        <DropdownMenuItem>
                                                            <span>Edit</span>
                                                        </DropdownMenuItem>
                                                    </DialogTrigger>
                                                    <DropdownMenuItem>view</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <Cancel id={order.id} />
                                                    <Remove id={order.id} />
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Edit order</DialogTitle>
                                                </DialogHeader>
                                                <Edit id={order.id} />
                                            </DialogContent>
                                        </Dialog>
                                    </div>
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