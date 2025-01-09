<template><div><h1 id="问题-说说javascript中的事件模型" tabindex="-1"><a class="header-anchor" href="#问题-说说javascript中的事件模型"><span>问题：说说JavaScript中的事件模型</span></a></h1>
<h2 id="一、事件与事件流" tabindex="-1"><a class="header-anchor" href="#一、事件与事件流"><span>一、事件与事件流</span></a></h2>
<p><code v-pre>javascript</code>中的事件，可以理解就是在<code v-pre>HTML</code>文档或者浏览器中发生的一种交互操作，使得网页具备互动性， 常见的有加载事件、鼠标事件、自定义事件等。</p>
<p>由于<code v-pre>DOM</code>是一个树结构，如果在父子节点绑定事件时候，当触发子节点的时候，就存在一个顺序问题，这就涉及到了事件流的概念。</p>
<p>事件流都会经历三个阶段：</p>
<ul>
<li>事件捕获阶段(capture phase)</li>
<li>处于目标阶段(target phase)</li>
<li>事件冒泡阶段(bubbling phase)</li>
</ul>
<p>事件冒泡是一种从下往上的传播方式，由最具体的元素（触发节点）然后逐渐向上传播到最不具体的那个节点，也就是<code v-pre>DOM</code>中最高层的父节点。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Event Bubbling<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clickMe<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，我们给<code v-pre>button</code>和它的父元素，加入点击事件</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'clickMe'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">button<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'1.Button'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'2.body'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">document<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'3.document'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'4.window'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击按钮，输出如下</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token number">1</span><span class="token punctuation">.</span>button</span>
<span class="line"><span class="token number">2</span><span class="token punctuation">.</span>body</span>
<span class="line"><span class="token number">3</span><span class="token punctuation">.</span>document</span>
<span class="line"><span class="token number">4</span><span class="token punctuation">.</span>window</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击事件首先在<code v-pre>button</code>元素上发生，然后逐级向上传播</p>
<p>事件捕获与事件冒泡相反，事件最开始由不太具体的节点最早接受事件, 而最具体的节点（触发节点）最后接受事件。</p>
<h2 id="二、事件模型" tabindex="-1"><a class="header-anchor" href="#二、事件模型"><span>二、事件模型</span></a></h2>
<p>事件模型可以分为三种：</p>
<ul>
<li>原始事件模型（DOM0级）</li>
<li>标准事件模型（DOM2级）</li>
<li>IE事件模型（基本不用）</li>
</ul>
<h3 id="原始事件模型" tabindex="-1"><a class="header-anchor" href="#原始事件模型"><span>原始事件模型</span></a></h3>
<p>事件绑定监听函数比较简单, 有两种方式：</p>
<ul>
<li>HTML代码中直接绑定</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"button"</span> onclick<span class="token operator">=</span><span class="token string">"fun()"</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>通过<code v-pre>JS</code>代码绑定</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'.btn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">btn<span class="token punctuation">.</span>onclick <span class="token operator">=</span> fun<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特性" tabindex="-1"><a class="header-anchor" href="#特性"><span>特性</span></a></h4>
<ul>
<li>绑定速度快</li>
</ul>
<p><code v-pre>DOM0</code>级事件具有很好的跨浏览器优势，会以最快的速度绑定，但由于绑定速度太快，可能页面还未完全加载出来，以至于事件可能无法正常运行。</p>
<ul>
<li>
<p>只支持冒泡，不支持捕获</p>
</li>
<li>
<p>同一个类型的事件只能绑定一次</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"button"</span> id<span class="token operator">=</span><span class="token string">"btn"</span> onclick<span class="token operator">=</span><span class="token string">"fun1()"</span><span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'.btn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">btn<span class="token punctuation">.</span>onclick <span class="token operator">=</span> fun2<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上，当希望为同一个元素绑定多个同类型事件的时候（上面的这个<code v-pre>btn</code>元素绑定2个点击事件），是不被允许的，后绑定的事件会覆盖之前的事件。</p>
<p>删除 <code v-pre>DOM0</code> 级事件处理程序只要将对应事件属性置为<code v-pre>null</code>即可。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">btn<span class="token punctuation">.</span>onclick <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="标准事件模型" tabindex="-1"><a class="header-anchor" href="#标准事件模型"><span>标准事件模型</span></a></h3>
<p>在该事件模型中，一次事件共有三个过程:</p>
<ul>
<li>事件捕获阶段：事件从<code v-pre>document</code>一直向下传播到目标元素, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行</li>
<li>事件处理阶段：事件到达目标元素, 触发目标元素的监听函数</li>
<li>事件冒泡阶段：事件从目标元素冒泡到<code v-pre>document</code>, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行</li>
</ul>
<p>事件绑定监听函数的方式如下:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">addEventListener</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> useCapture<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>事件移除监听函数的方式如下:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">removeEventListener</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> useCapture<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>参数如下：</p>
<ul>
<li><code v-pre>eventType</code>指定事件类型(不要加on)</li>
<li><code v-pre>handler</code>是事件处理函数</li>
<li><code v-pre>useCapture</code>是一个<code v-pre>boolean</code>用于指定是否在捕获阶段进行处理，一般设置为<code v-pre>false</code>与IE浏览器保持一致</li>
</ul>
<p>举个例子：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'.btn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>‘click’<span class="token punctuation">,</span> showMessage<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">btn<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>‘click’<span class="token punctuation">,</span> showMessage<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特性-1" tabindex="-1"><a class="header-anchor" href="#特性-1"><span>特性</span></a></h4>
<ul>
<li>可以在一个<code v-pre>DOM</code>元素上绑定多个事件处理器，各自并不会冲突</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>‘click’<span class="token punctuation">,</span> showMessage1<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>‘click’<span class="token punctuation">,</span> showMessage2<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>‘click’<span class="token punctuation">,</span> showMessage3<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>执行时机
当第三个参数(<code v-pre>useCapture</code>)设置为<code v-pre>true</code>就在捕获过程中执行，反之在冒泡过程中执行处理函数</li>
</ul>
<p>下面举个例子：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">'div'</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">'p'</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>span id<span class="token operator">=</span><span class="token string">'span'</span><span class="token operator">></span>Click Me<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>p <span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置点击事件</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">onClickFn</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> tagName <span class="token operator">=</span> event<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>tagName<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">var</span> phase <span class="token operator">=</span> event<span class="token punctuation">.</span>eventPhase<span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tagName<span class="token punctuation">,</span> phase<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">div<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> onClickFn<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">p<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> onClickFn<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述使用了<code v-pre>eventPhase</code>，返回一个代表当前执行阶段的整数值。1为捕获阶段、2为事件对象触发阶段、3为冒泡阶段。</p>
<p>点击<code v-pre>Click Me!</code>，输出如下</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token constant">P</span> <span class="token number">3</span></span>
<span class="line"><span class="token constant">DIV</span> <span class="token number">3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，<code v-pre>p</code>和<code v-pre>div</code>都是在冒泡阶段响应了事件，由于冒泡的特性，裹在里层的<code v-pre>p</code>率先做出响应。</p>
<p>如果把第三个参数都改为<code v-pre>true</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">div<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> onClickFn<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">p<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> onClickFn<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出如下</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token constant">DIV</span> <span class="token number">1</span></span>
<span class="line"><span class="token constant">P</span> <span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>两者都是在捕获阶段响应事件，所以<code v-pre>div</code>比<code v-pre>p</code>标签先做出响应</p>
<h3 id="ie事件模型" tabindex="-1"><a class="header-anchor" href="#ie事件模型"><span>IE事件模型</span></a></h3>
<p>IE事件模型共有两个过程:</p>
<ul>
<li>事件处理阶段：事件到达目标元素, 触发目标元素的监听函数。</li>
<li>事件冒泡阶段：事件从目标元素冒泡到<code v-pre>document</code>, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行</li>
</ul>
<p>事件绑定监听函数的方式如下:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">attachEvent</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> handler<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>事件移除监听函数的方式如下:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">detachEvent</span><span class="token punctuation">(</span>eventType<span class="token punctuation">,</span> handler<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>举个例子：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'.btn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">btn<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span>‘onclick’<span class="token punctuation">,</span> showMessage<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">btn<span class="token punctuation">.</span><span class="token function">detachEvent</span><span class="token punctuation">(</span>‘onclick’<span class="token punctuation">,</span> showMessage<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


