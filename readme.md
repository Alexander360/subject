

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
