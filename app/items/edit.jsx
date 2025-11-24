import { DialogClose } from "@/components/ui/dialog"
import { editProduct } from "../lib/actions"

function Edit({ product }) {
    return (
        <form action={editProduct}>
            <input type="hidden" name="id" value={product.id} />
            <input type="text" name="name" placeholder="Product Name" defaultValue={product.name} />
            <input type="number" name="price" placeholder="Price" defaultValue={product.price} />
            <input type="number" name="profit" placeholder="Profit" defaultValue={product.profit} />
            <DialogClose asChild>
                <button type="submit">Save</button>
            </DialogClose>
        </form>
    )
}

export default Edit