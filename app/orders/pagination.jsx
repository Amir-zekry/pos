'use client'

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React from 'react'

function OrdersPagination({ totalPages }) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    const currentPage = parseInt(searchParams.get('page') || '1')

    function createPageHref(page) {
        const params = new URLSearchParams(searchParams)
        params.set('page', page.toString())
        return `${pathname}?${params.toString()}`
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href={currentPage > 1 ? createPageHref(currentPage - 1) : undefined}
                    />
                </PaginationItem>

                {Array.from({ length: totalPages }).map((_, i) => {
                    const page = i + 1
                    return (
                        <PaginationItem key={page}>
                            <PaginationLink
                                href={createPageHref(page)}
                                isActive={page === currentPage}
                            >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    )
                })}

                <PaginationItem>
                    <PaginationNext
                        href={currentPage < totalPages ? createPageHref(currentPage + 1) : undefined}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default OrdersPagination
