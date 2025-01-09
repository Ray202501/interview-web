<template><div><h1 id="问题-说说你对事件循环的理解" tabindex="-1"><a class="header-anchor" href="#问题-说说你对事件循环的理解"><span>问题：说说你对事件循环的理解</span></a></h1>
<h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么"><span>一、是什么</span></a></h2>
<p>首先，<code v-pre>JavaScript </code>是一门单线程的语言，意味着同一时间内只能做一件事，但是这并不意味着单线程就是阻塞，而实现单线程非阻塞的方法就是事件循环。</p>
<p>在<code v-pre>JavaScript</code>中，所有的任务都可以分为：</p>
<ul>
<li>同步任务：立即执行的任务，同步任务一般会直接进入到主线程中执行；</li>
<li>异步任务：异步执行的任务，比如<code v-pre>ajax</code>网络请求，<code v-pre>setTimeout </code>定时函数等；</li>
</ul>
<p>同步任务与异步任务的运行流程图如下：
从上面我们可以看到，同步任务进入主线程，即主执行栈，异步任务进入任务队列，主线程内的任务执行完毕为空，会去任务队列读取对应的任务，推入主线程执行。上述过程的不断重复就事件循环。</p>
<h2 id="二、宏任务与微任务" tabindex="-1"><a class="header-anchor" href="#二、宏任务与微任务"><span>二、宏任务与微任务</span></a></h2>
<p>如果将任务划分为同步任务和异步任务并不是那么的准确，举个例子：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'new Promise'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'then'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果按照上面流程图来分析代码，我们会得到下面的执行步骤：</p>
<ul>
<li><code v-pre>console.log(1) </code>，同步任务，主线程中执行</li>
<li><code v-pre>setTimeout()</code> ，异步任务，放到 <code v-pre>Event Table</code>，0 毫秒后<code v-pre>console.log(2) </code>回调推入 <code v-pre>Event Queue</code> 中</li>
<li><code v-pre>new Promise</code> ，同步任务，主线程直接执行</li>
<li><code v-pre>.then</code> ，异步任务，放到 <code v-pre>Event Table</code></li>
<li><code v-pre>console.log(3)</code>，同步任务，主线程执行</li>
</ul>
<p>所以按照分析，它的结果应该是 <code v-pre>1</code> =&gt; <code v-pre>'new Promise'</code> =&gt; <code v-pre>3</code> =&gt; <code v-pre>2</code> =&gt; <code v-pre>'then'</code></p>
<p>但是实际结果是：<code v-pre>1</code>=&gt;<code v-pre>'new Promise'</code>=&gt; <code v-pre>3</code> =&gt; <code v-pre>'then'</code> =&gt; <code v-pre>2</code></p>
<p>出现分歧的原因在于异步任务执行顺序，事件队列其实是一个“先进先出”的数据结构，排在前面的事件会优先被主线程读取。</p>
<p>例子中 <code v-pre>setTimeout</code>回调事件是先进入队列中的，按理说应该先于 <code v-pre>.then</code> 中的执行，但是结果却偏偏相反。</p>
<p>原因在于异步任务还可以细分为微任务与宏任务：</p>
<h3 id="微任务" tabindex="-1"><a class="header-anchor" href="#微任务"><span>微任务</span></a></h3>
<p>一个需要异步执行的函数，执行时机是在主函数执行结束之后、当前宏任务结束之前。
常见的微任务有：</p>
<ul>
<li>Promise.then</li>
<li>MutaionObserver</li>
<li>Object.observe（已废弃；Proxy 对象替代）</li>
<li>process.nextTick（Node.js）</li>
</ul>
<h3 id="宏任务" tabindex="-1"><a class="header-anchor" href="#宏任务"><span>宏任务</span></a></h3>
<p>宏任务的时间粒度比较大，执行的时间间隔是不能精确控制的，对一些高实时性的需求就不太符合。
常见的宏任务有：</p>
<ul>
<li>script (可以理解为外层同步代码)</li>
<li>setTimeout/setInterval</li>
<li>UI rendering/UI事件</li>
<li>postMessage、MessageChannel</li>
<li>setImmediate、I/O（Node.js）</li>
</ul>
<p>按照这个流程，它的执行机制是：</p>
<ul>
<li>执行一个宏任务，如果遇到微任务就将它放到微任务的事件队列中</li>
<li>当前宏任务执行完成后，会查看微任务的事件队列，然后将里面的所有微任务依次执行完</li>
</ul>
<p>回到上面的题目</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'new Promise'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'then'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>流程如下</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 遇到 console.log(1) ，直接打印 1</span></span>
<span class="line"><span class="token comment">// 遇到定时器，属于新的宏任务，留着后面执行</span></span>
<span class="line"><span class="token comment">// 遇到 new Promise，这个是直接执行的，打印 'new Promise'</span></span>
<span class="line"><span class="token comment">// .then 属于微任务，放入微任务队列，后面再执行</span></span>
<span class="line"><span class="token comment">// 遇到 console.log(3) 直接打印 3</span></span>
<span class="line"><span class="token comment">// 好了本轮宏任务执行完毕，现在去微任务列表查看是否有微任务，发现 .then 的回调，执行它，打印 'then'</span></span>
<span class="line"><span class="token comment">// 当一次宏任务执行完，再去执行新的宏任务，这里就剩一个定时器的宏任务了，执行它，打印 2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、async与await" tabindex="-1"><a class="header-anchor" href="#三、async与await"><span>三、async与await</span></a></h2>
<p><code v-pre>async</code> 是异步的意思，<code v-pre>await </code>则可以理解为 <code v-pre>async wait</code>。所以可以理解<code v-pre>async</code>就是用来声明一个异步方法，而 <code v-pre>await </code>是用来等待异步方法执行。</p>
<h3 id="async" tabindex="-1"><a class="header-anchor" href="#async"><span>async</span></a></h3>
<p><code v-pre>async</code>函数返回一个<code v-pre>promise</code>对象，下面两种方法是等效的</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'TEST'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// asyncF is equivalent to f!</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncF</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token string">'TEST'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="await" tabindex="-1"><a class="header-anchor" href="#await"><span>await</span></a></h3>
<p>正常情况下，<code v-pre>await</code>命令后面是一个 <code v-pre>Promise </code>对象，返回该对象的结果。如果不是 <code v-pre>Promise </code>对象，就直接返回对应的值。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 等同于</span></span>
<span class="line">    <span class="token comment">// return 123</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token number">123</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不管<code v-pre>await</code>后面跟着的是什么，<code v-pre>await</code>都会阻塞后面的代码。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn1</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 阻塞</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn2</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fn2'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中，<code v-pre>await</code> 会阻塞下面的代码（即加入微任务队列），先执行 <code v-pre>async </code>外面的同步代码，同步代码执行完，再回到 <code v-pre>async</code> 函数中，再执行之前阻塞的代码。
所以上述输出结果为：<code v-pre>1</code>，<code v-pre>fn2</code>，<code v-pre>3</code>，<code v-pre>2</code></p>
<h2 id="四、流程分析" tabindex="-1"><a class="header-anchor" href="#四、流程分析"><span>四、流程分析</span></a></h2>
<p>通过对上面的了解，我们对<code v-pre>JavaScript</code>对各种场景的执行顺序有了大致的了解。
这里直接上代码：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async1 start'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async1 end'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async2'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'script start'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'settimeout'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'promise1'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'promise2'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'script end'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析过程：</p>
<ol>
<li>执行整段代码，遇到 <code v-pre>console.log('script start')</code> 直接打印结果，输出 <code v-pre>script start</code></li>
<li>遇到定时器了，它是宏任务，先放着不执行</li>
<li>遇到 <code v-pre>async1()</code>，执行 <code v-pre>async1</code> 函数，先打印 <code v-pre>async1 start</code>，下面遇到<code v-pre>await</code>怎么办？先执行 <code v-pre>async2</code>，打印 <code v-pre>async2</code>，然后阻塞下面代码（即加入微任务列表），跳出去执行同步代码</li>
<li>跳到 <code v-pre>new Promise</code> 这里，直接执行，打印 <code v-pre>promise1</code>，下面遇到 <code v-pre>.then()</code>，它是微任务，放到微任务列表等待执行</li>
<li>最后一行直接打印 <code v-pre>script end</code>，现在同步代码执行完了，开始执行微任务，即 <code v-pre>await </code>下面的代码，打印 <code v-pre>async1 end</code></li>
<li>继续执行下一个微任务，即执行 <code v-pre>then</code> 的回调，打印 <code v-pre>promise2</code></li>
<li>上一个宏任务所有事都做完了，开始下一个宏任务，就是定时器，打印 <code v-pre>settimeout</code></li>
</ol>
<p>所以最后的结果是：<code v-pre>script start</code>、<code v-pre>async1 start</code>、<code v-pre>async2</code>、<code v-pre>promise1</code>、<code v-pre>script end</code>、<code v-pre>async1 end</code>、<code v-pre>promise2</code>、<code v-pre>settimeout</code></p>
</div></template>


