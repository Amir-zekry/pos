/*
  Warnings:

  - You are about to drop the column `customerId` on the `order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."order" DROP CONSTRAINT "order_customerId_fkey";

-- AlterTable
ALTER TABLE "public"."customer" ADD COLUMN     "orderId" TEXT;

-- AlterTable
ALTER TABLE "public"."order" DROP COLUMN "customerId";

-- AddForeignKey
ALTER TABLE "public"."customer" ADD CONSTRAINT "customer_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
