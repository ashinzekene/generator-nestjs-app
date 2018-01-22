var fs = require("fs")
var path = require("path")

var fileList = []
function walkSync(dir, inner) {
  let files = fs.readdirSync(dir).forEach(file => {
    fs.statSync(path.join(dir, file)).isDirectory() ?
      walkSync(path.join(dir, file)) :
      fileList.push(path.join(dir, file))
  });
  if (inner) return fileList.map(pth => pth.replace(/\b\w+\\/, ""))
  return fileList
}

module.exports = walkSync