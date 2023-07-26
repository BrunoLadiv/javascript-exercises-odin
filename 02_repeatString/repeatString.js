const repeatString = function (string, times) {
  if (times < 0) {
    return 'ERROR'
  }
  let newString = ''
  for (let index = 0; index < times; index++) {
    newString += string
  }
  return newString
}

// Do not edit below this line
module.exports = repeatString

// console.log(repeatString('hey', 4))
