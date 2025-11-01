import { addFeature } from '@/app/lib/actions'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'

function AddFeature({ id }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='fixed bottom-2 right-2'>Add feature</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Add new feature</DialogTitle>
                <form action={addFeature} className='flex flex-col space-y-2'>
                    <div className='flex items-center'>
                        <input type='text' name='h1' placeholder='Feature Title' />
                        <input type='text' name='image_url' placeholder='Image URL' />
                    </div>
                    <input type='hidden' name='itemId' value={id} />
                    <textarea name='p' placeholder='Feature Description' />
                    <Button type='submit'>Add</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default AddFeature