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
        const items = await db.item.findMany()
        return items
    } catch (error) {
        console.log(error)
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
// analytics

export async function getTotalItems() {
    try {
        const totalItems = await db.item.count()
        return totalItems || 0
    } catch (error) {
        throw new Error('Failed to fetch total items')
    }
}
export async function getTopSellingItem() {
    try {
        const topItem = await db.order.groupBy({
            by: ["itemId"],
            _count: { itemId: true },
            orderBy: { _count: { itemId: "desc" } },
            take: 1,
        });
        const itemId = topItem[0].itemId;
        const product = await db.item.findUnique({
            where: { id: itemId },
            select: { name: true },
        });

        return product.name || 'n\a'
    } catch (error) {
        throw new Error("Failed to fetch top selling item");
    }
}
export async function getAverageProductPrice() {
    try {
        const avg = await db.item.aggregate({
            _avg: {
                price: true,
            },
        })
        return avg || 0
    } catch (error) {
        throw new Error('Failed to fetch average product price')
    }
}

// orders analytics

export async function getTotalOrders() {
    try {
        return await db.order.count()
    } catch (error) {
        throw new Error('Failed to fetch total orders')
    }
}
export async function getTotalRevenue() {
    try {
        return await db.order.aggregate({
            _sum: {
                total: true,
            },
        })
    } catch (error) {
        throw new Error('Failed to fetch total revenue')
    }
}
export async function getAverageOrderValue() {
    try {
        return await db.order.aggregate({
            _avg: {
                total: true,
            },
        })
    } catch (error) {
        throw new Error('Failed to fetch average order value')
    }
}

