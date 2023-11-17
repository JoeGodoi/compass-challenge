# Desafio Compass - Microserviço para Gestão Veterinária

Este é um projeto de microserviço construído para atender às necessidades de gestão interna de clientes e atendimentos para uma franquia veterinária.

## Funcionalidades

O microserviço oferece as seguintes funcionalidades através de uma API REST:

- `GET /tutors`: Recupera todos os tutores.
- `POST /tutor`: Cria um novo tutor.
- `PUT /tutor/:id`: Atualiza informações de um tutor.
- `DELETE /tutor/:id`: Exclui um tutor.
- `POST /pet/:tutorId`: Cria um pet e o associa a um tutor.
- `PUT /pet/:petId/tutor/:tutorId`: Atualiza informações de um pet.
- `DELETE /pet/:petId/tutor/:tutorId`: Remove um pet de um tutor.

## Requisitos

- Node.js
- npm
- TypeScript
- Express

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/JoeGodoi/compass-challenge.git
   cd compass-challenge

2. Instale as dependências:

npm install

3. Execute o aplicativo:

npm start

Acesse a API localmente em http://localhost:3000.

Estrutura do Projeto
src/: Código-fonte do projeto.
controllers/: Controladores da lógica de negócios.
models/: Modelos de dados.
routes/: Rotas da API.
services/: Lógica de negócios e manipulação de dados.
app.ts: Arquivo principal do aplicativo.


Contribuição:
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) ou enviar pull requests.

Licença:
Este projeto é licenciado sob a Licença MIT.