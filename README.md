react 同构的核心原理在 [react-server](https://github.com/demos-platform/react-server) 中有所涉及。

看了下 next 的文档，有些语法上有老版本 react 的身影。有蛮多点可以深究和学习的。

### 自问自答

1. next.js 中能不能使用 redux

可以的。了解到同构的本质后，其实服务端只负责了首次的渲染，而后客户端就接管了渲染的职责。所以 redux 在同构中的实践个人目前认为其与客户端并无差别。