FROM node:18

# Diretório de trabalho correto
WORKDIR /app

RUN npm install -g sequelize-cli

# Copia apenas arquivos de dependências primeiro (melhora cache)
COPY package*.json ./

# Instala dependências
RUN npm install

# Instala utilitários úteis
RUN apt-get update && apt-get install -y iputils-ping dnsutils curl netcat-openbsd

# Copia o restante do projeto
COPY . .

# Expõe a porta usada pela API
EXPOSE 54850

# Comando de start
CMD ["sh", "-c", "sleep 15 && npx --yes sequelize-cli db:migrate --config src/config/config.json --migrations-path ./src/migrations && npm start"]
