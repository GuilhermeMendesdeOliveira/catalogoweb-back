FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN apt-get update && apt-get install -y iputils-ping dnsutils curl

COPY . .

EXPOSE 54850

CMD sh -c '\
  echo "⏳ Aguardando o banco ficar disponível..."; \
  for i in {1..20}; do \
    nc -z $(node -e "const u=new URL(process.env.DATABASE_URL); console.log(u.hostname)") \
           $(node -e "const u=new URL(process.env.DATABASE_URL); console.log(u.port || 5432)") \
    && echo "✔ Banco disponível!" && break; \
    echo "Tentativa $i/20: banco indisponível, aguardando 3s..."; \
    sleep 3; \
  done; \
  echo "▶ Rodando migrations..."; \
  npx sequelize-cli db:migrate --config src/config/config.json --migrations-path ./src/migrations; \
  echo "▶ Iniciando aplicação..."; \
  npm start \
'
