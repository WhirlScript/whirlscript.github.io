import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.jBbNkKut.js";const m=JSON.parse('{"title":"流程控制","description":"","frontmatter":{"prev":{"text":"语法和数据类型","link":"/zh/guide/getting-started/grammar-and-types"},"next":false},"headers":[],"relativePath":"zh/guide/getting-started/control-flow.md","filePath":"zh/guide/getting-started/control-flow.md","lastUpdated":1701578680000}'),t={name:"zh/guide/getting-started/control-flow.md"},l=e(`<h1 id="流程控制" tabindex="-1">流程控制 <a class="header-anchor" href="#流程控制" aria-label="Permalink to &quot;流程控制&quot;">​</a></h1><p>在 WhirlScript 中，任何表达式 (expression) 都可以看作一条语句 (statement)。</p><h2 id="语句块" tabindex="-1">语句块 <a class="header-anchor" href="#语句块" aria-label="Permalink to &quot;语句块&quot;">​</a></h2><p>最基本的语句是用于组合语句的语句块。该块由一对大括号界定。</p><p>语句块通常用于流程控制，如if，for，while等等。</p><p>语句块也标示着作用域。在一个作用域内声明的变量会在出作用域后变得不可用。</p><h2 id="条件判断语句" tabindex="-1">条件判断语句 <a class="header-anchor" href="#条件判断语句" aria-label="Permalink to &quot;条件判断语句&quot;">​</a></h2><p>条件判断语句指的是根据指定的条件所返回的结果（真或假或其他预定义的），来执行特定的语句。</p><p>当一个逻辑条件为真，用 if 语句执行一个语句。当这个条件为假，使用可选择的 else 从句来执行这个语句。if 语句如下所示：</p><div class="language-whirlscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">whirlscript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">if (condition) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  statement_1;</span></span>
<span class="line"><span style="color:#E1E4E8;">} else {</span></span>
<span class="line"><span style="color:#E1E4E8;">  statement_2;</span></span>
<span class="line"><span style="color:#E1E4E8;">} //推荐使用严格的语句块模式，语句 else 可选</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">if (condition) {</span></span>
<span class="line"><span style="color:#24292E;">  statement_1;</span></span>
<span class="line"><span style="color:#24292E;">} else {</span></span>
<span class="line"><span style="color:#24292E;">  statement_2;</span></span>
<span class="line"><span style="color:#24292E;">} //推荐使用严格的语句块模式，语句 else 可选</span></span></code></pre></div><p>条件可以是任何返回结果被计算为 true 或 false 的表达式。如果条件表达式返回的是 true，statement_1 语句会被执行；否则，statement_2 被执行。statement_1 和 statement_2 可以是任何语句，甚至你可以将另一个 if 语句嵌套其中。</p><p>你也可以组合语句通过使用 else if 来测试连续多种条件判断，就像下面一样：</p><div class="language-whirlscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">whirlscript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">if (condition_1) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  statement_1;</span></span>
<span class="line"><span style="color:#E1E4E8;">} else if (condition_2) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  statement_2;</span></span>
<span class="line"><span style="color:#E1E4E8;">} else if (condition_n_1) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  statement_n;</span></span>
<span class="line"><span style="color:#E1E4E8;">} else {</span></span>
<span class="line"><span style="color:#E1E4E8;">  statement_last;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">if (condition_1) {</span></span>
<span class="line"><span style="color:#24292E;">  statement_1;</span></span>
<span class="line"><span style="color:#24292E;">} else if (condition_2) {</span></span>
<span class="line"><span style="color:#24292E;">  statement_2;</span></span>
<span class="line"><span style="color:#24292E;">} else if (condition_n_1) {</span></span>
<span class="line"><span style="color:#24292E;">  statement_n;</span></span>
<span class="line"><span style="color:#24292E;">} else {</span></span>
<span class="line"><span style="color:#24292E;">  statement_last;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>要执行多个语句，可以使用语句块 ({ ... }) 来分组这些语句。通常，总是使用语句块是一个好的习惯，特别是在代码涉及比较多的 if 语句时。</p>`,14),p=[l];function o(i,c,r,d,E,_){return n(),a("div",null,p)}const y=s(t,[["render",o]]);export{m as __pageData,y as default};
