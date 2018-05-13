// export {}
var crypto = require('crypto');
var md5 = crypto.createHash('md5');
var result = md5.update('id' + '盐').digest('hex');
console.log(result);

interface option {
  id: number,
  html: string,
  value?: number, /* 分值， 多选时使用， 默认 1 */
}
interface ti {
  id: number, /* 题目id */
  html: string, /* 文本 */
  options: option[], /* 选项列表 */
  answers: number[], /* 答案列表，正确答案的序号 ，录入数据库后作为 id */
  type: number, /* 类型 1 单选 2 多选 3 对错 */
}
const ti: ti = {
  id: 1,
  html: '小明今年几岁？',
  options: [
    {
      id: 1,
      html: '6岁',
    },
    {
      id: 2,
      html: '9岁',
    },
    {
      id: 3,
      html: '11岁',
    },
    {
      id: 4,
      html: '13岁',
    },
  ],
  answers: [2],
  type: 1,
}
module.exports = {
  world(arg) {
    // console.log('word', arg)
  },
  // 读取题目
  t1(obj) {
    const readCode = 'readCodereadCode' // 读取码，用来加密选项的 id
    const keyCode = 'keyCodekeyCode' // 密匙
  }

};
