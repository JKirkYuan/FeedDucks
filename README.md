# Feed Ducks

An application that allows user to record how they feed ducks around the world

## Technologies

### Back-end

- **Nestjs** - TypeScript, organized boilerplate, fast development

- **Postgres** - I use this DB for all projects since I'm comfortable with the setup for it

- **TypeORM** - TypeScript integration, easy to write and read to database

Backend routes found in [server/README.md](server/README.md)

### Front-end

- **React** - My most enjoyed library to create front end applications

- **React Material-UI** - Fast and stylish components to display information to users

- **Axios** - Fetch requests

## Setup

Backend is found on [http://localhost:5000/](http://localhost:5000/)

Frontend is found on [http://localhost:3000/](http://localhost:3000/)

First setup backend by creating a database

```bash
$ createdb feedingducks
```

Start up the backend, head into server/

```bash
$ yarn run start:dev
```

Start up the frontend, by going into web/

```bash
$ yarn run start
```
