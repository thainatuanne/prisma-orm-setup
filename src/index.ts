import { Aluno, PrismaClient } from "@prisma/client";
import { AlunosRepository } from "./repositories/aluno.repository";

const prismaClient = new PrismaClient();

const alunosRepository = new AlunosRepository();

alunosRepository.create({
    nome: 'Thainá Tuanne',
    sobrenome: 'Borges da Silva',
    cpf: '12345678912',
    email: 'thaina@outlook.com',
    ativo: false,
    idade: 28,
})