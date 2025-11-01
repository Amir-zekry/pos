-- AlterTable
ALTER TABLE "public"."customer" ADD COLUMN     "cartId" TEXT;

-- AlterTable
ALTER TABLE "public"."item" ADD COLUMN     "Image" TEXT;

-- CreateTable
CREATE TABLE "public"."cart" (
    "id" TEXT NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."cartItem" (
    "cartId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "cartItem_pkey" PRIMARY KEY ("cartId","itemId")
);

-- AddForeignKey
ALTER TABLE "public"."customer" ADD CONSTRAINT "customer_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "public"."cart"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cartItem" ADD CONSTRAINT "cartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "public"."cart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cartItem" ADD CONSTRAINT "cartItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "public"."item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
