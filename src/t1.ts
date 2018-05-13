console.clear = function () {
  process.stdout.write('\033c\r')
}
console.clear()
var hello = require('./fn');
hello.world('h');
