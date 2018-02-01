const moduleTypes = [
  {
    name: 'A mongoose module',
    value: 'mongoose-module'
  },
  {
    name: 'A sequelize module',
    value: 'sequelize-module'
  },
  {
    name: 'An SQL typeorm module',
    value: 'sql-typeorm-module'
  },
  {
    name: 'An mongo typeorm module',
    value: 'mongo-typeorm-module'
  },
  {
    name: 'An graphQl module',
    value: 'graphql-module'
  },
]


options = { 'mongo-typeorm-modle': 'yes', 'new-name': 'yup' }

let modTypes = moduleTypes.map(mod => mod.value)
let present = false
Object.keys(options).forEach(modType => {
  if (modTypes.findIndex(mod => mod === modType) > -1) {
    present = true;
    return;
  }
})
console.log(present)