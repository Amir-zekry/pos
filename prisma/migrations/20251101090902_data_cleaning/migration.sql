/*
  Warnings:

  - You are about to drop the column `type` on the `order` table. All the data in the column will be lost.
  - Made the column `createdAt` on table `customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image_url` on table `feature` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `profit` on table `item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Image` on table `item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `discription` on table `item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `order` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."customer" ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."feature" ALTER COLUMN "image_url" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."item" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "profit" SET NOT NULL,
ALTER COLUMN "Image" SET NOT NULL,
ALTER COLUMN "discription" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."order" DROP COLUMN "type",
ALTER COLUMN "createdAt" SET NOT NULL;
