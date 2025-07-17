'use client'

import { useSelector } from "react-redux"

function TotalPrice() {
    const total = useSelector((state) => state.order.total)
    return (
        <p>Total: {total} L.E.</p>
    )
}

export default TotalPrice