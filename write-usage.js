const path = require("path")
const fs = require("fs")

usageFile = `
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

function write(dir) {
  fs.readdirSync(dir).forEach(cDir => {
    if (fs.statSync(path.resolve(dir, cDir)).isDirectory() ) {
      // console.log(path.resolve(dir+cDir+'\USAGE'))
      fs.writeFileSync(path.resolve(dir,cDir,'USAGE'), usageFile)
    }
  })
}

write('./generators')