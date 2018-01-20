const fs = require('fs')
const path = require('path')

const dir = 'generators/app/templates'
var files = fs.readdirSync(dir)
files.forEach(file => {
  fs.copyFileSync('README.md', `${dir}/${file}/README.md`)
  console.log(`DONE FOR ${file}`)
})