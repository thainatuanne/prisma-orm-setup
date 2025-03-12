import { Matricula, SituacaoAluno } from "@prisma/client";
import { prismaClient } from "../database/prisma.client";

export interface CreateMatriculaDTO {
    idTurma: number;
    idAluno: number;
    dataMatricula: Date;
    situacao: SituacaoAluno;
}

export class MatriculasRepository {

    // lista todas as matriculas com dados de aluno e turma

    async listAll(): Promise<Matricula[]> {
        const listaMatricula = await prismaClient.matricula.findMany({
            include: {
                aluno: true, turma: true
            },
        });

        return listaMatricula;
    }

    // busca uma matricula por id

    async getById(id: number): Promise<Matricula | null> {
        const buscaMatricula = await prismaClient.matricula.findUnique({
            where: { id },
            include: { aluno: true, turma: true },
        });

        return buscaMatricula;
    }

    // cria uma nova matricula

    async create(dto: CreateMatriculaDTO): Promise<Matricula> {
        const { idAluno, idTurma } = dto;

        // verifica se o aluno existe
        const aluno = await prismaClient.aluno.findUnique({
            where: { id: idAluno }
        });
        if (!aluno) throw new Error('Aluno não encontrado');

        // verifica se a turma existe
        const turma = await prismaClient.turma.findUnique({
            where: { id: idTurma }
        });
        if (!turma) throw new Error('Turma não encontrada.');

        // verifica se o aluno já está matriculado na turma
        const matriculaExistente = await prismaClient.matricula.findFirst({
            where: { idAluno, idTurma },
        });

        if (!matriculaExistente) throw new Error('Aluno já matriculado nessa turma.')

        // cria uma nova matricula

        const novaMatricula = await prismaClient.matricula.create({
            data: { ...dto },
        })

        return novaMatricula
    }

    // atualiza uma matricula por ID

    async update(id: number, dto: Partial<CreateMatriculaDTO>): Promise<Matricula | null> { // partial para atualização parcial apenas do que é necessário
        const atualizaMatricula = await prismaClient.matricula.update({
            where: { id },
            data: { ...dto },
        });

        return atualizaMatricula;
    }

    // deleta uma matricula por id

    async delete(id: number): Promise<void> {
        await prismaClient.matricula.delete({
            where: { id }
        });
    }
}