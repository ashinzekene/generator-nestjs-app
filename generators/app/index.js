const path = require('path')
const Generator = require('yeoman-generator');
const yosay = require('yosay')
const walkDir = require('./walkDir')
const appTypes = require('./appTypes')

module.exports = class extends Generator {
  constructor(args, opt) {
    super(args, opt)
  }
  welcome() {
    this.log(yosay("Welcome to the NESTJS Generator! "))
  }

  promptUser() {
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
        message: 'Enter your app\'s identifier (no capital-letter or space)',
        validate: function(name) {
          return /^[a-z0-9][a-z0-9\-]*$/.test(name) || "App identifier cannot contain capital letters or space"
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
      this.log(`
      Name: ${this.appConfig.name}
      Identifier: ${this.appConfig.identifier}
      Description: ${this.appConfig.description}
      Publisher: ${this.appConfig.publisher}
      Type: ${appTypes.find(type => type.value === this.appConfig.type).name}
      `)
    })
    this._writeFiles()
  }

  _writeFiles() {
    let files = walkDir(path.join(__dirname, "./templates/", this.appConfig.type))
    let newFiles = files.map(pth => pth.replace(RegExp(`.+${this.appConfig.type}`), ""))

    console.log(this.fs.read(this.templatePath('.gitignore')))
    newFiles.forEach(file => {
      this.fs.copyTpl(
        this.templatePath(this.appConfig.type + "/" +file),
        this.destinationPath(this.appConfig.identifier+"/"+file),
        { config: this.appConfig }
      );    
    })
  }

};