-- CreateTable
CREATE TABLE "Submission" (
    "id" SERIAL NOT NULL,
    "githubLink" TEXT NOT NULL,
    "demoLink" TEXT NOT NULL,
    "pptLink" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "teamRef" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);
