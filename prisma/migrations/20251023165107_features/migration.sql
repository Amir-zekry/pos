-- CreateTable
CREATE TABLE "public"."feature" (
    "id" TEXT NOT NULL,
    "h1" TEXT NOT NULL,
    "p" TEXT NOT NULL,
    "itemId" TEXT,

    CONSTRAINT "feature_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."feature" ADD CONSTRAINT "feature_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "public"."item"("id") ON DELETE SET NULL ON UPDATE CASCADE;
