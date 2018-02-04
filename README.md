<p align="center">
  <img src="yeoman.png" alt="NESTJS" />
  <img src="nestjs.jpg" alt="NESTJS" />
  <h1 align="center">NESTJS GENERATOR</h1>
  <p align="center">A yeoman generator for nestjs apps.</p>
</p>

### ABOUT
This generator helps you create a [NestJS](https://github.com/nestjs/nest) app with ease. It also comes with support for the following

- Decorators
- Exceptions
- Guards
- Interceptors
- Middlewares
- Modules
### OPTIONS

NestJS app options available 

- SQL Typeorm app
- Mongoose app
- Seqelize app
- Passport app
- Graph QL apollo app
- Mongo Typeorm app
- Configurable Mongoose app

### USAGE

Install dependencies

```sh
$ npm install -g yo
$ npm install -g generator-nestjs-app
```
__The to create an app, run__

```sh
$ yo nestjs
```
__For other components run__

```sh
$ yo nestjs:[COMPONENT] [NAME] 
```
For example

```sh
$ yo nestjs:middleware app-auth
```
```sh
$ yo nestjs:decorator roles
```

### OPTIONS

#### `yo nestjs` (For creating a NestJS app)
`--skip-install` - Skips installation of dependencies when bootstrappping an app 

`--npm` - Install dependencies with npm 

`--yarn` - Install dependencies with yarn 

#### `yo nestjs:[COMPONENT] [NAME]` (For creating components)

`[COMPONENT]` - The type of the component to be created

`[NAME]` - The name of the component to be created

#### `yo nestjs:module [NAME]` (For creating a nestjs module)

`[NAME]` - The name of the module to be created (required)

ARGUMENTS

--mongoose-module

--sequelize-module

--sql-typeorm

--mongo-typeorm

--graphql-module


### FILE AND COMPONENT NAMING

By [Angular File Naming Convention](https://angular.io/guide/styleguide), names for components should be in kebab case. For example

```
yo nest:decorator app-user-routes
```

This creates a decorator with filename `app-user-routes.decorator.ts` decorator name `AppUserRoutesDecorator`

### CONTRIBUTIONS AND ISSUES

Contributions and filing of issues are gladly welcome. Before contributing, be sure to read the [CONTRIBUTING GUIDE](changelog.md)

- For making pull requests, you can use the [PR template](PULL_REQUEST-TEMPLATE.md)

- For submitting, you can use the [ISSUES template](ISSUE_TEMPLATE.md)

### LICENSE

[MIT LICENSE](LICENSE.md)

