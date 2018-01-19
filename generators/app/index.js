const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opt) {
    super(args, opt)
    
  }

  prompting() {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }, {
      type    : 'confirm',
      name    : 'cool',
      message : 'Would you like to enable the Cool feature?'
    }]).then((answers) => {
      this.log('app name', answers.name);
      this.log('cool feature', answers.cool);
    });
  }
  
  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }
  
};