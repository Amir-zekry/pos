import { removeFeature } from '@/app/lib/actions'
import { getFeatures } from '@/app/lib/data'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

async function Features({ id }) {
    const features = await getFeatures(id)
    return (
        <div>
            {features.map((feature) => (
                <Card key={feature.id}>
                    <CardHeader>
                        <CardTitle>{feature.h1}</CardTitle>
                        <CardDescription>{feature.p}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Image src={feature.image_url} alt='feature image' width={400} height={400} />
                    </CardContent>
                    <CardFooter>
                        <Button
                            variant='destructive'
                            onClick={async () => {
                                'use server'
                                await removeFeature(feature.id, id)
                            }}
                        >
                            Remove
                        </Button>
                    </CardFooter>
                </Card>
            ))}

        </div>
    )
}

export default Features