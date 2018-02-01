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
    this.myConfig = {}
  }

  prompting() {
    // Checks if user added a module option
    this.myConfig.name = this.options['name']
    if(this.options['mongoose-module']) {
      this.myConfig.moduleType = "mongoose-module"
      return Promise.resolve()
    }
    if(this.options['sequelize-module']) {
      this.myConfig.moduleType = "sequelize-module"
      return Promise.resolve()
    }
    if(this.options['sql-typeorm-module']) {
      this.myConfig.moduleType = "sql-typeorm-module"
      return Promise.resolve()
    }
    if(this.options['mongo-typeorm-module']) {
      this.myConfig.moduleType = "mongo-typeorm-module"
      return Promise.resolve()
    }
    if(this.options['graph-module']) {
      this.myConfig.moduleType = "graph-module"
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
      this.myConfig = {}
      this.myConfig.name = this.options['name']
      this.myConfig.moduleType = res.type
      this.log(chalk.bgWhite.red(`
      Name: ${this.myConfig.name}
      Type: ${moduleTypes.find(type => type.value === this.myConfig.type).name}
      `))
    })
    this._writeFiles()
  }

  writing() {
  //   let files = walkDir(path.join(__dirname, "./templates/", this.myConfig.type))
  //   let newFiles = files.map(pth => pth.replace(RegExp(`.+${this.myConfig.type}`), ""))

  //   newFiles.forEach(file => {
      this.fs.copyTpl(
        this.templatePath(this.myConfig.moduleType + "/"),
        this.destinationPath(this.myConfig.name + "/"),
        { config: this.myConfig }
      );
  //   })
  }


};