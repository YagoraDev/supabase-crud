# supabase-crud

Projeto desenvolvido com **Node.js**, **Express** e **Supabase**, com o objetivo de implementar um sistema **CRUD simples** para gerenciamento de clientes.

---

## Estrutura do projeto

- `src/index.js` — Implementação das operações CRUD (rotas e servidor)  
- `src/supabaseClient.js` — Configuração da conexão com o Supabase

---

## Pré-requisitos

- Node.js instalado (versão 20 ou superior recomendada)  
- Conta no Supabase com um projeto configurado  
- Editor de código (ex: Visual Studio Code)  
- Postman ou outro cliente HTTP para testar as APIs (opcional)

---

## Passo a passo para rodar o projeto

### 1. Clonar o repositório
        
    git clone https://github.com/YagoraDev/supabase-crud

### 2. Instalar as dependências
Navegue até a pasta do projeto e execute:

    npm install

Ou, se preferir, instale manualmente:

    npm install express cors dotenv @supabase/supabase-js

### 3. Configurar o Supabase
No arquivo `src/supabaseClient.js`, substitua as variáveis abaixo pelas suas informações do Supabase (que você encontra no painel do projeto em Settings → API):

    const supabaseUrl = 'https://SEU-PROJETO.supabase.co'
    const supabaseKey = 'SUA_CHAVE_ANONIMA_AQUI'

## Funcionalidades do CRUD

- **Create:** Adicione um novo cliente enviando `nome`, `email` e `cpf` via **POST** para `/clientes`.
- **Read:** Liste todos os clientes via **GET** para `/clientes`.
- **Update:** Atualize os dados de um cliente pelo `id` via **PUT** em `/clientes/:id`.
- **Delete:** Remova um cliente pelo `id` via **DELETE** em `/clientes/:id`.

## Testando as APIs

Para testar o sistema CRUD, recomendamos usar o [Postman](https://www.postman.com/) ou outro cliente HTTP similar.  
Configure as requisições para o endereço:

    http://localhost:3000/clientes




