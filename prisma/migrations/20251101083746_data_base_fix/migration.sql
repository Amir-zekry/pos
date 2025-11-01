/*
  Warnings:

  - You are about to drop the column `cartId` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `paymentMethod` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `paymentStatus` on the `order` table. All the data in the column will be lost.
  - You are about to drop the `cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cartItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `orderItem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `governorate` to the `customer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."cartItem" DROP CONSTRAINT "cartItem_cartId_fkey";

-- DropForeignKey
ALTER TABLE "public"."cartItem" DROP CONSTRAINT "cartItem_itemId_fkey";

-- DropForeignKey
ALTER TABLE "public"."customer" DROP CONSTRAINT "customer_cartId_fkey";

-- DropForeignKey
ALTER TABLE "public"."orderItem" DROP CONSTRAINT "orderItem_itemId_fkey";

-- DropForeignKey
ALTER TABLE "public"."orderItem" DROP CONSTRAINT "orderItem_orderId_fkey";

-- AlterTable
ALTER TABLE "public"."customer" DROP COLUMN "cartId",
DROP COLUMN "email",
ADD COLUMN     "governorate" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."item" DROP COLUMN "stock",
ADD COLUMN     "orderId" TEXT;

-- AlterTable
ALTER TABLE "public"."order" DROP COLUMN "paymentMethod",
DROP COLUMN "paymentStatus";

-- DropTable
DROP TABLE "public"."cart";

-- DropTable
DROP TABLE "public"."cartItem";

-- DropTable
DROP TABLE "public"."orderItem";

-- AddForeignKey
ALTER TABLE "public"."item" ADD CONSTRAINT "item_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
