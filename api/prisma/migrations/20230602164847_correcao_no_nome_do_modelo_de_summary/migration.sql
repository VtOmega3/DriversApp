/*
  Warnings:

  - You are about to drop the `Summay` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Summay";

-- CreateTable
CREATE TABLE "Summary" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "totalEarnings" DOUBLE PRECISION NOT NULL,
    "totalExpenses" DOUBLE PRECISION NOT NULL,
    "totalMileage" DOUBLE PRECISION NOT NULL,
    "dailyProfit" DOUBLE PRECISION NOT NULL,
    "profitPerMile" DOUBLE PRECISION NOT NULL,
    "averageEarning" DOUBLE PRECISION NOT NULL,
    "averageExpenses" DOUBLE PRECISION NOT NULL,
    "averageDailyProfit" DOUBLE PRECISION NOT NULL,
    "averageProfitPerMile" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Summary_pkey" PRIMARY KEY ("id")
);
