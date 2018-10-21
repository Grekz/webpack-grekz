# Webpack project to use as template =)

## Requirements

For development, you will only need Node.js installed on your environement. It
is recommended to use VS Code, but not mandatory.

### Node

[Node](http://nodejs.org/) is really easy to install & now include
[npm](https://npmjs.org/). You should be able to run the following command after
the installation procedure below.

    $ node --version
    v10.5.0

    $ npm --version
    6.1.0

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the
following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone <PROJECT_URL>
    $ cd <PROJECT_FOLDER>
    $ npm install

### Configure app

    TBD

## Start & watch

Starting the front-end app :

    $ npm start

Starting the app with a mock json-server:

    $ npm run startWithServer

## Simple build for production

    $ npm run build

## Static type checker

    $ npm run flow

## Linter

    $ npm run lint

Fix lint issues

    $ npm run lint-fix

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install`
often. A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

To run those 3 commands you can just do

    $ npm run pull

## Git hooks

The project has husky with pretty-quick enabled, this means that everytime you
stage changes and try to commit, lint will be applied to the staged files.

_precommit_ hook will use the linter, format the code and check flow errors

---

## Languages & tools

### HTML

- RAW

### JavaScript

- [React](http://facebook.github.io/react) is used to render all the components.
- [Axios](https://github.com/axios/axios) is used to handle communication with
  endpoints.
- [Flow](https://flow.org/) is used as static type checker to reduce runtime
  errors.
- [React i18n](http://facebook.github.io/react) is used to handle translations
  TBD.

### Tools

- [Webpack 4](https://webpack.js.org/) is used to create bundle, run dev server
  and many more stuff.
- [Babel](http://babeljs.io/) is used to use new JS features without
  compromising too much compatibility.
- [Jest](https://facebook.github.io/jest/) is used for tests.
- [ESLint](https://eslint.org/) is used for linting.
- [Prettier](https://prettier.io/) is used to format code.

### CSS

- [emotion](https://emotion.sh/) is used inside react components, because
  CSS-in-JS rulz.

_react-emotion_ is included and used the components, so you can forget about css
loaders & plugins.

### Development server - with hot reload

This app has a development server included that will reflect all the changes
wihtout the need of restarting the app.
