const path = require("path")
const fs = require("fs")
let elem = ""
const oldUsage = ` 
Description:
    Create a chrome extension boilerplate generator that creates everything for you. have fun.

Example:
    yeoman init chrome-extension $NAME[OPTIONAL]

    This will create:
        Gruntfile.js: Configuration for the task runner.
        bower.json: Front-end packages installed by bower.
        package.json: Development packages installed by npm.

        app/: Your application files.
        test/: Unit tests for your application.
`

usageFile = `

Description:
    Creaates a minimalistic NESTJS ###elem###

Example:
    yo nestjs:###elem### NAME

    - NAME - OPTIONAL - the name of the module (use kebab-case)

    This will create:
        \`/src/modules/common/\${NAME}.###elem###.ts\`
        

`

function write(dir) {
  fs.readdirSync(dir).forEach(cDir => {
    elem = cDir
    if (fs.statSync(path.resolve(dir, cDir)).isDirectory() && cDir !== 'app') {
      // console.log(path.resolve(dir+cDir+'\USAGE'))
      fs.writeFileSync(path.resolve(dir,cDir,'USAGE'), usageFile.replace(/###elem###/g, cDir))
    }
  })
}

write('./generators')