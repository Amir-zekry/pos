-- DropForeignKey
ALTER TABLE "orderItem" DROP CONSTRAINT "orderItem_orderId_fkey";

-- AddForeignKey
ALTER TABLE "orderItem" ADD CONSTRAINT "orderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
