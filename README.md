# NESTJS GENERATOR

A yeoman generator for nestjs apps.

### ABOUT
This generator helps you create a [NestJS](https://github.com/nestjs/nest) app with ease. It also comes with support for the following

- Decorators
- Exceptions
- Filters
- Guards
- Interceptors
- Middlewares
- Pipes

### OPTIONS

NestJS app options available 

- Basic App
- A socket app with both client and server
- A microservices app
- An Injector app
- SQL Typeorm app
- Mongoose app
- Seqelize app
- Passport app
- Babel JS app
- Mockgoose app
- Swagger app
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
$ yo nestjs:`COMPONENT` `NAME` 
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

#### `yo nestjs:COMPONENT` (For creating components)

`[name]` - The name of the component to be created

### FILE AND COMPONENT NAMING

By [Angular File Naming Convention](https://angular.io/guide/styleguide), names for components should be in kebab case. For example

```
yo nest:decorator app-user-routes
```

This creates a decorator with filename `app-user-routes.decorator.ts` decorator name `AppUserRoutesDecorator`

### CONTRIBUTIONS AND ISSUES

Contributions and filing of issues are gladly welcome. Before contributing, be sure to read the [CONTRIBUTING GUIDE](changelog.md)

- For making pull requests, you can use the [PR template](PULL_REQUEST-TEMPLATE.md)

- For submitting, you can use the [ISSUES template](ISSUE-TEMPLATE.md)

### LICENSE

[MIT LICENSE](LICENSE.md)

