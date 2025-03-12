# Prisma ORM Setup

![Prisma](https://img.shields.io/badge/Prisma-ORM-blue?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-Programming-blue?style=for-the-badge)

## 📌 Sobre o Projeto
Este projeto implementa um sistema de gerenciamento de turmas e matrículas utilizando **Prisma ORM** com **Node.js** e **TypeScript**. Ele permite:
- Criar, listar, atualizar e deletar **turmas**.
- Matricular **alunos** em turmas.
- Listar e gerenciar **matrículas** associadas a cada turma.

## 🚀 Tecnologias Utilizadas
- **Node.js** - Ambiente de execução JavaScript
- **TypeScript** - Tipagem estática para JavaScript
- **Prisma ORM** - Gerenciamento de banco de dados
- **PostgreSQL** - Banco de dados utilizado (pode ser substituído por outro compatível com Prisma)

## ⚙️ Configuração do Projeto
### 1️⃣ **Clonar o repositório**
```bash
git clone https://github.com/thainatuanne/prisma-orm-setup.git
cd prisma-orm-setup
```

### 2️⃣ **Instalar as dependências**
```bash
npm install
```

### 3️⃣ **Configurar o banco de dados**
Crie um arquivo **.env** na raiz do projeto e adicione a string de conexão do seu banco de dados:
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/seu-banco"
```

### 4️⃣ **Rodar as migrations do Prisma**
```bash
npx prisma migrate dev --name init
```

### 5️⃣ **Executar o servidor**
```bash
npm run dev
```

💡 *Desenvolvido com Prisma ORM para facilitar o gerenciamento do banco de dados!* 🚀
