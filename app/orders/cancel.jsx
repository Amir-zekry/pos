'use client'
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { cancelOrder } from "../lib/actions";
function Cancel({ id }) {
    return (
        <DropdownMenuItem
            variant="destructive"
            onClick={async () => await cancelOrder(id)}
        >
            cancel
        </DropdownMenuItem>
    )
}

export default Cancel