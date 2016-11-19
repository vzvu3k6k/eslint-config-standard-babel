// Clone feross/eslint-config-standard and
// xjamundx/eslint-plugin-standard,
// then run `node generate.js | standard - --fix`

let standard = require('./eslint-config-standard').rules
let eslintBabel = require('./eslint-plugin-babel').rules

let rules = {}

for (let s of Object.keys(standard)) {
  if (s in eslintBabel) {
    rules[`babel/${s}`] = standard[s]
    rules[s] = 0
  }
}

console.log(`module.exports = ${JSON.stringify({ rules }, null, 2)}`)
