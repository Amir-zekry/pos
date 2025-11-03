'use server'
import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"
const db = new PrismaClient()
export async function addNewProduct(formData) {
    try {
        await db.item.create({
            data: {
                name: formData.get('name'),
                discription: formData.get('discription'),
                heroImage: formData.get('heroImage'),
                image: formData.get('image'),
                price: parseFloat(formData.get('price')),
                profit: parseFloat(formData.get('profit')),
            }
        })
    } catch (error) {
        console.error(error)
    }
}
export async function removeProduct(id) {
    try {
        await db.item.delete({
            where: { id: id }
        })
    } catch (error) {
        throw error
    }
    revalidatePath('/products')
}
export async function editProduct(formData) {
    try {
        await db.item.update({
            where: { id: formData.get('id') },
            data: {
                name: formData.get('name'),
                stock: parseInt(formData.get('stock')),
                price: parseFloat(formData.get('price')),
                profit: parseFloat(formData.get('profit')),
            }
        })
    } catch (error) {
        throw new Error('Failed to edit product')
    }
    revalidatePath('/products')
}
export async function addFeature(formData) {
    try {
        const itemId = formData.get('itemId')
        const h1 = formData.get('h1')
        const p = formData.get('p')
        const image_url = formData.get('image_url')
        await db.feature.create({
            data: {
                h1,
                p,
                item: { connect: { id: itemId } }
                , image_url
            }
        })
        revalidatePath(`/items/features/${itemId}`)
    } catch (error) {
        throw new Error('Failed to add feature')
    }
}
export async function removeFeature(id, itemId) {
    try {
        await db.feature.delete({
            where: { id: id }
        })
        revalidatePath(`/items/features/${itemId}`)
    } catch (error) {
        throw new Error('Failed to remove feature')
    }
}
export async function addImage(formData) {
    try {
        await db.imageGallery.create({
            data: {
                image_url: formData.get("image_url"),
                item: { connect: { id: formData.get("itemId") } }
            },
        })
        revalidatePath(`/items/images/${formData.get("itemId")}`)
    } catch (error) {
        throw new Error('Failed to add image')
    }
}
export async function removeImage(id, itemId) {
    try {
        await db.imageGallery.delete({
            where: { id: id }
        })
        revalidatePath(`/items/images/${itemId}`)
    } catch (error) {
        throw new Error('Failed to remove image')
    }
}
