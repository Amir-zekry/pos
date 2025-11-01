-- CreateTable
CREATE TABLE "public"."imageGallery" (
    "id" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "itemId" TEXT,

    CONSTRAINT "imageGallery_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."imageGallery" ADD CONSTRAINT "imageGallery_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "public"."item"("id") ON DELETE SET NULL ON UPDATE CASCADE;
