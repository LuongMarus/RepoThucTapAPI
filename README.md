# SAOVIET API

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

1. Run depencies

```bash
yarn
```

2. Setup .env (see more .env.example)

3. Create Generate Prisma Client code (use it to build query postgres)

```bash
yarn db:generate
```

4. Migrate new Database

```bash
yarn db:migrate
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

## Resources

- [Development Guide](documents/development_guide.md)

- [Query with Prisma](https://docs.nestjs.com/recipes/prisma#create-two-database-tables-with-prisma-migrate)
