const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opt) {
    super(args, opt)

  }
  welcome() {
    this.log("Welcome to the NESTJS Generator! ")
  }

  promptName() {
    this.prompt({
      type: ''
    })
  }
  
  promptingType() {
    this.prompt({
      type: 'list',
      name: 'type',
      message: 'What type of NESTJS app do you want to start?',
      choices: [{
        name: 'Basic app with Interceptors and Middlewares',
        value: '01-cats-app'
      },
      {
        name: 'A Soket app with both cliebt and frontend',
        value: '02-gateways'
      },
      {
        name: 'A microservices app',
        value: '03-microservices'
      },
      {
        name: 'An Injector app',
        value: '04-injector'
      },
      {
        name: 'SQL Typeorm',
        value: '05-sql-typeorm'
      },
      {
        name: 'Mongoose',
        value: '06-mongoose'
      },
      {
        name: 'Seqelize',
        value: '07-sequelize'
      },
      {
        name: 'Passport',
        value: '08-passport'
      },
      {
        name: 'Babel JS',
        value: '09-babel-example'
      },
      {
        name: 'Mockgoose',
        value: '10-mockgoose'
      },
      {
        name: 'Swagger',
        value: '11-swagger'
      },
      {
        name: 'Graph QL apollo',
        value: '12-graphql-apollo'
      },
      {
        name: 'Mongo Typeorm',
        value: '13-mongo-typeorm'
      },
      {
        name: 'Configurable Mongoose',
        value: '14-mongoose-module'
      }
    ]
    }).then(type => {
      this.appConfig.type = type.type
      this.log("You selected", type.type)
    })
  }

  _writeFiles() {
    this.fs.copyTpl()
  }

};