import React from 'react'
import AddImage from './AddImage'
import Image from 'next/image'
import { getImages } from '@/app/lib/data'
import { Button } from '@/components/ui/button'
import { removeImage } from '@/app/lib/actions'

async function page({ params }) {
    const { id } = await params
    const images = await getImages(id)
    return (
        <div>
            {images.map((image) => (
                <div key={image.id}>
                    <Image src={`/${image.image_url}`} alt="item image" width={200} height={200} />
                    <Button
                        onClick={async () => {
                            'use server'
                            await removeImage(image.id, id)
                        }}
                    >
                        Remove
                    </Button>
                </div>
            ))}
            <AddImage id={id} />
        </div>
    )
}

export default page