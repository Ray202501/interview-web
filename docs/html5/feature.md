# HTML5 

HTML5 是 HTML 的第五个版本，相较于之前的版本，它引入了许多新的特性和功能。

## 一、:tada: 新的特性

### 1、语义化标签

- 引入了如 `<header>、<footer>、<nav>、<article>、<section>` 等新的语义化标签，使得网页结构更加清晰，有利于搜索引擎优化和屏幕阅读器解析。

### 2、多媒体支持

增加了 `<video>` 和 `<audio>` 标签，使得在网页中嵌入视频和音频变得更加简单和直观，消除了对第三方插件（如 Flash）的依赖。

### 3、Canvas 绘图

提供了 `<canvas>` 元素，使得开发者可以使用 JavaScript 在网页上绘制图形、动画和图像，为创建交互式和动态的图形提供了原生的方法。

### 4、本地存储

- 引入了 LocalStorage 和 SessionStorage 两种本地存储方式，可以在客户端本地存储数据，减少服务器请求，提高网页性能。

### 5、响应式设计

- 通过媒体查询和弹性布局等 CSS 功能，使得开发响应式 Web 设计更加容易。

### 6、Web Workers

- 允许 JavaScript 在后台运行，不会阻塞主线程，从而提高网页的响应速度和性能。

### 7、Web Sockets

- 支持 Web Socket 协议，可以实现客户端和服务器之间的实时双向通信，适用于在线游戏、实时聊天等应用。

### 8、表单增强

- 引入了新的表单元素和属性，如 email、url、date 等，以及表单验证功能，增强了用户体验。

### 9、拖放 API

- 提供了拖放功能，使得在网页中实现元素的拖拽操作变得更加简单。

### 10、Web Components

- 允许开发者创建自定义的 HTML 元素，并将其封装为独立的组件，实现模块化开发。

### 11、地理位置定位

- 提供了地理定位 API，通过浏览器可以获取用户设备的地理位置信息，用于创建基于位置的应用程序。

## 二、🤡 Web Components

Web Components 是一套由浏览器原生支持的WebAPI，允许开发者✅创建可重用、✅封装良好的自定义HTML元素。它由以下三个主要技术组成：

 - 1、Custom Elements（自定义元素）

允许开发者定义自己的 HTML 标签及其行为。例如，可以创建一个 `<hello-world>` 元素，该元素在页面中显示 "Hello, World!"。

 - 2、Shadow DOM（影子 DOM）

用于将封装的"影子"DOM树附加到元素(例如：不想看到`<user-card>`的内部代码, Web Component 允许内部代码隐藏起来，这叫做 Shadow DOM，即这部分 DOM 默认与外部 DOM 隔离，内部任何代码都无法影响外部。)，与主文档 DOM 分开呈现。这样可以保持元素的功能私有，<b>避免样式和脚本冲突</b>。

 - 3、HTML Templates（HTML 模板）

`<template>` 和 `<slot>` 元素使你可以编写不在呈现页面中显示的标记模板，然后它们<strong>可以作为自定义元素结构的基础被多次重用。</strong>

### 特性
  - 封装性：Shadow DOM 封装组件内部丝线细节，避免和其他组件或者全局组件样式冲突。
  - 模块化：可以将复杂的页面分解为多个独立的组件，每个组件都是独立的模块。
  - 可重用性：自定义组件，可以在不同环境和场景中重复使用。
  - 跨框架兼容性

### 缺点
  - 兼容问题：老旧浏览器并不支持，如IE
  - 性能问题：在移动设备上有可能会对页面性能产生影响

### 示例
::: code-tabs

@tab HTML5

```html5
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web Component example</title>
  <script src="./main.js"></script>
</head>
<body>
  <my-counter></my-counter>
</body>
</html>
```

@tab JavaScript

```js
class MyCounter extends HTMLElement {
  constructor() {
    super();
    this._count = 0;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(this.createTemplate());
    this.incrementBtn = this.shadowRoot.querySelector('.increment');
    this.decrementBtn = this.shadowRoot.querySelector('.decrement');
    this.counterDisplay = this.shadowRoot.querySelector('#counter');
  }

  createTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .counter-container {
          display: flex;
          align-items: center;
        }
        button {
          margin: 0 10px;
        }
      </style>
      <h3>Counters:</h3>
      <div class="counter-container">
        <button class="increment">+</button>
        <span id="counter">0</span>
        <button class="decrement">-</button>
      </div>
    `;
    return template.content.cloneNode(true);
  }

  connectedCallback() {
    this.incrementBtn.addEventListener('click', () => this.increment());
    this.decrementBtn.addEventListener('click', () => this.decrement());
  }

  increment() {
    this._count++;
    this.updateCount();
  }

  decrement() {
    if (this._count > 0) {
      this._count--;
      this.updateCount();
    }
  }

  updateCount() {
    this.counterDisplay.textContent = this._count;
  }
}

customElements.define('my-counter', MyCounter);

```
:::


## 三、:tada: Canvas 和 SVG 有什么区别

| Canvas | SVG |
| --- | --- |
| 它是通过 JavaScript 来绘制的 | 使用 XML 的 2d 语言 |
| 取决于分辨率（依赖） | 独立于分辨率（不依赖） |
| 不支持事件处理程序 | 支持事件处理程序 |
| 适用于小规模渲染应用程序 | 在大规模渲染应用程序中表现更好 |
| 最适合图像密集型的游戏，其中的许多对象会被频繁重绘 | 不适合游戏应用，复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快） |

**适用范围：**

- Canvas 是逐像素进行渲染的，一旦图形绘制完成，就不会继续被浏览器关注。而 SVG 是通过 DOM 操作来显示的。
- 所以 Canvas 的文本渲染能力弱，而 SVG 最适合带有大型渲染区域的应用程序。
- Canvas 最适合有许多对象要被频繁重绘的图形密集型游戏。
- SVG 由于 DOM 操作 在复杂度高的游戏应用中 会减慢渲染速度。所以不适合在游戏应用。