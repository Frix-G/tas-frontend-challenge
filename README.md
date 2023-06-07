# G. FRIX demo app

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `apps/demo-app`: a [Next.js](https://nextjs.org/) app
    - MUI is used to build the UI
    - The table of teams in the home page use
      @mui/x-data-grid to display the grid and add the sort / filters / paging features

- `apis/demo-api`: a [Nest.js](https://docs.nestjs.com/) rest api
    - I've used nestjs has REST API to serve the data.
      Postgres store the data
      Their is 2 seeds cmd to fill the data before the first run of the app


- `packages/eslint-config-custom`: `eslint` configurations for all kinds of projects in the monorepo
- `packages/tsconfig`: `tsconfig.json`s used throughout the monorepo
- `packages/types`: All types used in the monorepo, can be used on frontend, apis, micro services, etc

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Develop

To develop all apps and packages, run the following command:

```
cd tas-frontend-challenge
docker-compose up -d
yarn
yarn run build

cd ./apis/demo-api
yarn run migration:run
yarn run seed:teams
yarn run seed:players

cd ../..

yarn run dev
```

Go to [localhost:9000](http://localhost:9000/)

### Build

To build all apps and packages, run the following command:

```
cd tas-frontend-challenge
yarn run build
```

### Docker build / run of api and app

For now I've putted the docker integration on hold since it was taking more time than expected
The monorepo makes it a little more complicated than usual

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)