####API Currency Converter

Este projeto é um conversor de moedas que utiliza uma API de câmbio real para obter taxas de conversão atualizadas. Ele consiste em um backend desenvolvido com Node.js + Express e um frontend criado com React para interagir com a API.

##📌 Funcionalidades

Conversão de moedas em tempo real.

Interface simples e intuitiva para inserir valores e selecionar moedas.

Backend integrado com a ExchangeRate-API para obter as taxas de câmbio reais.

##📂 Estrutura do Projeto

📁 seu-projeto/
│
├── 📁 api-currency-converter/ # Backend (Node.js + Express)
│ ├── 📁 src/ # Código-fonte do backend
│ │ ├── server.js # Código principal da API
│ │ ├── .env # Chave da API de câmbio
│ ├── package.json # Configurações do backend
│ ├── .gitignore # Ignorar arquivos no Git
│
├── 📁 frontend/ # Frontend (React)
│ ├── 📁 src/ # Código-fonte do frontend
│ │ ├── components/ # Componentes React
│ │ │ ├── CurrencyConverter.js # Componente principal
│ │ ├── App.js # Arquivo principal do React
│ ├── package.json # Configurações do frontend
│ ├── .gitignore # Ignorar arquivos no Git
│
├── README.md # Documentação do projeto

##🚀 Como Rodar o Projeto

#1️⃣ Clonar o repositório

git clone https://github.com/seu-usuario/api-currency-converter.git
cd api-currency-converter

#2️⃣ Configurar o Backend

Instale as dependências:

npm install

Crie um arquivo .env na pasta api-currency-converter e adicione sua chave da ExchangeRate-API:

EXCHANGE_API_KEY=SEU_TOKEN_AQUI

Inicie o servidor:

node src/server.js

#3️⃣ Configurar o Frontend

Vá para a pasta do frontend:

cd ../frontend

Instale as dependências:

npm install

Inicie a aplicação React:

npm start

#4️⃣ Acesse no navegador

http://localhost:3000

##🔗 Endpoints da API

#Converter Moeda

Rota: GET /convert

Parâmetros:

from (string) - Código da moeda de origem (ex: USD)

to (string) - Código da moeda de destino (ex: BRL)

amount (number) - Valor a ser convertido

#Exemplo de requisição:

http://localhost:3000/convert?from=USD&to=BRL&amount=10

#Resposta esperada:

{
"from": "USD",
"to": "BRL",
"amount": 10,
"convertedAmount": "50.30",
"rate": 5.03
}

##📌 Melhorias Futuras

Buscar moedas dinâmicas da API em vez de opções fixas no front-end.

Melhorar a interface gráfica com Tailwind CSS ou Material UI.

Adicionar cache para reduzir chamadas repetidas à API.

Fazer deploy do backend no Railway e do frontend na Vercel.

##📜 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usá-lo e melhorá-lo! 😊
