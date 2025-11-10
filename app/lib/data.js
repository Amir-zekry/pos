'use server'
import { PrismaClient } from "@prisma/client"
import { unstable_noStore } from "next/cache"
const db = new PrismaClient()
export async function getOrders(page) {
    try {
        return await db.order.findMany({
            include: {
                item: true,
                customer: true,
            },
            take: 5,
            skip: (page - 1) * 5,
        })
    } catch (error) {
        throw new Error('Failed to fetch orders')
    }
}
export async function getTotalPagesForOrders() {
    try {
        const totalOrders = await db.order.count()
        return Math.ceil(totalOrders / 5) // Assuming 5 orders per page
    } catch (error) {
        throw new Error('Failed to fetch total pages for orders')
    }
}
export async function getItems() {
    unstable_noStore()
    try {
        return await db.item.findMany({})
    } catch (error) {
        throw new Error('Failed to fetch items')
    }
}
export async function getFeatures(id) {
    try {
        return await db.feature.findMany({
            where: {
                itemId: id
            }
        })
    } catch (error) {
        throw new Error('Failed to fetch features for this item')
    }
}
export async function getImages(id) {
    try {
        return await db.imageGallery.findMany({
            where: {
                itemId: id
            }
        })
    } catch (error) {
        throw new Error('Failed to fetch images for this item')
    }
}

