FROM node:18

# Diretório de trabalho correto
WORKDIR /app

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

# Script de inicialização com espera pelo banco + migrations + start
CMD sh -c '\
  echo "⏳ Aguardando banco de dados ficar pronto..."; \
  for i in {1..20}; do \
    HOST=$(node -e "const u=new URL(process.env.DATABASE_URL); console.log(u.hostname)"); \
    PORT=$(node -e "const u=new URL(process.env.DATABASE_URL); console.log(u.port || 5432)"); \
    nc -z $HOST $PORT && echo "✔ Banco disponível!" && break; \
    echo "Tentativa $i/20: banco indisponível ($HOST:$PORT), aguardando 3s..."; \
    sleep 3; \
  done; \
  echo "▶ Executando migrations..."; \
  npx sequelize-cli db:migrate --config src/config/config.json --migrations-path ./src/migrations; \
  echo "▶ Iniciando aplicação..."; \
  npm start \
'
