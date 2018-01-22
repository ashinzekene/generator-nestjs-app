const path = require('path')
const chalk = require('chalk')
const Generator = require('yeoman-generator');
const yosay = require('yosay')

module.exports = class extends Generator {
  constructor(args, opt) {
    super(args, opt)
    this.argument("name")
  }
  initializing() {
    this.log(yosay(`Welcome to the ${chalk.bgRed.white.bold("NESTJS Generator!")} \n Let's scaffold a new ${chalk.bgRed.white('NESTJS APP')}`))
  }

  prompting() {
    if (!this.options['name']) {
      return this.prompt([{
        type: 'input',
        name: 'name',
        message: 'Enter a name',
      }]).then(res => {
        this.appConfig['name'] = res.name
      })
    } else {
      this.appConfig['name'] = this.options['name']
      return Promise.resolve()
    }
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("/"),
      this.destinationPath(this.appConfig['name'] + ".ts"),
      { config: this.appConfig }
    );
  }
}