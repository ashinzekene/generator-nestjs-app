const fs = require("fs")

let index = `
const path = require('path')
const chalk = require('chalk')
const Generator = require('yeoman-generator');
const yosay = require('yosay')

module.exports = class extends Generator {
  constructor(args, opt) {
    super(args, opt)
  }
  initializing() {
    this.log(yosay(Welcome to the ${chalk.bgRed.white.bold("NESTJS Generator!")} \n Let's scaffold a new ${chalk.bgRed.white('NESTJS APP')}))
  }

  prompting() {}

  writing() {}
`

fs.readdirSync
fs.writeFile
