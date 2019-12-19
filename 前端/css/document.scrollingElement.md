# 控制窗体滚动

1. 桌面浏览器
  `document.documentElement.scrollTop`

2. 移动端浏览器
  `document.body.scrollTop`
  
3. 兼容
  `document.scrollingElement.scrollTop`
  在桌面浏览器
  `document.scrollingElement.tagName` // html
  在移动端浏览器
  `document.scrollingElement.tagName` // body