import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.jBbNkKut.js";const h=JSON.parse('{"title":"命名空间","description":"","frontmatter":{"prev":{"text":"结构体","link":"/zh/guide/getting-started/struct"},"next":{"text":"目标限定符","link":"/zh/guide/getting-started/target-specify"}},"headers":[],"relativePath":"zh/guide/getting-started/namespace/index.md","filePath":"zh/guide/getting-started/namespace.md"}'),l={name:"zh/guide/getting-started/namespace/index.md"},o=p(`<h1 id="命名空间" tabindex="-1">命名空间 <a class="header-anchor" href="#命名空间" aria-label="Permalink to &quot;命名空间&quot;">​</a></h1><p>WhirlScript 没有类的概念。作为替代，如果你希望将变量和函数按照功能分开，可以使用命名空间。</p><h2 id="定义一个命名空间" tabindex="-1">定义一个命名空间 <a class="header-anchor" href="#定义一个命名空间" aria-label="Permalink to &quot;定义一个命名空间&quot;">​</a></h2><p>你可以使用 <code>namespace</code> 语句定义一个命名空间。例如，以下代码定义了一个命名空间，它包含函数 <code>max</code>：</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">namespace</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Math</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">x</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">int</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">y</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">int</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">int</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(x </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> y){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> x;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> y;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Math</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">max</span><span style="color:#24292E;">(</span><span style="color:#E36209;">x</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">int</span><span style="color:#24292E;">, </span><span style="color:#E36209;">y</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">int</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">int</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(x </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> y){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> x;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> y;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="调用命名空间中的内容" tabindex="-1">调用命名空间中的内容 <a class="header-anchor" href="#调用命名空间中的内容" aria-label="Permalink to &quot;调用命名空间中的内容&quot;">​</a></h2><p>你可以使用 <code>::</code> 符号调用命名空间中的内容。例如，对于前面定义的 <code>max</code> 函数，可以这样调用：</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(Math::</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span><span style="color:#6A737D;">// 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(Math::</span><span style="color:#6F42C1;">max</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">));</span><span style="color:#6A737D;">// 2</span></span></code></pre></div><h2 id="补充定义" tabindex="-1">补充定义 <a class="header-anchor" href="#补充定义" aria-label="Permalink to &quot;补充定义&quot;">​</a></h2><p><code>::</code> 符号同样可以用于补充定义命名空间中的内容。</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Math</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">x</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">int</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">y</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">int</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">int</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(x </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> y){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> x;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> y;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Math</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">min</span><span style="color:#24292E;">(</span><span style="color:#E36209;">x</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">int</span><span style="color:#24292E;">, </span><span style="color:#E36209;">y</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">int</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">int</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(x </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> y){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> x;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> y;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="定义可省性和可重复性" tabindex="-1">定义可省性和可重复性 <a class="header-anchor" href="#定义可省性和可重复性" aria-label="Permalink to &quot;定义可省性和可重复性&quot;">​</a></h2><p>你可以多次定义同一个命名空间，或者根本不定义直接使用 <code>::</code> 语法补充定义。这些情况下，结果都是一样的：你在这个命名空间中定义的所有内容，都属于这个命名空间，不管是何时定义的。例如：</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">example</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">foobar</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;foobar&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">namespace</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">example</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;foo&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">namespace</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">example</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;bar&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">example</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">foobar</span><span style="color:#E1E4E8;">();</span><span style="color:#6A737D;">// foobar</span></span>
<span class="line"><span style="color:#B392F0;">example</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">();</span><span style="color:#6A737D;">// foo</span></span>
<span class="line"><span style="color:#B392F0;">example</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">();</span><span style="color:#6A737D;">// bar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">example</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">foobar</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;foobar&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">example</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;foo&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">example</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;bar&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">example</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">foobar</span><span style="color:#24292E;">();</span><span style="color:#6A737D;">// foobar</span></span>
<span class="line"><span style="color:#6F42C1;">example</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">();</span><span style="color:#6A737D;">// foo</span></span>
<span class="line"><span style="color:#6F42C1;">example</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">();</span><span style="color:#6A737D;">// bar</span></span></code></pre></div><h2 id="using-语句" tabindex="-1"><code>using</code> 语句 <a class="header-anchor" href="#using-语句" aria-label="Permalink to &quot;\`using\` 语句&quot;">​</a></h2><p>你可以使用 <code>using</code> 语句使命名空间中的内容可以不经过命名空间直接调用。例如：</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Math</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">));</span><span style="color:#6A737D;">// 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Math</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">max</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">max</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">));</span><span style="color:#6A737D;">// 2</span></span></code></pre></div><p>你也可以加上 <code>namespace</code> 限定来打开一个命名空间。</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">namespace</span><span style="color:#E1E4E8;"> Math;</span></span>
<span class="line"><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">))</span><span style="color:#6A737D;">// 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">namespace</span><span style="color:#24292E;"> Math;</span></span>
<span class="line"><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">max</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">))</span><span style="color:#6A737D;">// 2</span></span></code></pre></div><p>不推荐直接打开一个命名空间，因为这会污染命名空间。</p><div class="warning custom-block"><p class="custom-block-title">⚠️ 警告</p><p>在模块中打开一个命名空间，会影响到调用这个模块的所有内容。</p></div><h2 id="嵌套的命名空间" tabindex="-1">嵌套的命名空间 <a class="header-anchor" href="#嵌套的命名空间" aria-label="Permalink to &quot;嵌套的命名空间&quot;">​</a></h2><p>命名空间可以嵌套。例如：</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">namespace</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">namespace</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foobar</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;foobar&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">foobar</span><span style="color:#E1E4E8;">();</span><span style="color:#6A737D;">// foobar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foobar</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;foobar&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">foobar</span><span style="color:#24292E;">();</span><span style="color:#6A737D;">// foobar</span></span></code></pre></div>`,24),e=[o];function c(t,r,E,y,i,d){return a(),n("div",null,e)}const u=s(l,[["render",c]]);export{h as __pageData,u as default};
