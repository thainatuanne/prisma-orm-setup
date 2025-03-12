import { Aluno, Matricula } from "@prisma/client";
import { prismaClient } from "../database/prisma.client";

// dto =: data transfer object =: objeto de transferencia de dados
interface CreateAlunoDTO {
    nome: string;
    sobrenome: string;
    cpf: string;
    email: string;
    ativo?: boolean;
    idade?: number;
}
// repository => um tipo de classeconceito para algo que armazena ou geerencia os dados da aplicação

export class AlunosRepository {

    async listAll(): Promise<Aluno[]> {
        const listaAlunos = await prismaClient.aluno.findMany();
        // SELECT * FROM alunos;

        return listaAlunos;
    }

    // se retornar trás se não retornar trás nulo
    async getById(id: number): Promise<Aluno | null> {
        const aluno = await prismaClient.aluno.findUnique({
            where:
                { id: 1 }
        });
        // SELECT * FROM alunos WHERE id = 1;

        return aluno;
    }

    async create(dto: CreateAlunoDTO): Promise<Aluno> {
        const novoAluno = await prismaClient.aluno.create({
            data: { ...dto },
        });

        // INSERT TO alunos (nome, sobrenome, ...) VALUES ("Thainá", "...", ...)

        return novoAluno
    }

    // conforme documentação

    //turmas repsoitorys

    // add update

    // add delete

    // atualiza um aluno por ID
    // update
    async update(id: number, dto: Partial<CreateAlunoDTO>): Promise<Aluno | null> { // partial para atualização parcial apenas do que é necessário
        const alunoAtualizado = await prismaClient.aluno.update({
            where: { id },
            data: { ...dto },
        });

        return alunoAtualizado
    }

    // deleta um aluno por ID
    // delte

    async delete(id: number): Promise<void> {
        await prismaClient.aluno.delete({
            where: { id }
        });
    }
}