'use server'
import { PrismaClient } from "@/lib/generated/prisma"
import { revalidatePath } from "next/cache"
const db = new PrismaClient()
export async function createNewOrder(formData) {
    try {
        const customerId = formData.get('customerId')
        const total = parseFloat(formData.get('total'))
        const itemsJson = formData.get('items')
        const items = JSON.parse(itemsJson)
        const orderType = formData.get('type')
        const paymentMethod = formData.get('paymentMethod')
        const paymentStatus = formData.get('paymentStatus')

        await db.order.create({
            data: {
                total,
                type: orderType,
                paymentMethod,
                paymentStatus,
                customer: { connect: { id: customerId } },
                items: {
                    create: items.map((item) => ({
                        item: { connect: { id: item.id } },
                        quantity: item.amount,
                    })),
                },
            },
        })
    } catch (error) {
        console.error(error)
        throw new Error('Failed to create order')
    }
}
export async function addNewProduct(formData) {
    try {
        await db.item.create({
            data: {
                name: formData.get('name'),
                stock: parseInt(formData.get('stock')),
                price: parseFloat(formData.get('price'))
            }
        })
    } catch (error) {
        throw new Error('Failed to create item')
    }
}
export async function createNewCustomer({ name, number, address }) {
    try {
        await db.customer.create({
            data: {
                name,
                number,
                address,
            },
        })
    } catch (error) {
        throw error
    }
    revalidatePath('orders/create/details')
}
export async function cancelOrder() {
    try {
        await db.order.update({
            where: { id: orderId },
            data: { status: 'canceled' }
        })
    } catch (error) {
        throw new Error('Failed to cancel order')
    }
}
export async function removeOrder() {
    try {
        await db.order.delete({
            where: { id: orderId }
        })
    } catch (error) {
        throw new Error('Failed to remove order')
    }
}
