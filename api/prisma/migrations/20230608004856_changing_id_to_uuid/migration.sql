/*
  Warnings:

  - The primary key for the `Earnings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Expenses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Mileage` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Earnings" DROP CONSTRAINT "Earnings_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Earnings_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Earnings_id_seq";

-- AlterTable
ALTER TABLE "Expenses" DROP CONSTRAINT "Expenses_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Expenses_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Expenses_id_seq";

-- AlterTable
ALTER TABLE "Mileage" DROP CONSTRAINT "Mileage_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Mileage_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Mileage_id_seq";
