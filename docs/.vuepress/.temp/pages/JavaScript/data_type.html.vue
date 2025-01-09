<template><div><h1 id="问题-说说javascript中的数据类型-存储上的差别" tabindex="-1"><a class="header-anchor" href="#问题-说说javascript中的数据类型-存储上的差别"><span>问题：说说JavaScript中的数据类型？存储上的差别？</span></a></h1>
<p>在<code v-pre>JavaScript</code>中，我们可以分成两种类型：</p>
<ul>
<li>基本类型</li>
<li>复杂类型</li>
</ul>
<p>两种类型的区别是：存储位置不同；</p>
<h2 id="一、基本类型" tabindex="-1"><a class="header-anchor" href="#一、基本类型"><span>一、基本类型</span></a></h2>
<p>基本类型主要为以下6种：</p>
<ul>
<li>Number</li>
<li>String</li>
<li>Boolean</li>
<li>Undefined</li>
<li>null</li>
<li>symbol</li>
</ul>
<h3 id="number" tabindex="-1"><a class="header-anchor" href="#number"><span>Number</span></a></h3>
<p>数值最常见的整数类型格式则为十进制，还可以设置八进制（零开头）、十六进制（0x开头）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> intNum <span class="token operator">=</span> <span class="token number">55</span> <span class="token comment">// 10进制的55</span></span>
<span class="line"><span class="token keyword">let</span> num1 <span class="token operator">=</span> <span class="token number">070</span> <span class="token comment">// 8进制的56</span></span>
<span class="line"><span class="token keyword">let</span> hexNum1 <span class="token operator">=</span> <span class="token number">0xA</span> <span class="token comment">//16进制的10</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浮点类型则在数值汇总必须包含小数点，还可通过科学计数法表示</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> floatNum1 <span class="token operator">=</span> <span class="token number">1.1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> floatNum2 <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> floatNum3 <span class="token operator">=</span> <span class="token number">.1</span><span class="token punctuation">;</span> <span class="token comment">// 有效，但不推荐</span></span>
<span class="line"><span class="token keyword">let</span> floatNum <span class="token operator">=</span> <span class="token number">3.125e7</span><span class="token punctuation">;</span> <span class="token comment">// 等于 31250000</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在数值类型中，存在一个特殊数值<code v-pre>NaN</code>，意为“不是数值”，用于表示本来要返回数值的操作失败了（而不是抛出错误）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0</span><span class="token operator">/</span><span class="token operator">+</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="undefined" tabindex="-1"><a class="header-anchor" href="#undefined"><span>Undefined</span></a></h3>
<p><code v-pre>Undefined</code> 类型只有一个值，就是特殊值 <code v-pre>undefined</code>。当使用 <code v-pre>var </code>或 <code v-pre>let </code>声明了变量但没有初始化时，就相当于给变量赋予了 <code v-pre>undefined </code>值</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> message<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>包含<code v-pre> undefined</code> 值的变量跟未定义变量是有区别的</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> message<span class="token punctuation">;</span> <span class="token comment">// 这个变量被声明了，只是值为 undefined</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "undefined"</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 没有声明过这个变量，报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string"><span>String</span></a></h3>
<p>字符串可以使用双引号（&quot;）、单引号（'）或反引号（`）标示</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> firstName <span class="token operator">=</span> <span class="token string">"John"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> lastName <span class="token operator">=</span> <span class="token string">'Jacob'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> lastName <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Jingleheimerschmidt</span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字符串是不可变的，意思是一旦创建，它们的值就不能变了</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> lang <span class="token operator">=</span> <span class="token string">"Java"</span><span class="token punctuation">;</span></span>
<span class="line">lang <span class="token operator">=</span> lang <span class="token operator">+</span> <span class="token string">"Script"</span><span class="token punctuation">;</span>  <span class="token comment">// 先销毁再创建</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="null" tabindex="-1"><a class="header-anchor" href="#null"><span>Null</span></a></h3>
<p><code v-pre>Null </code>类型同样只有一个值，即特殊值 <code v-pre>null</code></p>
<p>逻辑上讲， null 值表示一个空对象指针，这也是给<code v-pre>typeof </code>传一个 <code v-pre>null</code> 会返回 <code v-pre>&quot;object&quot;</code> 的原因</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> car<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "object"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>undefined</code> 值是由 <code v-pre>null </code>值派生而来</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>只要变量要保存对象，而当时又没有那个对象可保存，就可用 <code v-pre>null </code>来填充该变量。</p>
<h3 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean"><span>Boolean</span></a></h3>
<p><code v-pre>Boolean </code>（布尔值）类型有两个字面值： <code v-pre>true</code> 和<code v-pre> false</code></p>
<p>通过<code v-pre>Boolean</code>可以将其他类型的数据转化成布尔值</p>
<p>规则如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">数据类型      		转换为 <span class="token boolean">true</span> 的值      		转换为 <span class="token boolean">false</span> 的值</span>
<span class="line">String 					非空字符串      				<span class="token string">""</span> </span>
<span class="line">Number 					非零数值（包括无穷值）			<span class="token number">0</span> 、 <span class="token number">NaN</span> </span>
<span class="line">Object 					任意对象 					<span class="token keyword">null</span></span>
<span class="line">Undefined 				<span class="token constant">N</span><span class="token operator">/</span><span class="token constant">A</span> （不存在） 				<span class="token keyword">undefined</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="symbol" tabindex="-1"><a class="header-anchor" href="#symbol"><span>Symbol</span></a></h3>
<p>Symbol （符号）是原始值，且符号实例是唯一、不可变的。符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> symbol1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> symbol2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> symbol3 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> symbol1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Expected output: "symbol"</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>symbol2 <span class="token operator">===</span> <span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Expected output: false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>symbol3<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Expected output: "Symbol(foo)"</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Expected output: false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">"symbol"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Expected output: true</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"a"</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">"b"</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"b"</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">[</span><span class="token string">"c"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"cc"</span><span class="token punctuation">;</span></span>
<span class="line">obj<span class="token punctuation">.</span>d <span class="token operator">=</span> <span class="token string">"dd"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 注意： Symbols 在 for...in 迭代中不可枚举</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// logs keys "c" and "d"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用场景：
作为对象的键（key），防止属性值覆盖</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> sym1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> sym2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">[</span>sym1<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">"鱼钓猫"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span>sym2<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">"的小鱼干"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { Symbol(test): '鱼钓猫', Symbol(test): '的小鱼干' }</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但同时这会导致一个问题，正常的遍历或属性获取都会把 Symbol 忽略掉。可以使用 Object.getOwnPropertySymbols 或 Reflect.ownKeys 来获取 Symbol 键名。</p>
<h2 id="二、引用类型" tabindex="-1"><a class="header-anchor" href="#二、引用类型"><span>二、引用类型</span></a></h2>
<p>复杂类型统称为<code v-pre>Object</code>，我们这里主要讲述下面三种：</p>
<ul>
<li>Object</li>
<li>Array</li>
<li>Function</li>
</ul>
<h3 id="object" tabindex="-1"><a class="header-anchor" href="#object"><span>Object</span></a></h3>
<p>创建<code v-pre>object</code>常用方式为对象字面量表示法，属性名可以是字符串或数值</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Nicholas"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"age"</span><span class="token operator">:</span> <span class="token number">29</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token number">5</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array" tabindex="-1"><a class="header-anchor" href="#array"><span>Array</span></a></h3>
<p><code v-pre>JavaScript</code>数组是一组有序的数据，但跟其他语言不同的是，数组中每个槽位可以存储任意类型的数据。并且，数组也是动态大小的，会随着数据添加而自动增长</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">colors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="function" tabindex="-1"><a class="header-anchor" href="#function"><span>Function</span></a></h3>
<p>函数实际上是对象，每个函数都是 <code v-pre>Function</code>类型的实例，而 <code v-pre>Function </code>也有属性和方法，跟其他引用类型一样</p>
<p>函数存在三种常见的表达方式：</p>
<ul>
<li>函数声明</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 函数声明</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">sum</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>函数表达式</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>箭头函数</li>
</ul>
<p>函数声明和函数表达式两种方式</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他引用类型" tabindex="-1"><a class="header-anchor" href="#其他引用类型"><span>其他引用类型</span></a></h3>
<p>除了上述说的三种之外，还包括<code v-pre>Date</code>、<code v-pre>RegExp</code>、<code v-pre>Map</code>、<code v-pre>Set</code>等...</p>
<h2 id="三、存储区别" tabindex="-1"><a class="header-anchor" href="#三、存储区别"><span>三、存储区别</span></a></h2>
<p>基本数据类型和引用数据类型存储在内存中的位置不同：</p>
<ul>
<li>基本数据类型存储在栈中</li>
<li>引用类型的对象存储于堆中</li>
</ul>
<p>当我们把变量赋值给一个变量时，解析器首先要确认的就是这个值是基本类型值还是引用类型值</p>
<p>下面来举个例子</p>
<h3 id="基本类型" tabindex="-1"><a class="header-anchor" href="#基本类型"><span>基本类型</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span> <span class="token comment">// 赋值操作</span></span>
<span class="line">b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10值</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>a</code>的值为一个基本类型，是存储在栈中，将<code v-pre>a</code>的值赋给<code v-pre>b</code>，虽然两个变量的值相等，但是两个变量保存了两个不同的内存地址</p>
<h3 id="引用类型" tabindex="-1"><a class="header-anchor" href="#引用类型"><span>引用类型</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">var</span> obj2 <span class="token operator">=</span> obj1<span class="token punctuation">;</span></span>
<span class="line">obj2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Xxx"</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// xxx</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引用类型数据存放在堆中，每个堆内存对象都有对应的引用地址指向它，引用地址存放在栈中。</p>
<p><code v-pre>obj1</code>是一个引用类型，在赋值操作过程汇总，实际是将堆内存对象在栈内存的引用地址复制了一份给了<code v-pre>obj2</code>，实际上他们共同指向了同一个堆内存对象，所以更改<code v-pre>obj2</code>会对<code v-pre>obj1</code>产生影响</p>
<h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h3>
<ul>
<li>声明变量时不同的内存地址分配：
<ul>
<li>简单类型的值存放在栈中，在栈中存放的是对应的值</li>
<li>引用类型对应的值存储在堆中，在栈中存放的是指向堆内存的地址</li>
</ul>
</li>
<li>不同的类型数据导致赋值变量时的不同：
<ul>
<li>简单类型赋值，是生成相同的值，两个对象对应不同的地址</li>
<li>复杂类型赋值，是将保存对象的内存地址赋值给另一个变量。也就是两个变量指向堆内存中同一个对象</li>
</ul>
</li>
</ul>
</div></template>


