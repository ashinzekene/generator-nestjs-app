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
      this.appConfig.publisher = res.publisher
      this.appConfig.type = res.type
      this.log(`
      Name: ${this.appConfig.name}
      Description: ${this.appConfig.description}
      Publisher: ${this.appConfig.publisher}
      Type: ${appTypes.find(type => type.value === this.appConfig.type).name}
      `)
    })
  }

  _writeFiles() {
    this.templatePath()
    var files = walkDir(path.join(__dirname, "./templates/", this.appConfig.type))
    files = files.map(pth => pth.replace(RegExp(`.+${this.appConfig.type}`), ""))
    console.log(files.join("\n"))

    // this.fs.copyTpl(
    //   this.templatePath('index.html'),
    //   this.destinationPath('public/index.html'),
    //   { title: 'Templating with Yeoman' }
    // );    
  }

};