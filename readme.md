# 答题系统

功能：
选择题、填空题。

## 选择题
管理
	- 添加题目
		如：

			1+1等于几？
			  t 二
			  t 2
			    3

			2+2等于几？
			    2
			    3
			  t 4

		单行题目及单行选项，使用两个空格缩进表示选项，
		在选项前面使用t 表示正确答案。
		有多项正确时自动转为多选题。
		使用空格让它们格式清晰。
		多个题目建议使用一个空行分开。

	- 管理已有的题目
		所有题目右边的按钮都是处理当前单个题目。
		页面顶部可进行批量操作，如多选、反选、显示选项。

答题

## json
``` js
	{
		title: '', // 题目标题
		key: [], // 答案
		value: '', // 分值
		type: '', // 类型 选择题、 填空题
		tag: '', // 标签 对题目的分类， 如 be动词、 名词复数

}
```

# 坑
使用原来 react-create-app 创建后添加 .bablelrc 添加配置无效。
使用 npm run eject 弹出后， 添加 .bablelrc 文件会导致 react 报错。

## 解决方法:
方法一：
亲测有效。
使用 npm run eject 弹出后，
在 webpack 配置中添加 `plugins: [["import", { libraryName: "antd-mobile", style: "css" }]]`

方法二：
是一种不通过 eject 却可以进行配置的方法。
亲测有效。
https://github.com/timarney/react-app-rewired
ƒ
## 坑
使用 ts 后报错
Module '"node_modules/@types/react/index"' has no default export.

## 同类参考
轻速云考试平台
https://www.qingsuyun.com/version-compare/

考试酷 - 电子作业与在线考试系统公共题库中心
https://www.examcoo.com/index/ku
考试酷 - 题目录入格式
https://www.examcoo.com/help/formatpaper/index.html

在线考试系统（Online Exam System）--ASP.NET
https://www.cnblogs.com/A--Q/p/5877437.html

PPFrame 是一个通用的在线考试系统，现在基本能模拟所有考试。
http://www.ppframe.com/

在线培训系统和考试系统
http://www.orivon.com/

Yodati - 优答题
http://www.hadsky.com/htmlpage-yodati.html

新启科技
http://www.newstartsoft.com/Products

百一测评
https://www.101test.com/

TomExam网络考试系统
http://www.tomexam.com/

考试星
https://www.kaoshixing.com/

## 功能
### 题目选项随机

1. 小明有几岁？
	A. 5岁
	B. 6岁
	C. 7岁
	D. 8岁
	答案: C


1. 小明有几岁？
	A. 5岁
	B. 8岁
	C. 6岁
	D. 7岁

## node 的 types
如果不使用 types 类似 `module.exports` 的代码会被警告 `[ts] Cannot find name 'module'` 。
解决方法：
### 安装
2.0以后不再需要typings或者tsd了，所有的type都只需要用npm来安装。
`npm i -S @types/<包名>`

### 使用
- 在文件中使用: 在要用的文件前面加上types directive:
`/// <reference types="node" />`
- 在整个项目中使用: 在tsconfig.json里面加上一个types 属性:
``` json
	{
		"compilerOptions": {
				"types": [
						"node"
				]
		}
	}

```

## ts 常用类型
| any | 可表示动态类型
| string | 字符串
| number | 数字
| bool | true或false
| null | null
| undefined | undefined
| void | void
| string[] | 字符串数组
| {a;b;} | 等于{a:any; b:any;}
| { a:string, b: number; } |
| { a:string, ()=>number; } | 后面那个是函数
| () => void | 表示形如 function() {} 这样的函数
| (string) => number | 表示形如 function(name:string) { return 10; } 这样的函数
| { [string]: number; } | 表示一个object，它的key为string，值为数学，形如： { "aaa": 111, "bbb": 222}

## 问题
ts 可以指定数据是某一范围的值吗？
比如指定 type 的值为 1 或 2 。

## ? 无法重新声明块范围变量
``` ts
	// export {}
	const crypto = require('crypto')
```
上面的代码会提示 `[ts] Cannot redeclare block-scoped variable 'crypto'.`
几种解决方法:
- 添加 `export {}` 即可。
- 使用 crypto 之外的名字
- 配置 tsconfig.json
``` json
	{
		"compilerOptions": {
				"lib": ["es6"]
		}
	}
```
参考: https://fullstack-developer.academy/cannot-redeclare-block-scoped-variable-name/
