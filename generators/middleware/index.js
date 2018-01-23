
const path = require('path')
const chalk = require('chalk')
const Generator = require('yeoman-generator');
const yosay = require('yosay')

module.exports = class extends Generator {
  constructor(args, opt) {
    super(args, opt)
    this.argument("name")
    this.appConfig = {}
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
    let name = this.appConfig['name']
    this.fs.copyTpl(
      this.templatePath("index.middleware.ts"),
      this.destinationPath(`src/modules/common/${name.toLowerCase()}.middleware.ts`),
      { config: this.appConfig }
    );
  }
}
