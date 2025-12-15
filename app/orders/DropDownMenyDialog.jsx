"use client"

import { useState } from "react"
import { Ellipsis } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

import Edit from "./Edit"
import Remove from "./Remove"

export default function OrdersDropdownMenuDialog({ order }) {
    const [showEditDialog, setShowEditDialog] = useState(false)
    const [showViewDialog, setShowViewDialog] = useState(false)

    return (
        <>
            {/* DROPDOWN */}
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Ellipsis size={16} />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuItem onSelect={() => setShowEditDialog(true)}>
                        Edit
                    </DropdownMenuItem>

                    <DropdownMenuItem onSelect={() => setShowViewDialog(true)}>
                        View
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <Remove id={order.id} />
                </DropdownMenuContent>
            </DropdownMenu>

            {/* EDIT DIALOG */}
            <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle>Edit Order</DialogTitle>
                    </DialogHeader>

                    <Edit id={order.id} />

                </DialogContent>
            </Dialog>

            {/* VIEW DIALOG */}
            <Dialog open={showViewDialog} onOpenChange={setShowViewDialog}>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle>Order Details</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-3 text-sm">
                        <p>{order.customer.name}</p>
                        <p className="text-muted-foreground">{order.customer.number}</p>
                        <p>{order.quantity}</p>
                        <p>{order.customer.address}</p>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Close</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
