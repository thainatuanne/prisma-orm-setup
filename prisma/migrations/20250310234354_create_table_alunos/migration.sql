-- CreateTable
CREATE TABLE "alunos" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "sobrenome" VARCHAR(100) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "idade" INTEGER,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alunos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "alunos_email_key" ON "alunos"("email");
