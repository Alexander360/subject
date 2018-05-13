console.clear = function () {
  // http://www.termsys.demon.co.uk/vtansi.htm
  // https://os.mbed.com/users/earlz/code/TermControl/rev/
  // "\033c" == "\x1bc"
  process.stdout.write('\033c')
}
console.clear()

var arr = [4, 1, 67, 12, 45, 121, 3]

var obj = {
  a: 'a',
  b: {
    c: 'c',
    d: [
      {
        e: 'e'
      },
      {
        e: 'e'
      },
      {
        e: 'e'
      },
      {
        e: 'e'
      },
      {
        e: 'e'
      },
      {
        e: 'e'
      },
      {
        e: 'e'
      },
      {
        e: 'e'
      },
      {
        e: 'e'
      },
      {
        e: 'e'
      },
      {
        e: [
          {
            f: 'f'
          },
          {
            f: 'f'
          }
        ]
      }
    ]
  },
  b2: {
    c: 'c',
    d: [
      {
        e: 'e'
      },
      {
        e: 'e'
      },
      {
        e: [
          {
            f: 'f'
          },
          {
            f: 'f'
          }
        ]
      }
    ]
  }
}

function setAddr(obj) {
  return function set(obj, addr) {
    obj[`<addr>`] = addr
    for (x in obj) {
      if (obj[x] instanceof Object && obj.hasOwnProperty(x)) {
        set(obj[x], addr + '.' + x)
      }
    }
    return obj
  }(obj, '_')
}

console.log('setAddr', JSON.stringify(setAddr(obj), null, '  '))


exports = {
  a: 1
}
