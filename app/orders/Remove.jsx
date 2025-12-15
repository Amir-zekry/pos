'use client'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { removeOrder } from '../lib/actions'

function Remove({ id }) {
    return (
        <DropdownMenuItem
            variant="destructive"
            onClick={() => removeOrder(id)}
        >
            remove
        </DropdownMenuItem>
    )
}

export default Remove