import{_ as e,o as t,c as a,Q as o}from"./chunks/framework.jBbNkKut.js";const f=JSON.parse('{"title":"Expressions and Operators","description":"","frontmatter":{"prev":{"text":"Function","link":"/guide/getting-started/function"},"next":{"text":"Template String","link":"/guide/getting-started/template-string"}},"headers":[],"relativePath":"guide/getting-started/expressions-and-operators/index.md","filePath":"guide/getting-started/expressions-and-operators.md"}'),s={name:"guide/getting-started/expressions-and-operators/index.md"},r=o(`<h1 id="expressions-and-operators" tabindex="-1">Expressions and Operators <a class="header-anchor" href="#expressions-and-operators" aria-label="Permalink to &quot;Expressions and Operators&quot;">​</a></h1><h2 id="operators" tabindex="-1">Operators <a class="header-anchor" href="#operators" aria-label="Permalink to &quot;Operators&quot;">​</a></h2><p>WhirlScript&#39;s operators are quite similar to other programming languages (like Java, JS).</p><h3 id="assignment-operators" tabindex="-1">Assignment Operators <a class="header-anchor" href="#assignment-operators" aria-label="Permalink to &quot;Assignment Operators&quot;">​</a></h3><p>An <strong>assignment operator</strong> assigns the value of its right operand to its left operand. The simplest assignment operator is equals (<code>=</code>), which assigns the value of the right operand to the left operand. So <code>x = y</code> assigns the value of y to x.</p><p>There are also some compound assignment operators, which are abbreviations for the operations listed in the table below:</p><table><thead><tr><th>Name</th><th>Shorthand Operator</th><th>Meaning</th></tr></thead><tbody><tr><td>Assignment</td><td><code>x = y</code></td><td><code>x = y</code></td></tr><tr><td>Addition assignment</td><td><code>x += y</code></td><td><code>x = x + y</code></td></tr><tr><td>Subtraction assignment</td><td><code>x -= y</code></td><td><code>x = x - y</code></td></tr><tr><td>Multiplication assignment</td><td><code>x *= y</code></td><td><code>x = x * y</code></td></tr><tr><td>Division assignment</td><td><code>x /= y</code></td><td><code>x = x / y</code></td></tr><tr><td>Remainder assignment</td><td><code>x %= y</code></td><td><code>x = x % y</code></td></tr><tr><td>Exponentiation assignment</td><td><code>x **= y</code></td><td><code>x = x ** y</code></td></tr><tr><td>Left shift assignment</td><td><code>x &lt;&lt;= y</code></td><td><code>x = x &lt;&lt; y</code></td></tr><tr><td>Right shift assignment</td><td><code>x &gt;&gt;= y</code></td><td><code>x = x &gt;&gt; y</code></td></tr><tr><td>Bitwise AND assignment</td><td><code>x &amp;= y</code></td><td><code>x = x &amp; y</code></td></tr><tr><td>Bitwise XOR assignment</td><td><code>x ^= y</code></td><td><code>x = x ^ y</code></td></tr><tr><td>Bitwise OR assignment</td><td><code>x |= y</code></td><td><code>x = x | y</code></td></tr></tbody></table><h3 id="comparison-operators" tabindex="-1">Comparison Operators <a class="header-anchor" href="#comparison-operators" aria-label="Permalink to &quot;Comparison Operators&quot;">​</a></h3><p><strong>Comparison operators</strong> compare their operands and return a logical value based on whether the comparison is true. Operands can be numbers, strings, logical, object values. String comparison is based on the standard dictionary order, using Unicode values. In most cases, if the two operands are not of the same type, JavaScript will try to convert them to the appropriate type for comparison. This behavior usually occurs when numbers are used as operands for comparison. Exceptions to type conversion are the use of <code>===</code> and <code>!==</code> operators, which perform strict equality and inequality comparisons. These operators do not convert the type of the operands before checking equality. The following table describes the comparison operators in the example code</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">var var1 = 3;</span></span>
<span class="line"><span style="color:#E1E4E8;">var var2 = 4;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">var var1 = 3;</span></span>
<span class="line"><span style="color:#24292E;">var var2 = 4;</span></span></code></pre></div><table><thead><tr><th>Operator</th><th>Description</th><th>Example that returns true</th></tr></thead><tbody><tr><td>Equal (<code>==</code>)</td><td>Returns true if both operands are equal.</td><td><code>3 == var1</code> <code>&quot;3&quot; == var1</code> <code>3 == &#39;3&#39;</code></td></tr><tr><td>Not equal (<code>!=</code>)</td><td>Returns true if the operands are not equal.</td><td><code>var1 != 4</code> <code>var2 != &quot;3&quot;</code></td></tr><tr><td>Greater than (<code>&gt;</code>)</td><td>Returns true if the left operand is greater than the right operand.</td><td><code>var2 &gt; var1</code> <code>&quot;12&quot; &gt; 2</code></td></tr><tr><td>Greater than or equal (<code>&gt;=</code>)</td><td>Returns true if the left operand is greater than or equal to the right operand.</td><td><code>var2 &gt;= var1</code> <code>var1 &gt;= 3</code></td></tr><tr><td>Less than (<code>&lt;</code>)</td><td>Returns true if the left operand is less than the right operand.</td><td><code>var1 &lt; var2</code> <code>&quot;2&quot; &lt; 12</code></td></tr><tr><td>Less than or equal (<code>&lt;=</code>)</td><td>Returns true if the left operand is less than or equal to the right operand.</td><td><code>var1 &lt;= var2</code> <code>var2 &lt;= 5</code></td></tr></tbody></table><h3 id="arithmetic-operators" tabindex="-1">Arithmetic Operators <a class="header-anchor" href="#arithmetic-operators" aria-label="Permalink to &quot;Arithmetic Operators&quot;">​</a></h3><p>Arithmetic operators return a number. The standard arithmetic operators are addition, subtraction, multiplication, and division (<code>+</code> <code>-</code> <code>*</code> <code>/</code>).</p><p>WhirlScript does not provide a floating-point type. This means that you can&#39;t get decimals. The result will be rounded down. For example:</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">1 / 2; // 0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">1 / 2; // 0</span></span></code></pre></div><p>In addition to the standard arithmetic operators, WhirlScript also provides the arithmetic operators listed in the table below.</p><table><thead><tr><th>Operator</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>Remainder (<code>%</code>)</td><td>Binary operator. Returns the remainder after division.</td><td>12 % 5 returns 2.</td></tr><tr><td>Increment (<code>++</code>)</td><td>Unary operator. Adds one to the operand. If it is placed before the operand (<code>++x</code>), it returns the value after addition; if it is placed after the operand (<code>x++</code>), it returns the original value of the operand and then adds one to the operand.</td><td><code>var x=3;</code> <code>println(++x); //4</code> <code>println(x); //4</code> <code>var y=3;</code> <code>println(y++); //3</code> <code>println(y); //4</code></td></tr><tr><td>Decrement (<code>--</code>)</td><td>Unary operator. Subtracts one from the operand. The return value of the prefix and suffix usage is similar to the increment operator.</td><td><code>var x=3;</code> <code>println(--x); //2</code> <code>var y=3;</code> <code>println(y--); //3</code></td></tr><tr><td>Unary negative (<code>-</code>)</td><td>Unary operator, returns the negative value of the operand.</td><td><code>var x=3;</code> <code>println(-x); //-3</code></td></tr><tr><td>Unary positive (<code>+</code>)</td><td>Unary operator, if the operand is not a number before, try to convert it to a number.</td><td><code>println( +&#39;3&#39; ); // 3</code> <code>println( &#39;3&#39; ); // &#39;3&#39;</code> <code>println(+true); // 1</code></td></tr><tr><td>Exponentiation (<code>**</code>)</td><td>Calculates the base (<code>base</code>) to the power of the exponent (<code>exponent</code>), represented as <code>base^exponent</code>.</td><td><code>2 ** 3</code> returns <code>8</code>. <code>10 ** -1</code> returns <code>0.1</code>.</td></tr></tbody></table><h3 id="bitwise-operators" tabindex="-1">Bitwise Operators <a class="header-anchor" href="#bitwise-operators" aria-label="Permalink to &quot;Bitwise Operators&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">⚠️ Warning</p><p>The syntax of bitwise operations is still under design</p></div><p>Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard WhirlScript numerical values.</p><p>The following table summarizes the bitwise operators in WhirlScript.</p><table><thead><tr><th>Operator</th><th>Usage</th><th>Description</th></tr></thead><tbody><tr><td>Bitwise AND</td><td><code>a &amp; b</code></td><td>For each bit in the binary representation of the operands, the result in the same position is 1 if the corresponding bits of both operands is 1. Otherwise, the result is 0.</td></tr><tr><td>Bitwise OR</td><td><code>a | b</code></td><td>For each bit in the binary representation of the operands, the result in the same position is 1 if the corresponding bit of either or both operands is 1. Otherwise, the result is 0.</td></tr><tr><td>Bitwise XOR</td><td><code>a ^ b</code></td><td>For each bit in the binary representation of the operands, the result in the same position is 1 if the corresponding bits of the operands are different. Otherwise, the result is 0.</td></tr><tr><td>Bitwise NOT</td><td><code>~ a</code></td><td>Inverts the bits of its operand.</td></tr><tr><td>Left shift</td><td><code>a &lt;&lt; b</code></td><td>Shifts a in binary representation b bits to the left, shifting in 0s from the right.</td></tr><tr><td>Sign-propagating right shift</td><td><code>a &gt;&gt; b</code></td><td>Shifts a in binary representation b bits to the right, discarding bits shifted off.</td></tr><tr><td>Zero-fill right shift (fills with 0s on the left)</td><td><code>a &gt;&gt;&gt; b</code></td><td>Shifts a in binary representation b bits to the right, discarding bits shifted off, and shifting in 0s from the left.</td></tr></tbody></table><h4 id="bitwise-logical-operators" tabindex="-1">Bitwise Logical Operators <a class="header-anchor" href="#bitwise-logical-operators" aria-label="Permalink to &quot;Bitwise Logical Operators&quot;">​</a></h4><p>Conceptually, bitwise logical operators work as follows:</p><ul><li>The operands are converted to 32-bit integers and expressed by a series of bits (zeroes and ones). If it exceeds 32 bits, the lower 32 bits are taken, as shown below:</li></ul><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">  Before: 11100110111110100000000000000110000000000001</span></span>
<span class="line"><span style="color:#e1e4e8;">  After:              10100000000000000110000000000001</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">  Before: 11100110111110100000000000000110000000000001</span></span>
<span class="line"><span style="color:#24292e;">  After:              10100000000000000110000000000001</span></span></code></pre></div><ul><li>Each bit in the first operand is paired with the corresponding bit in the second operand: the first bit is paired with the first bit, the second bit is paired with the second bit, and so on.</li><li>The operator is applied to each pair of &quot;bits&quot;, and the final operation result is composed of the operation results of each pair of &quot;bits&quot;.</li></ul><p>For example, the binary representation of the decimal number 9 is 1001, and the binary representation of the decimal number 15 is 1111. Therefore, when the bitwise operator is applied to these two values, the result is as follows:</p><table><thead><tr><th>Expression</th><th>Result</th><th>Binary Description</th></tr></thead><tbody><tr><td><code>15 &amp; 9</code></td><td><code>9</code></td><td><code>1111 &amp; 1001 = 1001</code></td></tr><tr><td><code>15 | 9</code></td><td><code>15</code></td><td><code>1111 | 1001 = 1111</code></td></tr><tr><td><code>15 ^ 9</code></td><td><code>6</code></td><td><code>1111 ^ 1001 = 0110</code></td></tr><tr><td><code>~15</code></td><td><code>-16</code></td><td><code>~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000</code></td></tr><tr><td><code>~9</code></td><td><code>-10</code></td><td><code>~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110</code></td></tr></tbody></table><p>Note that the bitwise &quot;not&quot; operator inverts all 32 bits, and if the highest bit (the leftmost bit) is 1, it represents a negative number (2&#39;s complement representation).</p><h4 id="shift-operators" tabindex="-1">Shift Operators <a class="header-anchor" href="#shift-operators" aria-label="Permalink to &quot;Shift Operators&quot;">​</a></h4><p>Shift operators take two operands: the first is the number to be shifted, and the second is the number specifying how many places to shift the first operand. The direction of the shift is controlled by the operator.</p><p>Shift operators convert their operands into 32-bit integers and return a value of the same type as the number to be shifted.</p><p>The list of shift operators is as follows.</p><table><thead><tr><th>Operator</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td><code>&lt;&lt;</code> (Left shift)</td><td>Shifts the first operand to the left by the number of bits specified by the second operand. Bits shifted off to the left are discarded. Zero bits are shifted in from the right.</td><td><code>9&lt;&lt;2</code> produces 36, because 1001 shifted 2 bits to the left becomes 100100, which is 36.</td></tr><tr><td><code>&gt;&gt;</code> (Right shift)</td><td>Shifts the first operand to the right by the number of bits specified by the second operand. Bits shifted off to the right are discarded. If the first operand is positive, 0 is shifted in from the left. If the first operand is negative, 1 is shifted in from the left.</td><td><code>9&gt;&gt;2</code> produces 2, because 1001 shifted 2 bits to the right becomes 10, which is 2.</td></tr></tbody></table><h3 id="logical-operators" tabindex="-1">Logical Operators <a class="header-anchor" href="#logical-operators" aria-label="Permalink to &quot;Logical Operators&quot;">​</a></h3><p>Logical operators are commonly used between boolean (logical) values; when the operands are boolean values, the return value is also a boolean value. However, in reality, <code>&amp;&amp;</code> and <code>||</code> return a specific operand&#39;s value, so when it is used for non-boolean values, the return value may be non-boolean. The description of logical operators is as follows.</p><table><thead><tr><th>Operator</th><th>Example</th><th>Description</th></tr></thead><tbody><tr><td>Logical AND (<code>&amp;&amp;</code>)</td><td><code>expr1 &amp;&amp; expr2</code></td><td>If <code>expr1</code> can be converted to false, then <code>expr1</code> is returned; otherwise, <code>expr2</code> is returned. Therefore, when <code>&amp;&amp;</code> is used for boolean values, it returns true when all operands are true; otherwise, it returns false.</td></tr><tr><td>Logical OR (<code>||</code>)</td><td><code>expr1 || expr2</code></td><td>If <code>expr1</code> can be converted to true, then <code>expr1</code> is returned; otherwise, <code>expr2</code> is returned. Therefore, when <code>||</code> is used for boolean values, it returns true when any operand is true; if all operands are false, it returns false.</td></tr><tr><td>Logical NOT (<code>!</code>)</td><td><code>!expr</code></td><td>If the operand can be converted to true, it returns false; otherwise, it returns true.</td></tr></tbody></table><p>Here are examples of the <code>&amp;&amp;</code> (logical &quot;AND&quot;) operator.</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">var a1 = true &amp;&amp; true; // t &amp;&amp; t returns true</span></span>
<span class="line"><span style="color:#E1E4E8;">var a2 = true &amp;&amp; false; // t &amp;&amp; f returns false</span></span>
<span class="line"><span style="color:#E1E4E8;">var a3 = false &amp;&amp; true; // f &amp;&amp; t returns false</span></span>
<span class="line"><span style="color:#E1E4E8;">var a4 = false &amp;&amp; 3 == 4; // f &amp;&amp; f returns false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">var a1 = true &amp;&amp; true; // t &amp;&amp; t returns true</span></span>
<span class="line"><span style="color:#24292E;">var a2 = true &amp;&amp; false; // t &amp;&amp; f returns false</span></span>
<span class="line"><span style="color:#24292E;">var a3 = false &amp;&amp; true; // f &amp;&amp; t returns false</span></span>
<span class="line"><span style="color:#24292E;">var a4 = false &amp;&amp; 3 == 4; // f &amp;&amp; f returns false</span></span></code></pre></div><p>Here are examples of the <code>||</code> (logical &quot;OR&quot;) operator.</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">var o1 = true || true; // t || t returns true</span></span>
<span class="line"><span style="color:#E1E4E8;">var o2 = false || true; // f || t returns true</span></span>
<span class="line"><span style="color:#E1E4E8;">var o3 = true || false; // t || f returns true</span></span>
<span class="line"><span style="color:#E1E4E8;">var o4 = false || 3 == 4; // f || f returns false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">var o1 = true || true; // t || t returns true</span></span>
<span class="line"><span style="color:#24292E;">var o2 = false || true; // f || t returns true</span></span>
<span class="line"><span style="color:#24292E;">var o3 = true || false; // t || f returns true</span></span>
<span class="line"><span style="color:#24292E;">var o4 = false || 3 == 4; // f || f returns false</span></span></code></pre></div><p>Here are examples of the <code>!</code> (logical &quot;NOT&quot;) operator.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> n1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// !t returns false</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> n2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// !f returns true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> n1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// !t returns false</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> n2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// !f returns true</span></span></code></pre></div><h4 id="short-circuit-evaluation" tabindex="-1">Short-circuit Evaluation <a class="header-anchor" href="#short-circuit-evaluation" aria-label="Permalink to &quot;Short-circuit Evaluation&quot;">​</a></h4><p>As logical expressions are evaluated from left to right, they are tested for possible &quot;short-circuits&quot; using the following rules:</p><ul><li><code>false</code> &amp;&amp; <em>anything</em> // short-circuit evaluation to false</li><li><code>true</code> || <em>anything</em> // short-circuit evaluation to true</li></ul><p>The rules of logic ensure that these evaluations are always correct. Please note that the <code>anything</code> part of the above expressions will not be evaluated, so doing this will not produce any side effects.</p><h3 id="string-operators" tabindex="-1">String Operators <a class="header-anchor" href="#string-operators" aria-label="Permalink to &quot;String Operators&quot;">​</a></h3><p>In addition to comparison operators, which can be used in string values, the concatenation operator (<code>+</code>) connects two string values together, returning another string, which is the combination of the two operand strings.</p><p>For example,</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">println(&quot;my &quot; + &quot;string&quot;); // console logs the string &quot;my string&quot;.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">println(&quot;my &quot; + &quot;string&quot;); // console logs the string &quot;my string&quot;.</span></span></code></pre></div><p>The shorthand operator <code>+=</code> can also be used to concatenate strings, for example:</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">var myString = &quot;alpha&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">myString += &quot;bet&quot;; // returns &quot;alphabet&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">var myString = &quot;alpha&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">myString += &quot;bet&quot;; // returns &quot;alphabet&quot;</span></span></code></pre></div><h3 id="conditional-ternary-operator" tabindex="-1">Conditional (Ternary) Operator <a class="header-anchor" href="#conditional-ternary-operator" aria-label="Permalink to &quot;Conditional (Ternary) Operator&quot;">​</a></h3><p>The <strong>conditional operator</strong> is the only operator in WhirlScript that requires three operands. The result of the operation is taken from one of two values based on a given condition. The syntax is:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">condition ? value 1 : value 2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">condition ? value 1 : value 2</span></span></code></pre></div><p>If the <code>condition</code> is true, the result takes <code>value 1</code>. Otherwise, it takes <code>value 2</code>. You can use the conditional operator anywhere where standard operators are allowed.</p><p>For example,</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">var status = age &gt;= 18 ? &quot;adult&quot; : &quot;minor&quot;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">var status = age &gt;= 18 ? &quot;adult&quot; : &quot;minor&quot;;</span></span></code></pre></div><p>When <code>age</code> is greater than or equal to 18, &quot;adult&quot; is assigned to <code>status</code>; otherwise, &quot;minor&quot; is assigned to <code>status</code>.</p><h3 id="operator-precedence" tabindex="-1">Operator Precedence <a class="header-anchor" href="#operator-precedence" aria-label="Permalink to &quot;Operator Precedence&quot;">​</a></h3><p>Operator precedence is used to determine the calculation order of an expression. When you cannot determine the precedence, you can use parentheses to explicitly declare the operator&#39;s precedence.</p><p>The table below lists the precedence of descriptors, from highest to lowest.</p><table><thead><tr><th>Type</th><th>Operator</th></tr></thead><tbody><tr><td>Call</td><td><code>.</code> <code>::</code> <code>()</code></td></tr><tr><td>Increment/Decrement</td><td><code>++</code> <code>--</code></td></tr><tr><td>Not</td><td><code>!</code></td></tr><tr><td>Multiply/Divide</td><td><code>*</code> <code>/</code> <code>%</code></td></tr><tr><td>Add/Subtract</td><td><code>+</code> <code>-</code></td></tr><tr><td>Shift</td><td><code>&lt;&lt;</code> <code>&gt;&gt;</code> <code>&gt;&gt;&gt;</code></td></tr><tr><td>Size Comparison</td><td><code>&lt;</code> <code>&lt;=</code> <code>&gt;</code> <code>&gt;=</code></td></tr><tr><td>Equality Judgment</td><td><code>==</code> <code>!=</code></td></tr><tr><td>Logical AND</td><td><code>&amp;&amp;</code></td></tr><tr><td>Logical OR</td><td><code>||</code></td></tr><tr><td>Conditional Judgment</td><td><code>?:</code></td></tr><tr><td>Assignment</td><td><code>=</code> <code>+=</code> <code>-=</code> <code>*=</code> <code>/=</code> <code>%=</code></td></tr></tbody></table><h2 id="expressions" tabindex="-1">Expressions <a class="header-anchor" href="#expressions" aria-label="Permalink to &quot;Expressions&quot;">​</a></h2><p>An expression is a collection of code that returns a value.</p><p>Every legal expression can be calculated into some value, but conceptually, there are two types of expressions: those with side effects (such as assignment) and those that simply calculate values.</p><p>The expression x=7 is an example of the first type. This expression uses the = operator to assign the value 7 to the variable x. The value of this expression itself is 7.</p><p>The code 3 + 4 is an example of the second type of expression. This expression uses the + operator to add 3 and 4 together but does not assign the result (7) to a variable.</p><p>WhirlScript has the following types of expressions:</p><ul><li>Arithmetic: results in a number, for example, 3.14159. (Usually uses <a href="#arithmetic-operators">arithmetic operators</a>)</li><li>String: results in a string, for example, &quot;Fred&quot; or &quot;234&quot;. (Usually uses <a href="#string-operators">string operators</a>)</li><li>Logical value: results in true or false. (Often involves <a href="#logical-operators">logical operators</a>)</li><li>Basic expressions: Basic keywords and general expressions in WhirlScript.</li><li>Lvalue expressions: Assigned to lvalues.</li></ul><h3 id="grouping-operator" tabindex="-1">Grouping Operator <a class="header-anchor" href="#grouping-operator" aria-label="Permalink to &quot;Grouping Operator&quot;">​</a></h3><p>The grouping operator () controls the priority of calculations in the expression. For example, you can change the order of multiplication and division first and then addition and subtraction, and first calculate addition.</p><div class="language-WhirlScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">WhirlScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">var a = 1;</span></span>
<span class="line"><span style="color:#E1E4E8;">var b = 2;</span></span>
<span class="line"><span style="color:#E1E4E8;">var c = 3;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">// Default priority</span></span>
<span class="line"><span style="color:#E1E4E8;">a + b * c; // 7</span></span>
<span class="line"><span style="color:#E1E4E8;">// This is how it is calculated by default</span></span>
<span class="line"><span style="color:#E1E4E8;">a + b * c; // 7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">// Now make addition priority over multiplication</span></span>
<span class="line"><span style="color:#E1E4E8;">(a + b) * c; // 9</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">// This is equivalent to</span></span>
<span class="line"><span style="color:#E1E4E8;">a * c + b * c; // 9</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">var a = 1;</span></span>
<span class="line"><span style="color:#24292E;">var b = 2;</span></span>
<span class="line"><span style="color:#24292E;">var c = 3;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">// Default priority</span></span>
<span class="line"><span style="color:#24292E;">a + b * c; // 7</span></span>
<span class="line"><span style="color:#24292E;">// This is how it is calculated by default</span></span>
<span class="line"><span style="color:#24292E;">a + b * c; // 7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">// Now make addition priority over multiplication</span></span>
<span class="line"><span style="color:#24292E;">(a + b) * c; // 9</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">// This is equivalent to</span></span>
<span class="line"><span style="color:#24292E;">a * c + b * c; // 9</span></span></code></pre></div><h3 id="lvalue-expressions" tabindex="-1">Lvalue Expressions <a class="header-anchor" href="#lvalue-expressions" aria-label="Permalink to &quot;Lvalue Expressions&quot;">​</a></h3><p>Lvalues can be the target of assignment.</p>`,77),n=[r];function i(d,p,l,c,h,u){return t(),a("div",null,n)}const b=e(s,[["render",i]]);export{f as __pageData,b as default};
