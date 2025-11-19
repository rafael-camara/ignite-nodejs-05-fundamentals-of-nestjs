<div align="center" style="display: flex; align-items: center; justify-content: center; gap: 20px;">
  <img alt="Logo Node.JS" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" width="100px" />

<span style="font-size: 50px;">✚</span>

  <img alt="Logo NestJS" src="https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg" width="100px" />
</div>

<p align="center">
  <a href="LICENSE"><img  src="https://img.shields.io/static/v1?label=License&message=MIT&color=8cc84b&labelColor=202024" alt="License"></a>
</p>

# 💻 Fórum Q&A API

Este projeto baseia-se em um fórum de perguntas e respostas: construído com NestJS e Prisma e seguindo os princípios de Clean Architecture, ministrado pela [Rocketseat](https://github.com/rocketseat) com o educador [Diego Fernandes](https://github.com/diego3g).

## 🎯 Arquitetura

### Clean Architecture

- `src/core`: domínio e regras de negócio da aplicação (Entidades, Value Objects, Use Cases, Repositories, etc.)
- `src/domain`: Lógica de negócio da aplicação dividida em contextos (forum, notification)
- `src/infra`: infraestrutura da aplicação (Banco de dados, Cache, Autenticação, Controladores HTTP, etc.)
- `test`: testes da aplicação (factories, in-memory, etc.)

## 🚀 Rotas

Autenticação:

- `POST - /sessions`: Autentica um usuário e retorna um token JWT
- `POST - /accounts`: Cria um usuário

Perguntas:

- `POST - /questions`: Cria uma nova pergunta
- `GET - /questions`: Busca as perguntas mais recentes
- `GET - /questions/:slug`: Busca uma pergunta pelo slug
- `PUT - /questions/:id`: Edita uma pergunta
- `DELETE - /questions/:id`: Deleta uma pergunta

Respostas:

- `POST - /questions/:questionId/answers`: Cria uma nova resposta para uma pergunta
- `GET -  /questions/:questionId/answers`: Busca as respostas de uma pergunta
- `PUT - /answers/:id`: Edita uma resposta
- `DELETE - /answers/:id`: Deleta uma resposta
- `PATCH /answers/:answerId/choose-as-best`: Marca uma resposta como a melhor resposta de uma pergunta

Comentários:

- `POST - /questions/:questionId/comments`: Cria um comentário para uma pergunta
- `GET - /questions/:questionId/comments`: Busca os comentários de uma pergunta
- `DELETE - /questions/comments/:id`: Deleta um comentário de uma pergunta

---

- `POST /answers/:answerId/comments`: Cria um comentário para uma resposta
- `GET - /answers/:answerId/comments`: Busca os comentários de uma resposta
- `DELETE - /answers/comments/:id`: Deleta um comentário de uma resposta

Anexos:

- `POST - /attachments`: Faz o upload de um anexo

Notificações:

- `PATCH - /notifications/:notificationId/read`: Marca uma notificação como lida

## 📦 Instalação

1. Clonar o repositório

```bash
git clone https://github.com/rafael-camara/ignite-nodejs-05-fundamentals-of-nestjs.git
cd ignite-nodejs-05-fundamentals-of-nestjs
```

2. Instalar as dependências

```bash
pnpm install
```

3. Configurar as variáveis de ambiente

```bash
cp .env.example .env
```

4. Iniciar o banco de dados com Docker

```bash
docker compose up -d
```

5. Executar as migrations

```bash
pnpm prisma migrate dev
```

6. Executar o servidor

```bash
pnpm run start:dev
```

## 🧪 Testes

1. Executar os testes

```bash
pnpm test
```

2. Executar os testes de e2e

```bash
pnpm test:e2e
```

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
