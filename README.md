Based on [nextjs-boilerplate](https://github.com/sebastiansiejek/nextjs-boilerplate)

# Features

## Actions

* [e2e](.github/workflows/e2e.yml)
    * run e2e test by Cypress
* [test](.github/workflows/e2e.yml)
    * run unit tests by Jest

## Git hooks

* [pre-commit](.husky/pre-commit)

## Lint

* [eslint](https://eslint.org/)
    * [config](tsconfig.json)
* [prettier](https://prettier.io/)
    * [config](.prettierrc)
* [commitlint](https://commitlint.js.org/#/)
    * [config](commitlint.config.js)

## Styles

* [Tailwind](https://tailwindcss.com/)
    * [config](tailwind.config.js)

## Structure

* **/app**
    * **/components**
        * **/containers** - smart components
        * **/views** - dump(ui) components
    * **/lib**
        * **/errors** - custom errors handler
        * **/http** - api fetcher
    * **/services**
        * **/api**
    * **/styles** - styles

# Commands

* `npm run dev` - run develop server
* `npm run build` - run build
* `npm run start` - run production server
* `npm run lint` - run eslint
* `npm run prettier` - run prettier
* `npm run test` - run unit tests
* `npm run cypress` - run cypress ui
* `npm run cypress:headless` - run cypress
* `npm run analyze` - run bundle analyze

# Credits

* [Sebastian Siejek](https://sebastiansiejek.dev/)