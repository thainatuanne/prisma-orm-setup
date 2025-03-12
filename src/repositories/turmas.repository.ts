import { Turma, Matricula } from "@prisma/client";
import { prismaClient } from "../database/prisma.client";
import { CreateMatriculaDTO } from "./matriculas.repository";

interface CreateTurmaDTO {
    nome: string;
    dataInicio: Date;
    dataTermino: Date;
}

export class TurmasRepository {

    // lista todas as turmas com suas matriculas
    async listAll(): Promise<Turma[]> {
        const listaTurma = await prismaClient.turma.findMany({
            include: { matriculas: true }, // inclue as matriculas associadas
        });

        return listaTurma;
    }

    // busca uma turma por id 

    async getById(id: number): Promise<Turma | null> {
        const turma = await prismaClient.turma.findUnique({
            where: { id: 1 }, // colocar n do id
            include: { matriculas: true }, // inclui as matriculas da turma
        });

        return turma;
    }

    // cria uma nova turma

    async create(dto: CreateTurmaDTO): Promise<Turma> {
        const novaTurma = await prismaClient.turma.create({
            data: { ...dto },
        });

        return novaTurma;
    }

    // atualiza dados de uma turma

    async update(id: number, dto: Partial<CreateTurmaDTO>): Promise<Turma | null> {
        const turmaAtualizada = await prismaClient.turma.update({
            where: { id },
            data: { ...dto },
        });

        return turmaAtualizada;
    }

    async enrollStudent(dto: CreateMatriculaDTO): Promise<Matricula> {
        const matriculaAlunoTurma = await prismaClient.matricula.create({
            data: {
                idTurma: dto.idTurma,
                idAluno: dto.idAluno,
                dataMatricula: dto.dataMatricula,
                situacao: dto.situacao,
            },
        });

        return matriculaAlunoTurma;
    }

    // deleta uma turma

    async delete(id: number): Promise<void> {
        await prismaClient.turma.delete({
            where: { id }
        }); // remover a turma
        await prismaClient.matricula.deleteMany({
            where: { idTurma: id }
        }); // remove as matrículas associadas
    }
}