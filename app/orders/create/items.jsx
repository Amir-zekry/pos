import { getItems } from '@/app/lib/data';
import Item from './item';
async function Items() {
    const items = await getItems()
    return (
        <section className='grid grid-cols-3 grid-rows-4 gap-4 w-3/4'>
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </section>
    )
}

export default Items