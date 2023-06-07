# TAS frontend challenge

## What's inside?

### Apps and Packages

- `apps/demo-app`: a [Next.js](https://nextjs.org/) app
    - MUI is used to build the UI
    - The table of teams in the home page use
      @mui/x-data-grid to display the grid and add the sort / filters / paging features
    - The team page contains a bar chart showing the total of minutes played for each person in the top 3. I've
      used [nivo chart](https://nivo.rocks/) to display it.
      Nivo provides a rich set of dataviz components, built on top of D3.js and React.

      The page has also an animation on load. It is done using [framer motion](https://www.framer.com/motion/)

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

Note: make sure you have node v18.13.0 (if you don't use cli plugin to use nvmrc)

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

## What's next ?

Here a set of ideas that could be applied

1. Create a micro front-end to manage "favourite teams" with a zustand state / store that can be shared with the main
   app
2. Translate the front-end using intl
3. Put the API behind an api gateway to protect it and for example limit number of request by second
4. Add git hooks to prevent devs to push code that can't build or if the linter fails

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
