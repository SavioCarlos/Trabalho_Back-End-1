# Trabalho_Back-End-1
Gerenciamento de Torneios de E-sports
Esta é uma API para gerenciamento de torneios de e-sports, oferecendo funcionalidades como busca, criação, atualização e exclusão de torneios. A API é construída usando o framework Express em Node.js.

Configuração
Certifique-se de ter o Node.js instalado. Use o seguinte comando para instalar as dependências necessárias:

npm install
Executando o Servidor
Para iniciar o servidor, use o seguinte comando:

npm start
O servidor estará em execução na porta 3000 por padrão.

Endpoints Disponíveis
GET /torneios
Retorna todos os torneios registrados.

GET /torneios/:id
Retorna um torneio específico com o ID fornecido na URL.

POST /torneios
Cria um novo registro de torneio com base nos dados fornecidos no corpo da requisição.

PUT /torneios/:id
Atualiza as informações de um torneio existente com base no ID fornecido na URL e nos dados fornecidos no corpo da requisição.

DELETE /torneios/:id
Exclui o torneio com o ID fornecido na URL.

Cabeçalhos
A API responde com um cabeçalho personalizado "X-Your-Name" em todas as respostas para identificação.

Contribuição
Sinta-se à vontade para contribuir para este projeto abrindo problemas ou enviando pull requests.

Autor
Seu Nome - https://github.com/SavioCarlos

Documentação-Postman
https://documenter.getpostman.com/view/30516354/2s9YR6ZtqS
