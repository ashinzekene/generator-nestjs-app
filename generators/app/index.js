const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opt) {
    super(args, opt)

  }

  prompting() {
    this.prompt({
      type: 'list',
      name: 'type',
      message: 'What type of extension do you want to create?',
      choices: [{
        name: 'New Extension (TypeScript)',
        value: 'ext-command-ts'
      },
      {
        name: 'New Extension (JavaScript)',
        value: 'ext-command-js'
      },
      {
        name: 'New Color Theme',
        value: 'ext-colortheme'
      },
      {
        name: 'New Language Support',
        value: 'ext-language'
      },
      {
        name: 'New Code Snippets',
        value: 'ext-snippets'
      },
      {
        name: 'New Extension Pack',
        value: 'ext-extensionpack'
      }
      ]
  
  method1() {
        this.log('method 1 just ran');
      }

  method2() {
        this.log('method 2 just ran');
      }

    };