const path = require('path')
const os = require('os')
const chalk = require('chalk')
const Generator = require('yeoman-generator');
const yosay = require('yosay')
const walkDir = require('../../utils/walk-dir')
const moduleTypes = require('./module-types')
const kebabToPascal = require('../../utils/case-change').kebabToPascal
const kebabToCamel = require('../../utils/case-change').kebabToCamel
const toLower = require('../../utils/case-change').toLower

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
    if (this.options['mongoose-module']) {
      this.myConfig.moduleType = "mongoose-module"
      return Promise.resolve()
    }
    if (this.options['sequelize-module']) {
      this.myConfig.moduleType = "sequelize-module"
      return Promise.resolve()
    }
    if (this.options['sql-typeorm-module']) {
      this.myConfig.moduleType = "sql-typeorm-module"
      return Promise.resolve()
    }
    if (this.options['mongo-typeorm-module']) {
      this.myConfig.moduleType = "mongo-typeorm-module"
      return Promise.resolve()
    }
    if (this.options['graph-module']) {
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
    let { moduleType, name } = this.myConfig
    let templateOptions = { kebabToCamel, kebabToPascal, config: this.myConfig }
    switch (moduleType) {
      case "mongoose-module": {
        this.fs.copyTpl(this.templatePath(moduleType + '/cats/dto/create-cat.dto.ts'),
          this.templatePath(`src/modules/${name}/dto/create-${name}.dto.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/cats/interfaces/cat.interface.ts'),
          this.templatePath(`src/modules/${name}/interfaces/${name}.interface.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/cats/schemas/cat.schema.ts'),
          this.templatePath(`src/modules/${name}/schemas/${name}.schema.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/cats/cats.controller.ts'),
          this.templatePath(`src/modules/${name}/${name}s.controller.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/cats/cats.module.ts'),
          this.templatePath(`src/modules/${name}/${name}s.module.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/cats/cats.service.ts'),
          this.templatePath(`src/modules/${name}/${name}s.service.ts`), templateOptions)
      }
      case "sequelize-module": {
        this.fs.copyTpl(this.templatePath(moduleType + '/cats/dto/create-cat.dto.ts'),
          this.templatePath(`src/modules/${name}/dto/create-${name}.dto.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/cats/cat.entity.ts'),
          this.templatePath(`src/modules/${name}/${name}.entity.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/cats/cats.controller.ts'),
          this.templatePath(`src/modules/${name}/${name}s.controller.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/cats/cats.module.ts'),
          this.templatePath(`src/modules/${name}/${name}s.module.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/cats/cats.providers.ts'),
          this.templatePath(`src/modules/${name}/${name}s.providers.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/cats/cats.service.ts'),
          this.templatePath(`src/modules/${name}/${name}s.service.ts`), templateOptions)
      }
      case "sql-typeorm-module":
      case "mongo-typeorm-module": {
        this.fs.copyTpl(this.templatePath(moduleType + '/cats/cat.entity.ts'),
          this.templatePath(`src/modules/${name}/${name}.entity.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/cats/cats.controller.ts'),
          this.templatePath(`src/modules/${name}/${name}s.controller.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/cats/cats.module.ts'),
          this.templatePath(`src/modules/${name}/${name}s.module.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/cats/cats.service.ts'),
          this.templatePath(`src/modules/${name}/${name}s.service.ts`), templateOptions)
      }
      case "graph-module": {
        this.fs.copyTpl(this.templatePath(moduleType + '/cats/interfaces/cat.interface.ts'),
          this.templatePath(`src/modules/${name}/interfaces/${name}.interface.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/cats/cats.guard.ts'),
          this.templatePath(`src/modules/${name}/${name}s.guard.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/cats/cats.module.ts'),
          this.templatePath(`src/modules/${name}/${name}s.module.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/cats/cats.resolver.ts'),
          this.templatePath(`src/modules/${name}/${name}s.resolver.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/cats/cats.service.ts'),
          this.templatePath(`src/modules/${name}/${name}s.service.ts`), templateOptions)

        this.fs.copyTpl(this.templatePath(moduleType + '/cats/cats.types.graphql'),
          this.templatePath(`src/modules/${name}/${name}s.types.graphql`), templateOptions)
      }
    }
  }
};