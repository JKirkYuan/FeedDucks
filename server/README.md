# Feed Ducks

## Description

An application that allows user to record how they feed ducks around the world

## Features (Use Cases)

- GET `/feed/` returns all Feed Objects (Instances where ducks have been fed):
- POST `/feed/` returns the Feed Object that was inserted:
  - Params:
    - food
    - location
    - how many ducks are fed
    - how much food was fed to the ducks

## Technologies

**Nestjs** - TypeScript, organized boilerplate, fast development

**Postgres** - I use this DB for all projects since I'm comfortable with the setup for it

**TypeORM** - TypeScript integration, easy to write and read to database

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
