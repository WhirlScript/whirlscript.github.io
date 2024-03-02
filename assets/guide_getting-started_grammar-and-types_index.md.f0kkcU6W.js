import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.jBbNkKut.js";const h=JSON.parse('{"title":"Grammar and Data Types","description":"","frontmatter":{"prev":{"text":"Hello Whirlpkg!","link":"/guide/getting-started/hello-whirlpkg"},"next":{"text":"Control Flow","link":"/guide/getting-started/control-flow"}},"headers":[],"relativePath":"guide/getting-started/grammar-and-types/index.md","filePath":"guide/getting-started/grammar-and-types.md"}'),o={name:"guide/getting-started/grammar-and-types/index.md"},l=e(`<h1 id="grammar-and-data-types" tabindex="-1">Grammar and Data Types <a class="header-anchor" href="#grammar-and-data-types" aria-label="Permalink to &quot;Grammar and Data Types&quot;">​</a></h1><p>In this section, we will discuss the basic syntax and variable declarations of WhirlScript.</p><h2 id="basics" tabindex="-1">Basics <a class="header-anchor" href="#basics" aria-label="Permalink to &quot;Basics&quot;">​</a></h2><p>WhirlScript is case-sensitive and uses the UNICODE character set.</p><p>In WhirlScript, instructions are called statements and are separated by semicolons <code>;</code>.</p><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p>The syntax of WhirlScript comments is similar to many languages:</p><div class="language-whirlscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">whirlscript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Single line comment</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* This is</span></span>
<span class="line"><span style="color:#6A737D;">   a multi-line comment.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Single line comment</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* This is</span></span>
<span class="line"><span style="color:#6A737D;">   a multi-line comment.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><p>These will be skipped during the code compilation process. However, if you enable <code>withComment</code> in the compilation options, these comments will be included in the output.</p><h2 id="declarations" tabindex="-1">Declarations <a class="header-anchor" href="#declarations" aria-label="Permalink to &quot;Declarations&quot;">​</a></h2><p>There are four states of quantities in WhirlScript:</p><ul><li>Compile-time variables: Can be modified and used during compilation;</li><li>Compile-time constants: Can be used during compilation, cannot be modified;</li><li>Runtime variables: Can be modified and used at runtime;</li><li>Runtime constants: Can be used at runtime, cannot be modified.</li></ul><p>Runtime quantities can be declared with keywords <code>var</code> and <code>const</code>:</p><ul><li><code>var</code>: Declare a runtime variable, optionally initialize a value.</li><li><code>const</code>: Declare a runtime constant.</li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-MkaOC" id="tab-ZAIOty-" checked="checked"><label for="tab-ZAIOty-">Runtime variables</label><input type="radio" name="group-MkaOC" id="tab-wZjfUT2"><label for="tab-wZjfUT2">Runtime constants</label></div><div class="blocks"><div class="language-WhirlScript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> v</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> v</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">int</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span></code></pre></div><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">v</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">v</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">int</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span></code></pre></div></div></div><p>For compile-time quantities, you need to add keyword <code>macro</code>.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-FGFZ8" id="tab-zN_ylhz" checked="checked"><label for="tab-zN_ylhz">Compile-time variables</label><input type="radio" name="group-FGFZ8" id="tab-x-_d97G"><label for="tab-x-_d97G">Compile-time constants</label></div><div class="blocks"><div class="language-WhirlScript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">macro </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> v</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">macro </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> v</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">int</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span></code></pre></div><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">macro </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">v</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">macro </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">v</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">int</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span></code></pre></div></div></div><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h3><p>In applications, variables are used as symbolic names for values. The name of a variable is called an identifier, which needs to follow certain rules.</p><p>A WhirlScript identifier must start with a letter; subsequent characters can also be numbers (0-9). Because the JavaScript language is case-sensitive, letters can be uppercase letters from &quot;A&quot; to &quot;Z&quot; and lowercase letters from &quot;a&quot; to &quot;z&quot;.</p><p>Like other languages, most operators cannot be included in the name. What&#39;s different is that these symbols, which other languages might allow, are also not allowed:</p><ul><li><code>$</code></li><li><code>_</code></li></ul><details class="details custom-block"><summary>Why?</summary><p>Since the identifier of variables in shell is the <code>$</code> symbol, you cannot use it as a name.</p><p>The <code>_</code> symbol is used to identify scopes and other internal uses, so it cannot be used as a name either.</p><p>Note that these two symbols will be parsed as ordinary operators.</p></details><p>At the same time, the behavior of using keywords as identifiers is undefined.</p><p>Examples of legal identifiers: <code>NumberHits</code>, <code>temp99</code>.</p><h3 id="declaring-variables" tabindex="-1">Declaring Variables <a class="header-anchor" href="#declaring-variables" aria-label="Permalink to &quot;Declaring Variables&quot;">​</a></h3><p>You can declare a variable in this way:</p><div class="language-whirlscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">whirlscript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> num</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> num</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">int</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span></code></pre></div><p>Where <code>var</code> indicates that a runtime variable is declared, <code>num</code> is the identifier of the variable, <code>: int</code> indicates that the variable type is <code>int</code>, and <code>= 1</code> initializes this variable to a value (here it is <code>1</code>).</p><p>If initialization is included, the variable type is optional (inferred by the compiler).</p><p>In some cases, you must specify the type to get the result you want:</p><div class="language-whirlscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">whirlscript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> aNum</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> aString</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> aNum;  </span><span style="color:#6A737D;">// Get &quot;1&quot;.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> aNum</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">int</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> aString</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> aNum;  </span><span style="color:#6A737D;">// Get &quot;1&quot;.</span></span></code></pre></div><p>This will be mentioned in <a href="#conversion-of-data-types">Conversion of Data Types</a>.</p><p>For all variables (including compile-time and runtime variables), initialization is optional.</p><h3 id="variable-evaluation" tabindex="-1">Variable Evaluation <a class="header-anchor" href="#variable-evaluation" aria-label="Permalink to &quot;Variable Evaluation&quot;">​</a></h3><p>For variables declared with the <code>var</code> statement, if no initial value is assigned, accessing its value will get a default value. The default value is different depending on the type.</p><p>Accessing an undeclared variable will cause an error.</p><h3 id="final-variables" tabindex="-1">Final Variables <a class="header-anchor" href="#final-variables" aria-label="Permalink to &quot;Final Variables&quot;">​</a></h3><p>You can use the <code>@final</code> annotation to declare a final quantity or a function:</p><div class="language-whirlscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">whirlscript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@final </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> g</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;This is a final variable&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// Declare a final variable</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">:::warning ⚠️ Warning</span></span>
<span class="line"><span style="color:#E1E4E8;">You can only declare a runtime quantity </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">final</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">quantity</span><span style="color:#E1E4E8;">. </span><span style="color:#B392F0;">The</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">same</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">function</span><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">bat </span><span style="color:#B392F0;">rawln</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;echo %g%&quot;</span><span style="color:#E1E4E8;">);  </span><span style="color:#6A737D;">// Output g in bat.</span></span>
<span class="line"><span style="color:#E1E4E8;">sh </span><span style="color:#B392F0;">rawln</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;echo $g&quot;</span><span style="color:#E1E4E8;">);    </span><span style="color:#6A737D;">// Output g in sh.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// More recommended writing</span></span>
<span class="line"><span style="color:#B392F0;">rawln</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`echo \${</span><span style="color:#E1E4E8;">g</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">);   </span><span style="color:#6A737D;">// This does not need to judge the syntax environment, it can be called directly.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Or directly</span></span>
<span class="line"><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(g); The built</span><span style="color:#F97583;">-in</span><span style="color:#E1E4E8;"> println </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@final </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> g</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;This is a final variable&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// Declare a final variable</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">:::warning ⚠️ Warning</span></span>
<span class="line"><span style="color:#24292E;">You can only declare a runtime quantity </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">final</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">quantity</span><span style="color:#24292E;">. </span><span style="color:#6F42C1;">The</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">same</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">function</span><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">bat </span><span style="color:#6F42C1;">rawln</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;echo %g%&quot;</span><span style="color:#24292E;">);  </span><span style="color:#6A737D;">// Output g in bat.</span></span>
<span class="line"><span style="color:#24292E;">sh </span><span style="color:#6F42C1;">rawln</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;echo $g&quot;</span><span style="color:#24292E;">);    </span><span style="color:#6A737D;">// Output g in sh.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// More recommended writing</span></span>
<span class="line"><span style="color:#6F42C1;">rawln</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`echo \${</span><span style="color:#24292E;">g</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">);   </span><span style="color:#6A737D;">// This does not need to judge the syntax environment, it can be called directly.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Or directly</span></span>
<span class="line"><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(g); The built</span><span style="color:#D73A49;">-in</span><span style="color:#24292E;"> println </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">.</span></span></code></pre></div><p>Final quantities will not be modified identifiers after compilation. That is to say, you can directly call it in <code>raw</code> statements. But we recommend using template syntax to directly splice commands.</p><h3 id="constants" tabindex="-1">Constants <a class="header-anchor" href="#constants" aria-label="Permalink to &quot;Constants&quot;">​</a></h3><p>You can create a read-only constant with the keyword <code>const</code>. The naming rules for constant identifiers are the same as for variables.</p><div class="language-whirlscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">whirlscript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">version</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;1.1.0&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">version</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;1.1.0&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><p>All constants (including compile-time and runtime constants) cannot change their values by reassigning, nor can they be redeclared during code execution. It must be initialized to some value.</p><p>You can choose to omit the type (inferred by the compiler) or explicitly specify it.</p><p>In the same scope, you cannot use a name that is the same as a variable name or function name to name a constant.</p><h2 id="data-structures-and-types" tabindex="-1">Data Structures and Types <a class="header-anchor" href="#data-structures-and-types" aria-label="Permalink to &quot;Data Structures and Types&quot;">​</a></h2><h3 id="data-types" tabindex="-1">Data Types <a class="header-anchor" href="#data-types" aria-label="Permalink to &quot;Data Types&quot;">​</a></h3><p>WhirlScript defines three data types:</p><ul><li><code>boolean</code>: Boolean value, with 2 values: <code>true</code> and <code>false</code>.</li><li><code>int</code>: Integer, for example <code>0</code>, <code>42</code>, <code>1000</code>.</li><li><code>string</code>: String, for example <code>&quot;string&quot;</code>.</li></ul><details class="details custom-block"><summary>Why no float?</summary><p>bat only provides integer operations. For compatibility, we can only discard this part.</p><p>If you need to get several decimal places, multiply both the divisor and the dividend by 10 to the nth power, and then cut off the tail.</p><p>The shell provides support for floating point numbers. If you need to use it, use it in the <code>lit</code> function.</p></details><h3 id="conversion-of-data-types" tabindex="-1">Conversion of Data Types <a class="header-anchor" href="#conversion-of-data-types" aria-label="Permalink to &quot;Conversion of Data Types&quot;">​</a></h3><p>WhirlScript is statically typed, which means that the type of a variable is immutable.</p><p>For example, you cannot assign a <code>string</code> value to an <code>int</code> type variable in this way:</p><div class="language-whirlscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">whirlscript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> n</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;string&quot;</span><span style="color:#E1E4E8;">;   </span><span style="color:#6A737D;">// Error!</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> n</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">int</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;string&quot;</span><span style="color:#24292E;">;   </span><span style="color:#6A737D;">// Error!</span></span></code></pre></div><h4 id="implicit-conversion" tabindex="-1">Implicit Conversion <a class="header-anchor" href="#implicit-conversion" aria-label="Permalink to &quot;Implicit Conversion&quot;">​</a></h4><p>In this case, there will be no error:</p><div class="language-whirlscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">whirlscript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> s</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;string&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> s</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;string&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">;</span></span></code></pre></div><p>Here an implicit conversion has occurred. There are three situations for implicit conversion, respectively:</p><ul><li>Boolean to integer: <code>false</code> will be converted to <code>0</code>, <code>true</code> will be converted to <code>1</code>.</li><li>Boolean to string: <code>false</code> will be converted to <code>&quot;0&quot;</code>, <code>true</code> will be converted to <code>&quot;1&quot;</code>.</li><li>Integer to string: For example, <code>123</code> will be converted to <code>&quot;123&quot;</code>.</li></ul><p>Even if you directly call it in <code>raw</code> statements, it will be the same.</p><details class="details custom-block"><summary>Why?</summary><p>In the underlying implementation, all quantities are strings.</p><p>The underlying implementation of Boolean values is <code>&quot;0&quot;</code> and <code>&quot;1&quot;</code>.</p><p>The underlying implementation of integers is the corresponding string.</p></details><h4 id="type-assertion" tabindex="-1">Type Assertion <a class="header-anchor" href="#type-assertion" aria-label="Permalink to &quot;Type Assertion&quot;">​</a></h4><p>Implicit conversion can only be upward conversion.</p><p>If you need to convert in reverse, you need type assertion. The premise is that you are <strong>very sure</strong> that this is convertible.</p><p>Type assertion is marked with <code>&lt;&gt;</code>, for example:</p><div class="language-whirlscript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">whirlscript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> n</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">int</span><span style="color:#E1E4E8;">&gt;&quot;123&quot;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> n</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">int</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> &lt;</span><span style="color:#22863A;">int</span><span style="color:#24292E;">&gt;&quot;123&quot;;</span></span></code></pre></div><p>The compiler will not check whether your conversion is legal. Please use it <strong>cautiously</strong>.</p><h2 id="literals" tabindex="-1">Literals <a class="header-anchor" href="#literals" aria-label="Permalink to &quot;Literals&quot;">​</a></h2><p>In WhirlScript, you can use various literals. These literals are fixed values given in the script literally, not variables.</p><p>For example <code>1</code>, <code>true</code>, <code>&quot;str&quot;</code>.</p>`,72),t=[l];function p(r,c,i,d,y,E){return a(),n("div",null,t)}const m=s(o,[["render",p]]);export{h as __pageData,m as default};
