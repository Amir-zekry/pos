'use client'
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { removeProduct } from "../lib/actions";
function Remove({ id }) {
    return (
        <DropdownMenuItem
            variant="destructive"
            onClick={async () => await removeProduct(id)}
        >
            Remove
        </DropdownMenuItem>
    )
}

export default Remove