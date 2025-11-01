import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import React from 'react'
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle,
} from "@/components/ui/field"
import { Input } from '@/components/ui/input'
import { addImage } from '@/app/lib/actions'


function AddImage({ id }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='fixed bottom-2 right-2'>Add image</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add image</DialogTitle>
                </DialogHeader>
                <form action={addImage} className='flex items-end space-x-16'>
                    <FieldSet>
                        <FieldLegend>Image</FieldLegend>
                        <FieldDescription>Here u can add an item image</FieldDescription>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="image_url">image url</FieldLabel>
                                <Input name='image_url' id="image_url" autoComplete="off" placeholder="image.png" />
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <input type="hidden" name="itemId" value={id} />
                    <Button type='submit'>Add</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default AddImage