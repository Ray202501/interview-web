<template><div><h1 id="html5" tabindex="-1"><a class="header-anchor" href="#html5"><span>HTML5</span></a></h1>
<p>HTML5 是 HTML 的第五个版本，相较于之前的版本，它引入了许多新的特性和功能。</p>
<h2 id="一、-新的特性" tabindex="-1"><a class="header-anchor" href="#一、-新的特性"><span>一、🎉 新的特性</span></a></h2>
<h3 id="_1、语义化标签" tabindex="-1"><a class="header-anchor" href="#_1、语义化标签"><span>1、语义化标签</span></a></h3>
<ul>
<li>引入了如 <code v-pre>&lt;header&gt;、&lt;footer&gt;、&lt;nav&gt;、&lt;article&gt;、&lt;section&gt;</code> 等新的语义化标签，使得网页结构更加清晰，有利于搜索引擎优化和屏幕阅读器解析。</li>
</ul>
<h3 id="_2、多媒体支持" tabindex="-1"><a class="header-anchor" href="#_2、多媒体支持"><span>2、多媒体支持</span></a></h3>
<p>增加了 <code v-pre>&lt;video&gt;</code> 和 <code v-pre>&lt;audio&gt;</code> 标签，使得在网页中嵌入视频和音频变得更加简单和直观，消除了对第三方插件（如 Flash）的依赖。</p>
<h3 id="_3、canvas-绘图" tabindex="-1"><a class="header-anchor" href="#_3、canvas-绘图"><span>3、Canvas 绘图</span></a></h3>
<p>提供了 <code v-pre>&lt;canvas&gt;</code> 元素，使得开发者可以使用 JavaScript 在网页上绘制图形、动画和图像，为创建交互式和动态的图形提供了原生的方法。</p>
<h3 id="_4、本地存储" tabindex="-1"><a class="header-anchor" href="#_4、本地存储"><span>4、本地存储</span></a></h3>
<ul>
<li>引入了 LocalStorage 和 SessionStorage 两种本地存储方式，可以在客户端本地存储数据，减少服务器请求，提高网页性能。</li>
</ul>
<h3 id="_5、响应式设计" tabindex="-1"><a class="header-anchor" href="#_5、响应式设计"><span>5、响应式设计</span></a></h3>
<ul>
<li>通过媒体查询和弹性布局等 CSS 功能，使得开发响应式 Web 设计更加容易。</li>
</ul>
<h3 id="_6、web-workers" tabindex="-1"><a class="header-anchor" href="#_6、web-workers"><span>6、Web Workers</span></a></h3>
<ul>
<li>允许 JavaScript 在后台运行，不会阻塞主线程，从而提高网页的响应速度和性能。</li>
</ul>
<h3 id="_7、web-sockets" tabindex="-1"><a class="header-anchor" href="#_7、web-sockets"><span>7、Web Sockets</span></a></h3>
<ul>
<li>支持 Web Socket 协议，可以实现客户端和服务器之间的实时双向通信，适用于在线游戏、实时聊天等应用。</li>
</ul>
<h3 id="_8、表单增强" tabindex="-1"><a class="header-anchor" href="#_8、表单增强"><span>8、表单增强</span></a></h3>
<ul>
<li>引入了新的表单元素和属性，如 email、url、date 等，以及表单验证功能，增强了用户体验。</li>
</ul>
<h3 id="_9、拖放-api" tabindex="-1"><a class="header-anchor" href="#_9、拖放-api"><span>9、拖放 API</span></a></h3>
<ul>
<li>提供了拖放功能，使得在网页中实现元素的拖拽操作变得更加简单。</li>
</ul>
<h3 id="_10、web-components" tabindex="-1"><a class="header-anchor" href="#_10、web-components"><span>10、Web Components</span></a></h3>
<ul>
<li>允许开发者创建自定义的 HTML 元素，并将其封装为独立的组件，实现模块化开发。</li>
</ul>
<h3 id="_11、地理位置定位" tabindex="-1"><a class="header-anchor" href="#_11、地理位置定位"><span>11、地理位置定位</span></a></h3>
<ul>
<li>提供了地理定位 API，通过浏览器可以获取用户设备的地理位置信息，用于创建基于位置的应用程序。</li>
</ul>
<h2 id="二、🤡-web-components" tabindex="-1"><a class="header-anchor" href="#二、🤡-web-components"><span>二、🤡 Web Components</span></a></h2>
<p>Web Components 是一套由浏览器原生支持的WebAPI，允许开发者✅创建可重用、✅封装良好的自定义HTML元素。它由以下三个主要技术组成：</p>
<ul>
<li>1、Custom Elements（自定义元素）</li>
</ul>
<p>允许开发者定义自己的 HTML 标签及其行为。例如，可以创建一个 <code v-pre>&lt;hello-world&gt;</code> 元素，该元素在页面中显示 &quot;Hello, World!&quot;。</p>
<ul>
<li>2、Shadow DOM（影子 DOM）</li>
</ul>
<p>用于将封装的&quot;影子&quot;DOM树附加到元素(例如：不想看到<code v-pre>&lt;user-card&gt;</code>的内部代码, Web Component 允许内部代码隐藏起来，这叫做 Shadow DOM，即这部分 DOM 默认与外部 DOM 隔离，内部任何代码都无法影响外部。)，与主文档 DOM 分开呈现。这样可以保持元素的功能私有，<b>避免样式和脚本冲突</b>。</p>
<ul>
<li>3、HTML Templates（HTML 模板）</li>
</ul>
<p><code v-pre>&lt;template&gt;</code> 和 <code v-pre>&lt;slot&gt;</code> 元素使你可以编写不在呈现页面中显示的标记模板，然后它们<strong>可以作为自定义元素结构的基础被多次重用。</strong></p>
<h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性"><span>特性</span></a></h3>
<ul>
<li>封装性：Shadow DOM 封装组件内部丝线细节，避免和其他组件或者全局组件样式冲突。</li>
<li>模块化：可以将复杂的页面分解为多个独立的组件，每个组件都是独立的模块。</li>
<li>可重用性：自定义组件，可以在不同环境和场景中重复使用。</li>
<li>跨框架兼容性</li>
</ul>
<h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h3>
<ul>
<li>兼容问题：老旧浏览器并不支持，如IE</li>
<li>性能问题：在移动设备上有可能会对页面性能产生影响</li>
</ul>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3>
<CodeTabs id="190" :data='[{"id":"HTML5"},{"id":"JavaScript"}]'>
<template #title0="{ value, isActive }">HTML5</template>
<template #title1="{ value, isActive }">JavaScript</template>
<template #tab0="{ value, isActive }">
<div class="language-html5 line-numbers-mode" data-highlighter="prismjs" data-ext="html5" data-title="html5"><pre v-pre><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">  &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span>
<span class="line">  &lt;title&gt;Web Component example&lt;/title&gt;</span>
<span class="line">  &lt;script src=&quot;./main.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line">  &lt;my-counter&gt;&lt;/my-counter&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">MyCounter</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>_count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">attachShadow</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'open'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>shadowRoot<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>incrementBtn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>shadowRoot<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.increment'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>decrementBtn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>shadowRoot<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.decrement'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>counterDisplay <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>shadowRoot<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#counter'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">createTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> template <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'template'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    template<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">      &lt;style></span>
<span class="line">        .counter-container {</span>
<span class="line">          display: flex;</span>
<span class="line">          align-items: center;</span>
<span class="line">        }</span>
<span class="line">        button {</span>
<span class="line">          margin: 0 10px;</span>
<span class="line">        }</span>
<span class="line">      &lt;/style></span>
<span class="line">      &lt;h3>Counters:&lt;/h3></span>
<span class="line">      &lt;div class="counter-container"></span>
<span class="line">        &lt;button class="increment">+&lt;/button></span>
<span class="line">        &lt;span id="counter">0&lt;/span></span>
<span class="line">        &lt;button class="decrement">-&lt;/button></span>
<span class="line">      &lt;/div></span>
<span class="line">    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> template<span class="token punctuation">.</span>content<span class="token punctuation">.</span><span class="token function">cloneNode</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">connectedCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>incrementBtn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>decrementBtn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>_count<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_count <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>_count<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">updateCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>counterDisplay<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_count<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">customElements<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">'my-counter'</span><span class="token punctuation">,</span> MyCounter<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="三、-canvas-和-svg-有什么区别" tabindex="-1"><a class="header-anchor" href="#三、-canvas-和-svg-有什么区别"><span>三、🎉 Canvas 和 SVG 有什么区别</span></a></h2>
<table>
<thead>
<tr>
<th>Canvas</th>
<th>SVG</th>
</tr>
</thead>
<tbody>
<tr>
<td>它是通过 JavaScript 来绘制的</td>
<td>使用 XML 的 2d 语言</td>
</tr>
<tr>
<td>取决于分辨率（依赖）</td>
<td>独立于分辨率（不依赖）</td>
</tr>
<tr>
<td>不支持事件处理程序</td>
<td>支持事件处理程序</td>
</tr>
<tr>
<td>适用于小规模渲染应用程序</td>
<td>在大规模渲染应用程序中表现更好</td>
</tr>
<tr>
<td>最适合图像密集型的游戏，其中的许多对象会被频繁重绘</td>
<td>不适合游戏应用，复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）</td>
</tr>
</tbody>
</table>
<p><strong>适用范围：</strong></p>
<ul>
<li>Canvas 是逐像素进行渲染的，一旦图形绘制完成，就不会继续被浏览器关注。而 SVG 是通过 DOM 操作来显示的。</li>
<li>所以 Canvas 的文本渲染能力弱，而 SVG 最适合带有大型渲染区域的应用程序。</li>
<li>Canvas 最适合有许多对象要被频繁重绘的图形密集型游戏。</li>
<li>SVG 由于 DOM 操作 在复杂度高的游戏应用中 会减慢渲染速度。所以不适合在游戏应用。</li>
</ul>
</div></template>


