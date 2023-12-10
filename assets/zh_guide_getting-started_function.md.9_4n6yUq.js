import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.jBbNkKut.js";const y=JSON.parse('{"title":"函数","description":"","frontmatter":{"prev":{"text":"流程控制","link":"/zh/guide/getting-started/control-flow"},"next":false},"headers":[],"relativePath":"zh/guide/getting-started/function.md","filePath":"zh/guide/getting-started/function.md"}'),p={name:"zh/guide/getting-started/function.md"},e=l(`<h1 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h1><p>WhirlScript 的函数分为两种：普通函数和宏函数。</p><h2 id="定义函数" tabindex="-1">定义函数 <a class="header-anchor" href="#定义函数" aria-label="Permalink to &quot;定义函数&quot;">​</a></h2><p>一个<strong>函数定义</strong>（也称为<strong>函数声明</strong>，或<strong>函数语句</strong>）由 <code>function</code> 关键字，并跟随以下部分组成：</p><ul><li>函数名称。</li><li>函数参数列表，包围在括号中并由逗号分隔。</li><li>函数返回值类型。</li><li>定义函数的 WhirlScript 语句，用大括号括起来，<code>{ /* … */ }</code>。</li></ul><p>参数列表中的参数需要同时定义类型。</p><p>例如，以下的代码定义了一个名为 <code>add</code> 的函数：</p><div class="language-whirlscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">whirlscript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">function add(x:int, y:int):int {</span></span>
<span class="line"><span style="color:#E1E4E8;">    return x + y;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">function add(x:int, y:int):int {</span></span>
<span class="line"><span style="color:#24292E;">    return x + y;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>函数 <code>add</code> 接收两个名为 <code>x</code>、<code>y</code> 的参数，它们的类型都为 <code>int</code>，且函数返回值类型为 <code>int</code>。这个函数只有一个语句，其表示该函数将函数的参数（即 <code>x</code>、<code>y</code>）相加后返回。函数的 <code>return</code> 语句指定了函数的返回值：<code>x + y</code>。</p><p>参数本质上是<strong>按值</strong>传递给函数的——因此，即使函数体的代码为传递给函数的参数赋了新值，<strong>这个改变也不会反映到全局或调用该函数的代码中</strong>。</p><p>对于没有返回值的函数，可以不声明返回值类型或声明为 <code>void</code>。</p><h3 id="参数限定" tabindex="-1">参数限定 <a class="header-anchor" href="#参数限定" aria-label="Permalink to &quot;参数限定&quot;">​</a></h3><p>对于参数列表中的每一项，声明都由以下部分组成：</p><ul><li>常变量限定，使用 <code>var</code> 和 <code>const</code> 关键字，可省。</li><li>运行时、编译期变量限定，使用 <code>runtime</code> 和 <code>macro</code> 关键字，可省。</li><li>名称。</li><li>参数类型。</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>字面值也属于编译期常量。</p></div><p>比如，这个函数接受一个宏变量：</p><div class="language-whirlscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">whirlscript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">function f(var macro x:int):int {</span></span>
<span class="line"><span style="color:#E1E4E8;">    // ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">function f(var macro x:int):int {</span></span>
<span class="line"><span style="color:#24292E;">    // ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="调用函数" tabindex="-1">调用函数 <a class="header-anchor" href="#调用函数" aria-label="Permalink to &quot;调用函数&quot;">​</a></h2><p>定义的函数并不会自动执行它。定义了函数仅仅是赋予函数以名称并明确函数被调用时该做些什么。</p><p><strong>调用</strong>函数才会以给定的参数真正执行这些动作。例如，一旦你定义了函数 <code>add</code>，你可以像这样调用它：</p><div class="language-whirlscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">whirlscript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">add(1, 2);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">add(1, 2);</span></span></code></pre></div><p>上述语句使用参数 <code>1</code>、<code>2</code> 来调用函数。函数执行完它的语句会返回值 <code>3</code>。</p><p>函数可以调用其本身。例如，下面这个函数就是用递归计算阶乘：</p><div class="language-whirlscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">whirlscript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">function factorial(n:int):int {</span></span>
<span class="line"><span style="color:#E1E4E8;">  if (n == 0 || n == 1) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    return 1;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } else {</span></span>
<span class="line"><span style="color:#E1E4E8;">    return n * factorial(n - 1);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">function factorial(n:int):int {</span></span>
<span class="line"><span style="color:#24292E;">  if (n == 0 || n == 1) {</span></span>
<span class="line"><span style="color:#24292E;">    return 1;</span></span>
<span class="line"><span style="color:#24292E;">  } else {</span></span>
<span class="line"><span style="color:#24292E;">    return n * factorial(n - 1);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="嵌套函数和闭包" tabindex="-1">嵌套函数和闭包 <a class="header-anchor" href="#嵌套函数和闭包" aria-label="Permalink to &quot;嵌套函数和闭包&quot;">​</a></h2><p>函数定义可以在代码<strong>除了迭代</strong>的任何地方出现。</p><details class="details custom-block"><summary>为什么？</summary><p>WhirlScript 并不支持动态创建函数，因此所有的函数调用都会在编译时确定。</p></details><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>需要注意的是，即使在函数内部声明一个函数，在编译后这个函数也还是会被提到函数声明区域中。不同的只是作用域。</p></div><p>在内部函数中你可以调用在定义位置中所有可以访问的变量。例如：</p><div class="language-whirlscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">whirlscript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">function outer() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    var x:int = 1;</span></span>
<span class="line"><span style="color:#E1E4E8;">    function inner(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        x++;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    inner();</span></span>
<span class="line"><span style="color:#E1E4E8;">    println(x); //输出 2。</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">function outer() {</span></span>
<span class="line"><span style="color:#24292E;">    var x:int = 1;</span></span>
<span class="line"><span style="color:#24292E;">    function inner(){</span></span>
<span class="line"><span style="color:#24292E;">        x++;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    inner();</span></span>
<span class="line"><span style="color:#24292E;">    println(x); //输出 2。</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="默认参数" tabindex="-1">默认参数 <a class="header-anchor" href="#默认参数" aria-label="Permalink to &quot;默认参数&quot;">​</a></h2><p>在 WhirlScript 中，你可以给函数提供默认参数：</p><div class="language-whirlscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">whirlscript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">function multiple(a, b = 1):int {</span></span>
<span class="line"><span style="color:#E1E4E8;">    return a * b;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">multiple(5); //返回 5。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">function multiple(a, b = 1):int {</span></span>
<span class="line"><span style="color:#24292E;">    return a * b;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">multiple(5); //返回 5。</span></span></code></pre></div><h2 id="宏函数" tabindex="-1">宏函数 <a class="header-anchor" href="#宏函数" aria-label="Permalink to &quot;宏函数&quot;">​</a></h2><p>宏函数是 WhirlScript 预处理功能的一部分，它包含很多普通函数没有的特性：</p><h3 id="声明" tabindex="-1">声明 <a class="header-anchor" href="#声明" aria-label="Permalink to &quot;声明&quot;">​</a></h3><p>宏函数的声明和普通函数类似，只需要把关键字 <code>function</code> 替换为 <code>#function</code> 就可以了。</p><h3 id="内联" tabindex="-1">内联 <a class="header-anchor" href="#内联" aria-label="Permalink to &quot;内联&quot;">​</a></h3><p>宏函数是内联的。这意味着，宏函数在编译后会被直接插入到调用它的位置。</p><p>基于这种特性，在编写库的时候，我们推荐尽量使用宏函数。在函数段较短和调用次数较少的情况下，可以减少编译体积。对于比较底层的抽象层，我们也推荐使用宏函数。</p><h3 id="引用传值" tabindex="-1">引用传值 <a class="header-anchor" href="#引用传值" aria-label="Permalink to &quot;引用传值&quot;">​</a></h3><p>宏函数的传值是按引用传值的。这意味着你可以在宏函数中修改传递的值。</p><p>例如，以下函数会将传入值自增 <code>1</code>：</p><div class="language-whirlscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">whirlscript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">#function succ(var x: int) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    x++;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">var x = 1;</span></span>
<span class="line"><span style="color:#E1E4E8;">succ(x);</span></span>
<span class="line"><span style="color:#E1E4E8;">println(x); //输出 2。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">#function succ(var x: int) {</span></span>
<span class="line"><span style="color:#24292E;">    x++;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">var x = 1;</span></span>
<span class="line"><span style="color:#24292E;">succ(x);</span></span>
<span class="line"><span style="color:#24292E;">println(x); //输出 2。</span></span></code></pre></div><h3 id="常值函数" tabindex="-1">常值函数 <a class="header-anchor" href="#常值函数" aria-label="Permalink to &quot;常值函数&quot;">​</a></h3><p>你可以使用 <code>constexpr</code> 关键字将一个宏函数声明为一个常值函数。</p><p>常值函数需要返回一个值，且这个值是在编译期就可以被确定的。</p><p>例如，以下函数会在编译后变成这样：</p><div class="language-whirlscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">whirlscript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">constexpr #function factorial(macro n:int):int {</span></span>
<span class="line"><span style="color:#E1E4E8;">  if (n == 0 || n == 1) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    return 1;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } else {</span></span>
<span class="line"><span style="color:#E1E4E8;">    return n * factorial(n - 1);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">println(factorial(5));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">constexpr #function factorial(macro n:int):int {</span></span>
<span class="line"><span style="color:#24292E;">  if (n == 0 || n == 1) {</span></span>
<span class="line"><span style="color:#24292E;">    return 1;</span></span>
<span class="line"><span style="color:#24292E;">  } else {</span></span>
<span class="line"><span style="color:#24292E;">    return n * factorial(n - 1);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">println(factorial(5));</span></span></code></pre></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-hhTSS" id="tab-Mr9kNK1" checked="checked"><label for="tab-Mr9kNK1">bat</label><input type="radio" name="group-hhTSS" id="tab-KzO8GhK"><label for="tab-KzO8GhK">sh</label></div><div class="blocks"><div class="language-bat vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bat</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">120</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">echo</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">120</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">120</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">120</span></span></code></pre></div></div></div><h3 id="递归限制" tabindex="-1">递归限制 <a class="header-anchor" href="#递归限制" aria-label="Permalink to &quot;递归限制&quot;">​</a></h3><p>除了常值函数以外，宏函数不能使用递归。</p>`,52),o=[e];function c(t,i,r,d,h,E){return a(),n("div",null,o)}const g=s(p,[["render",c]]);export{y as __pageData,g as default};
