FROM node:9-alpine

WORKDIR /app

COPY [ "package.json", "package-lock.json", "/app/" ]

RUN npm set progress=false \
  && npm config set depth 0 \
  && npm install -s --production

COPY web /app/web

CMD [ "npm", "start" ]
