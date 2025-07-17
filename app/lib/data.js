'use server'
import { PrismaClient } from "@/lib/generated/prisma"
const db = new PrismaClient()
export async function getOrders() {
    try {
        return await db.order.findMany({
            include: {
                items: true,
                customer: true,
            },
            take: 10,
        })
    } catch (error) {
        throw new Error('Failed to fetch orders')
    }
}
export async function getItems() {
    try {
        return await db.item.findMany({})
    } catch (error) {
        throw new Error('Failed to fetch items')
    }
}
export async function getCustomers() {
    try {
        return await db.customer.findMany({
            take: 10
        })
    } catch (error) {
        throw new Error('Failed to fetch customers')
    }
}
// analytics
export async function getTotalOrders() {
    try {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const tomorrow = new Date(today)
        tomorrow.setDate(today.getDate() + 1)
        return await db.order.count({
            where: {
                createdAt: {
                    gte: today,
                    lt: tomorrow,
                },
            },
        })
    } catch (error) {
        throw new Error('Failed to fetch total orders')
    }
}
export async function getTotalRevenue() {
    try {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const tomorrow = new Date(today)
        tomorrow.setDate(today.getDate() + 1)
        return await db.order.aggregate({
            _sum: {
                total: true,
            },
            where: {
                createdAt: {
                    gte: today,
                    lt: tomorrow,
                },
            },
        })
    } catch (error) {
        throw new Error('Failed to fetch total revenue')
    }
}
export async function getAverageOrderValue() {
    try {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const tomorrow = new Date(today)
        tomorrow.setDate(today.getDate() + 1)
        return await db.order.aggregate({
            _avg: {
                total: true,
            },
            where: {
                createdAt: {
                    gte: today,
                    lt: tomorrow,
                },
            },
        })
    } catch (error) {
        throw new Error('Failed to fetch average order value')
    }
}
