import { addNewProduct } from '@/app/lib/actions'

function page() {
    return (
        <div className='h-screen w-full'>
            <form action={addNewProduct}>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                </div>
                <div>
                    <label>
                        Stock:
                        <input type="number" name="stock" />
                    </label>
                </div>
                <div>
                    <label>
                        Price:
                        <input type="number" name="price" step="0.01" />
                    </label>
                </div>
                <div>
                    <label>
                        Profit:
                        <input type="number" name="profit" step="0.01" />
                    </label>
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    )
}

export default page