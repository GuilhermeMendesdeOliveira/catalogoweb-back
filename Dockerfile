FROM node:18

# Diretório de trabalho
WORKDIR /

# Instala o sequelize-cli globalmente
RUN npm install -g sequelize-cli

# Copia dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Instala ferramentas úteis para depuração
RUN apt-get update && apt-get install -y iputils-ping dnsutils curl


# Copia o restante dos arquivos
COPY . .

# Expõe a porta da API
EXPOSE 54850

# Comando de start
CMD ["sh", "-c", "sleep 15 && npx --yes sequelize-cli db:migrate --config src/config/config.json --migrations-path ./src/migrations && npm start"]

