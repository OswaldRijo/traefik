FROM node:10

# Create app directory
WORKDIR /usr/src/app

ENV NODE_ENV=local
ENV PORT=8080
ENV NODE_ENV_CONTEXT=PAIS
ENV COUNTRY=CHILE

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY package.json package.json  

RUN npm install 

RUN rm -f .npmrc

COPY . .

EXPOSE 8080
CMD [ "node", "./bin/www" ]