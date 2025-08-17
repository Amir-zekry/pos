'use server'
import { PrismaClient } from "@/lib/generated/prisma"
import { revalidatePath } from "next/cache"
import id from "zod/v4/locales/id.cjs"
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
                ...(customerId
                    ? { customer: { connect: { id: customerId } } }
                    : {}), // Only connect if customerId is present
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
                price: parseFloat(formData.get('price')),
                profit: parseFloat(formData.get('profit')),
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
export async function cancelOrder(id) {
    try {
        await db.order.update({
            where: { id: id },
            data: { status: 'canceled' }
        })
    } catch (error) {
        throw new Error('Failed to cancel order')
    }
    revalidatePath('orders')
}
export async function removeOrder(id) {
    try {
        await db.order.delete({
            where: { id: id }
        })
    } catch (error) {
        throw new Error('Failed to remove order')
    }
    revalidatePath('orders')
}
export async function editOrder(formData) {
    try {
        await db.order.update({
            where: { id: formData.get('id') },
            data: {
                status: formData.get('status'),
                paymentStatus: formData.get('paymentStatus'),
                paymentMethod: formData.get('paymentMethod')
            }
        })
    } catch (error) {
        throw new Error('Failed to edit order')
    }
}
export async function startNewDay() {
    const now = new Date();

    await db.settings.upsert({
        where: { key: 'dayStart' },
        update: { value: now.toISOString() },
        create: { key: 'dayStart', value: now.toISOString() }
    });
    revalidatePath('/orders')
}
export async function removeProduct(id) {
    try {
        await db.item.delete({
            where: { id: id }
        })
    } catch (error) {
        throw new Error('Failed to remove product')
    }
    revalidatePath('/products')
}
