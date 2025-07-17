import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
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
import { getOrders } from "../lib/data"
import { Badge } from "@/components/ui/badge"
import { Ellipsis } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
async function OrdersTable() {
    const orders = await getOrders()
    return (
        <Card>
            <CardHeader>
                <Button asChild>
                    <Link href='/orders/create'>Create new order</Link>
                </Button>
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
                                    <p>{order.customer.name}</p>
                                    <p className="text-muted-foreground">{order.customer.number}</p>
                                </TableCell>
                                <TableCell>{order.type}</TableCell>
                                <TableCell>
                                    <Badge variant={order.status === 'canceled ' ? 'destructive' : 'default'}>
                                        {order.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Badge variant={order.status === 'pending ' ? 'destructive' : 'default'}>
                                        {order.paymentStatus}
                                    </Badge>
                                </TableCell>
                                <TableCell>{order.paymentMethod}</TableCell>
                                <TableCell>{order.total} L.E.</TableCell>
                                <TableCell className="text-right">
                                    <div className='flex justify-center ml-auto'>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>
                                                <Ellipsis size={16} className="text-right" />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem>edit</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem variant="destructive">cancel</DropdownMenuItem>
                                                <DropdownMenuItem variant="destructive">remove</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default OrdersTable