import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Ellipsis } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { getItems } from '../lib/data'
import Remove from './remove'
import Edit from './edit'
import Link from "next/link"
async function ProductsTable() {
    const products = await getItems()
    return (
        <Table>
            <TableCaption>A list of your items.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">name</TableHead>
                    <TableHead>stock</TableHead>
                    <TableHead>price</TableHead>
                    <TableHead className="text-right">profit</TableHead>
                    <TableHead className="text-right">actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((product) => (
                    <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell className="text-right">{product.profit}</TableCell>
                        <TableCell className="text-right">
                            <Dialog>
                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger>
                                        <Ellipsis size={16} />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DialogTrigger asChild>
                                            <DropdownMenuItem>edit</DropdownMenuItem>
                                        </DialogTrigger>
                                        <DropdownMenuItem>view</DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href={`/items/features/${product.id}`}>features</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href={`/items/images/${product.id}`}>images</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <Remove id={product.id} />
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Edit order</DialogTitle>
                                    </DialogHeader>
                                    <Edit product={product} />
                                </DialogContent>
                            </Dialog>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>)
}

export default ProductsTable