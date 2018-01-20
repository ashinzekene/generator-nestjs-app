const Generator = require('yeoman-generator');
const walkDir = require('./walkDir')
const appTypes = require('./appTypes')

module.exports = class extends Generator {
  constructor(args, opt) {
    super(args, opt)
  }
  welcome() {
    this.log("Welcome to the NESTJS Generator! ")
  }

  promptUser() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter a name for your app',
        default: this.appname,
        // validate: (name) => /^[a-z]-{1,216}$/.test(name)
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your app',
      },
      {
        type: 'list',
        name: 'type',
        message: 'What type of NESTJS app do you want to start?',
        choices: appTypes
      }
    ]).then(res => {
      this.appConfig = {}
      this.appConfig.appName = res.name
      this.appConfig.appDescription = res.description
      this.appConfig.appType = res.type
      this.log(`
      Name: ${this.appConfig.appName}
      Description: ${this.appConfig.appDescription}
      Type: ${appTypes.find(type => type.value === this.appConfig.appType).name}
      `)
    })
  }

  _writeFiles() {
    // this.sourceRoot(path.join("..", "..", './templates/' + this.appConfig.type))
    // this.fs.copyTpl()
  }

};