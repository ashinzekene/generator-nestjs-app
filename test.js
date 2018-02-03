console.log("Beginning...")

process.stdin.setEncoding('utf-8')
process.stdin.on('data', data => {
  changeName(data.trim())
})

function changeName(name) {
  var res
  console.log(name.indexOf('s'), ' ' ,name.endsWith('s'))
  if (name.endsWith('s')) {
    res = name.substr(0,name.length-1)
  } else {
    res = name
  }
  console.log(res+'\n')
}