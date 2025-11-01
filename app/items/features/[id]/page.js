import React from 'react'
import Features from './Features'
import AddFeature from './AddFeature'

async function page({ params }) {
    const { id } = await params
    return (
        <div>
            <Features id={id} />
            <AddFeature id={id} />
        </div>
    )
}

export default page