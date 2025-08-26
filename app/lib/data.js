'use server'
import { PrismaClient } from "@prisma/client"
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
// analytics
export async function getTotalOrders() {
    try {
        return await db.order.count()
    } catch (error) {
        throw new Error('Failed to fetch total orders');
    }
}
export async function getTotalRevenue() {
    try {
        return await db.order.aggregate({
            _sum: {
                total: true,
            }
        })
    } catch (error) {
        throw new Error('Failed to fetch total revenue');
    }
}
export async function getAverageOrderValue() {
    try {
        return await db.order.aggregate({
            _avg: {
                total: true,
            }
        })
    } catch (error) {
        throw new Error('Failed to fetch average order value');
    }
}
export async function getTotalProducts() {
    try {
        return await db.item.count()
    } catch (error) {
        throw new Error('Failed to fetch total products')
    }
}
export async function getTopSellingProduct() {
    try {
        const result = await db.orderItem.groupBy({
            by: ['itemId'],
            _sum: {
                quantity: true,
            },
            orderBy: {
                _sum: {
                    quantity: 'desc',
                },
            },
            take: 1,
        });

        if (result.length === 0) return null;

        const topProduct = await db.item.findUnique({
            where: { id: result[0].itemId }
        });

        return topProduct ? topProduct.name : null;
    } catch (error) {
        throw new Error('Failed to fetch top selling product')
    }
}
export async function getLowStockAlerts(threshold = 5) {
    try {
        return await db.item.count({
            where: {
                stock: {
                    lt: threshold
                }
            }
        })
    } catch (error) {
        throw new Error('Failed to fetch low stock products')
    }
}

