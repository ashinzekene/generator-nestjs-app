const fs = require("fs")
const path = require("path")

fs.readdirSync('./').forEach(mainDir => {
  fs.statSync(mainDir).isDirectory() ?
    fs.readdirSync(mainDir).forEach(dir => {
      fs.statSync(path.join(mainDir, dir)).isDirectory() ?
        fs.renameSync(path.join(mainDir, dir), path.join(mainDir, "templates")) :
        null
    }) :
    null
})