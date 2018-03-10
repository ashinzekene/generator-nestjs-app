const path = require('path')
const os = require('os')
const chalk = require('chalk')
const Generator = require('yeoman-generator');
const yosay = require('yosay')
const walkDir = require('../../utils/walk-dir')
const appTypes = require('./app-types')

module.exports = class extends Generator {
  constructor(args, opt) {
    super(args, opt)
    this.option('skip-install', {
      default: false,
      type: Boolean
    });
    this.option('yarn');
    this.option('npm');
  }
  initializing() {
    this.log(yosay(`Welcome to the \n ${chalk.bgRed.white.bold("NESTJS Generator!")} \n Let's scaffold a new ${chalk.bgRed.white('NESTJS APP')}`))
  }

  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter a name for your app',
        default: this.appname,
      },
      {
        type: 'input',
        name: 'identifier',
        message: 'Enter your app\'s identifier',
        default: this.appname,
        validate: function (name) {
          return /^[a-z0-9][a-z0-9\-]*$/.test(name) || "App identifier can only contain lowercase letters, numbers and -"
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your app',
      },
      {
        type: 'input',
        name: 'publisher',
        message: 'Enter publisher\'s name',
        default: os.userInfo().username
      },
      {
        type: 'list',
        name: 'type',
        message: 'What type of NESTJS app do you want to start?',
        choices: appTypes
      }
    ]).then(res => {
      this.appConfig = {}
      this.appConfig.name = res.name
      this.appConfig.description = res.description
      this.appConfig.identifier = res.identifier
      this.appConfig.publisher = res.publisher
      this.appConfig.type = res.type
      this.log(chalk.bgWhite.red(`
  Name: ${this.appConfig.name}  
  Identifier: ${this.appConfig.identifier}  
  Description: ${this.appConfig.description}  
  Publisher: ${this.appConfig.publisher}  
  Type: ${appTypes.find(type => type.value === this.appConfig.type).name}  `))  
    })
  }

  writing() {
    let files = walkDir(path.join(__dirname, "./templates/", this.appConfig.type))
    let newFiles = files.map(pth => pth.replace(RegExp(`.+${this.appConfig.type}`), ""))

    newFiles.forEach(file => {
      this.fs.copyTpl(
        this.templatePath(this.appConfig.type + "/"),
        this.destinationPath(this.appConfig.identifier + "/"),
        { config: this.appConfig }
      );
    })
  }

  install() {
    if (this.options['skip-install']) {
      this.log(chalk.green(`
        To install dependencies, run

        ${chalk.white('$')} cd ${this.appConfig.identifier}/
        ${chalk.white('$')} npm install
      `))
    } else {
      if (this.options['yarn']) {
        this.installDependencies({
          yarn: true,
          bower: false,
          npm: false,
        })
      } else {
        this.installDependencies({
          npm: true,
          yarn: false,
          bower: false,
        })

      }
    }
  }

};