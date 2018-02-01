const path = require('path')
const os = require('os')
const chalk = require('chalk')
const Generator = require('yeoman-generator');
const yosay = require('yosay')
const walkDir = require('../../utils/walk-dir')
const moduleTypes = require('./module-types')

module.exports = class extends Generator {
  constructor(args, opt) {
    super(args, opt)
    this.option('mongoose-module')
    this.option('sequelize-module')
    this.option('sql-typeorm-module')
    this.option('mongo-typeorm-module')
    this.option('graph-module')
    this.argument('name', {
      required: true,
      description: "The name of the module to create",
      type: String
    })
  }

  prompting() {
    // Checks if user added a module option
    // This is an array of the module types
    let modTypes = moduleTypes.map(mod => mod.value)
    let present = false
    let selectedModule = ""
    // assigns `true` to present if any module type is in the options
    console.log(this.options)
    for (let x in this.options) {
      if (this.options[x] === true && moduleTypes.findIndex(mod => mod.value == x)) {
        present = true
        selectedModule = x
        return;
      }
    }
    if (present) {
      console.log(`
        Module: ${selectedModule}
        Name: ${this.options['name']}
      `)
      return Promise.resolve()
    }
    return this.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'What type of NESTJS module do you want to create?',
        choices: moduleTypes
      }
    ]).then(res => {
      this.appConfig = {}
      this.appConfig.name = this.options['name']
      this.appConfig.type = res.type
      console.log(`
        Name: ${this.appConfig.name}
        Type: ${moduleTypes.find(type => type.value === this.appConfig.type).name}
      `)
      this.log(chalk.bgWhite.red(`
      
      Name: ${this.appConfig.name}
      Type: ${moduleTypes.find(type => type.value === this.appConfig.type).name}
      `))
    })
    this._writeFiles()
  }

  // writing() {
  //   let files = walkDir(path.join(__dirname, "./templates/", this.appConfig.type))
  //   let newFiles = files.map(pth => pth.replace(RegExp(`.+${this.appConfig.type}`), ""))

  //   newFiles.forEach(file => {
  //     this.fs.copyTpl(
  //       this.templatePath(this.appConfig.type + "/"),
  //       this.destinationPath(this.appConfig.identifier + "/"),
  //       { config: this.appConfig }
  //     );
  //   })
  // }


};