# Teste Dev Ellevo

## Aplicação

Criar um webapp de agenda de contatos.

## Features

### Autenticação com usuário e senha

- Não deve ser possível ter acesso a nenhuma outra funcionalidade do webapp caso esteja deslogado

### Listar todos os contatos

- Lista simples com nome do contato que, quando clicado, abre uma página para visualização de contatos
- Os contatos deverão ser ordenados por ordem alfabética

### Visualizar um contato específico

- Exibir campos: nome, telefone e e-mail

### Cadastrar contatos

- Formulário com campos de nome, telefone e e-mail
- Não é necessário conectividade com banco de dados. Os contatos deverão ser salvos em IndexedDB

### Editar contatos

- Deve ser possível editar qualquer um dos campos existentes no cadastro de contatos

### Excluir contatos

- Permitir excluir os usuários

## Premissas

- Utilizar ASP Net Core 2.2
- Implementar uma API REST
- Utilizar Angular 6 ou 7
- Utilizar biblioteca Angular Material para estilos e componentes base. Link: https://material.angular.io/
- O webapp deve ser composto por, no mínimo, 3 rotas
- Todas as rotas devem ser lazy loaded
- O webapp deve ser responsivo utilizar o máximo de recursos disponíveis do framework (pipes, diretivas, componentes, serviços)
