'use server'
import { PrismaClient } from "@/lib/generated/prisma"
const db = new PrismaClient()
export async function getOrders(page) {
    try {
        return await db.order.findMany({
            include: {
                items: true,
                customer: true,
            },
            take: 5,
            skip: (page - 1) * 5,
        })
    } catch (error) {
        throw new Error('Failed to fetch orders')
    }
}
export async function getOrderById(id) {
    try {
        return await db.order.findUnique({
            where: { id }
        })
    } catch (error) {
        throw new Error('Failed to fetch order by ID')
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
export async function getProducts() {
    try {
        return await db.item.findMany({})
    } catch (error) {
        throw new Error('Failed to fetch products')
    }
}
// analytics
export async function getTotalOrders() {
    try {
        // Get the saved day start from settings
        const setting = await db.settings.findUnique({
            where: { key: 'dayStart' }
        });

        // If it doesn't exist, default to now
        const dayStart = setting ? new Date(setting.value) : new Date();

        return await db.order.count({
            where: {
                createdAt: {
                    gte: dayStart
                },
            },
        });
    } catch (error) {
        throw new Error('Failed to fetch total orders');
    }
}
export async function getTotalRevenue() {
    try {
        // Get saved start of day
        const setting = await db.settings.findUnique({
            where: { key: 'dayStart' }
        });
        const dayStart = setting ? new Date(setting.value) : new Date();

        // Aggregate total revenue since dayStart
        const result = await db.order.aggregate({
            _sum: {
                total: true,
            },
            where: {
                createdAt: {
                    gte: dayStart,
                },
            },
        });

        return result._sum.total || 0; // Return 0 if no orders
    } catch (error) {
        throw new Error('Failed to fetch total revenue');
    }
}
export async function getAverageOrderValue() {
    try {
        // Get saved start of day
        const setting = await db.settings.findUnique({
            where: { key: 'dayStart' }
        });
        const dayStart = setting ? new Date(setting.value) : new Date();

        // Aggregate average order value since dayStart
        const result = await db.order.aggregate({
            _avg: {
                total: true,
            },
            where: {
                createdAt: {
                    gte: dayStart,
                },
            },
        });

        return result._avg.total || 0; // Return 0 if no orders
    } catch (error) {
        throw new Error('Failed to fetch average order value');
    }
}

