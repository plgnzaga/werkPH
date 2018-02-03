<a href='https://github.com/angular/angular.js/edit/v1.4.x/src/Angular.js?message=docs(ng)%3A%20describe%20your%20change...#L101' class='improve-docs btn btn-primary'><i class="glyphicon glyphicon-edit">&nbsp;</i>Improve this Doc</a>


<h1>
  <code>ng</code>
</h1>



<h1 id="ng-core-module-">ng (core module)</h1>
<p>The ng module is loaded by default when an AngularJS application is started. The module itself
contains the essential components for an AngularJS application to function. The table below
lists a high level breakdown of each of the services/factories, filters, directives and testing
components available within this core module.</p>
<div doc-module-components="ng"></div>

<div class="component-breakdown">
  <h2>Module Components</h2>
  
  <div>
    <h3 class="component-heading" id="function">Function</h3>
    <table class="definition-table">
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.lowercase">angular.lowercase</a></td>
        <td><p>Converts the specified string to lowercase.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.uppercase">angular.uppercase</a></td>
        <td><p>Converts the specified string to uppercase.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.forEach">angular.forEach</a></td>
        <td><p>Invokes the <code>iterator</code> function once for each item in <code>obj</code> collection, which can be either an
object or an array. The <code>iterator</code> function is invoked with <code>iterator(value, key, obj)</code>, where <code>value</code>
is the value of an object property or an array element, <code>key</code> is the object property key or
array element index and obj is the <code>obj</code> itself. Specifying a <code>context</code> for the function is optional.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.extend">angular.extend</a></td>
        <td><p>Extends the destination object <code>dst</code> by copying own enumerable properties from the <code>src</code> object(s)
to <code>dst</code>. You can specify multiple <code>src</code> objects. If you want to preserve original objects, you can do so
by passing an empty object as the target: <code>var object = angular.extend({}, object1, object2)</code>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.merge">angular.merge</a></td>
        <td><p>Deeply extends the destination object <code>dst</code> by copying own enumerable properties from the <code>src</code> object(s)
to <code>dst</code>. You can specify multiple <code>src</code> objects. If you want to preserve original objects, you can do so
by passing an empty object as the target: <code>var object = angular.merge({}, object1, object2)</code>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.noop">angular.noop</a></td>
        <td><p>A function that performs no operations. This function can be useful when writing code in the
functional style.</p>
<pre><code class="lang-js">function foo(callback) {
  var result = calculateResult();
  (callback || angular.noop)(result);
}
</code></pre>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.identity">angular.identity</a></td>
        <td><p>A function that returns its first argument. This function is useful when writing code in the
functional style.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.isUndefined">angular.isUndefined</a></td>
        <td><p>Determines if a reference is undefined.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.isDefined">angular.isDefined</a></td>
        <td><p>Determines if a reference is defined.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.isObject">angular.isObject</a></td>
        <td><p>Determines if a reference is an <code>Object</code>. Unlike <code>typeof</code> in JavaScript, <code>null</code>s are not
considered to be objects. Note that JavaScript arrays are objects.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.isString">angular.isString</a></td>
        <td><p>Determines if a reference is a <code>String</code>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.isNumber">angular.isNumber</a></td>
        <td><p>Determines if a reference is a <code>Number</code>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.isDate">angular.isDate</a></td>
        <td><p>Determines if a value is a date.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.isArray">angular.isArray</a></td>
        <td><p>Determines if a reference is an <code>Array</code>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.isFunction">angular.isFunction</a></td>
        <td><p>Determines if a reference is a <code>Function</code>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.isElement">angular.isElement</a></td>
        <td><p>Determines if a reference is a DOM element (or wrapped jQuery element).</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.copy">angular.copy</a></td>
        <td><p>Creates a deep copy of <code>source</code>, which should be an object or an array.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.equals">angular.equals</a></td>
        <td><p>Determines if two objects or two values are equivalent. Supports value types, regular
expressions, arrays and objects.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.bind">angular.bind</a></td>
        <td><p>Returns a function which calls function <code>fn</code> bound to <code>self</code> (<code>self</code> becomes the <code>this</code> for
<code>fn</code>). You can supply optional <code>args</code> that are prebound to the function. This feature is also
known as <a href="http://en.wikipedia.org/wiki/Partial_application">partial application</a>, as
distinguished from <a href="http://en.wikipedia.org/wiki/Currying#Contrast_with_partial_function_application">function currying</a>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.toJson">angular.toJson</a></td>
        <td><p>Serializes input into a JSON-formatted string. Properties with leading $$ characters will be
stripped since angular uses this notation internally.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.fromJson">angular.fromJson</a></td>
        <td><p>Deserializes a JSON string.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.bootstrap">angular.bootstrap</a></td>
        <td><p>Use this function to manually start up angular application.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.reloadWithDebugInfo">angular.reloadWithDebugInfo</a></td>
        <td><p>Use this function to reload the current application with debug information turned on.
This takes precedence over a call to <code>$compileProvider.debugInfoEnabled(false)</code>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.injector">angular.injector</a></td>
        <td><p>Creates an injector object that can be used for retrieving services as well as for
dependency injection (see <a href="guide/di">dependency injection</a>).</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.element">angular.element</a></td>
        <td><p>Wraps a raw DOM element or HTML string as a <a href="http://jquery.com">jQuery</a> element.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/function/angular.module">angular.module</a></td>
        <td><p>The <code>angular.module</code> is a global place for creating, registering and retrieving Angular
modules.
All modules (angular core or 3rd party) that should be available to an application must be
registered using this mechanism.</p>
</td>
      </tr>
      
    </table>
  </div>
  
  <div>
    <h3 class="component-heading" id="directive">Directive</h3>
    <table class="definition-table">
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngJq">ngJq</a></td>
        <td><p>Use this directive to force the angular.element library.  This should be
used to force either jqLite by leaving ng-jq blank or setting the name of
the jquery variable under window (eg. jQuery).</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngApp">ngApp</a></td>
        <td><p>Use this directive to <strong>auto-bootstrap</strong> an AngularJS application. The <code>ngApp</code> directive
designates the <strong>root element</strong> of the application and is typically placed near the root element
of the page - e.g. on the <code>&lt;body&gt;</code> or <code>&lt;html&gt;</code> tags.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/a">a</a></td>
        <td><p>Modifies the default behavior of the html A tag so that the default action is prevented when
the href attribute is empty.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngHref">ngHref</a></td>
        <td><p>Using Angular markup like <code>{{hash}}</code> in an href attribute will
make the link go to the wrong URL if the user clicks it before
Angular has a chance to replace the <code>{{hash}}</code> markup with its
value. Until Angular replaces the markup the link will be broken
and will most likely return a 404 error. The <code>ngHref</code> directive
solves this problem.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngSrc">ngSrc</a></td>
        <td><p>Using Angular markup like <code>{{hash}}</code> in a <code>src</code> attribute doesn&#39;t
work right: The browser will fetch from the URL with the literal
text <code>{{hash}}</code> until Angular replaces the expression inside
<code>{{hash}}</code>. The <code>ngSrc</code> directive solves this problem.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngSrcset">ngSrcset</a></td>
        <td><p>Using Angular markup like <code>{{hash}}</code> in a <code>srcset</code> attribute doesn&#39;t
work right: The browser will fetch from the URL with the literal
text <code>{{hash}}</code> until Angular replaces the expression inside
<code>{{hash}}</code>. The <code>ngSrcset</code> directive solves this problem.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngDisabled">ngDisabled</a></td>
        <td><p>This directive sets the <code>disabled</code> attribute on the element if the
<a href="guide/expression">expression</a> inside <code>ngDisabled</code> evaluates to truthy.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngChecked">ngChecked</a></td>
        <td><p>Sets the <code>checked</code> attribute on the element, if the expression inside <code>ngChecked</code> is truthy.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngReadonly">ngReadonly</a></td>
        <td><p>Sets the <code>readOnly</code> attribute on the element, if the expression inside <code>ngReadonly</code> is truthy.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngSelected">ngSelected</a></td>
        <td><p>Sets the <code>selected</code> attribute on the element, if the expression inside <code>ngSelected</code> is truthy.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngOpen">ngOpen</a></td>
        <td><p>Sets the <code>open</code> attribute on the element, if the expression inside <code>ngOpen</code> is truthy.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngForm">ngForm</a></td>
        <td><p>Nestable alias of <a href="api/ng/directive/form"><code>form</code></a> directive. HTML
does not allow nesting of form elements. It is useful to nest forms, for example if the validity of a
sub-group of controls needs to be determined.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/form">form</a></td>
        <td><p>Directive that instantiates
<a href="api/ng/type/form.FormController">FormController</a>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/textarea">textarea</a></td>
        <td><p>HTML textarea element control with angular data-binding. The data-binding and validation
properties of this element are exactly the same as those of the
<a href="api/ng/directive/input">input element</a>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/input">input</a></td>
        <td><p>HTML input element control. When used together with <a href="api/ng/directive/ngModel"><code>ngModel</code></a>, it provides data-binding,
input state control, and validation.
Input control follows HTML5 input types and polyfills the HTML5 validation behavior for older browsers.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngValue">ngValue</a></td>
        <td><p>Binds the given expression to the value of <code>&lt;option&gt;</code> or <a href="api/ng/input/input[radio]"><code>input[radio]</code></a>,
so that when the element is selected, the <a href="api/ng/directive/ngModel"><code>ngModel</code></a> of that element is set to
the bound value.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngBind">ngBind</a></td>
        <td><p>The <code>ngBind</code> attribute tells Angular to replace the text content of the specified HTML element
with the value of a given expression, and to update the text content when the value of that
expression changes.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngBindTemplate">ngBindTemplate</a></td>
        <td><p>The <code>ngBindTemplate</code> directive specifies that the element
text content should be replaced with the interpolation of the template
in the <code>ngBindTemplate</code> attribute.
Unlike <code>ngBind</code>, the <code>ngBindTemplate</code> can contain multiple <code>{{</code> <code>}}</code>
expressions. This directive is needed since some HTML elements
(such as TITLE and OPTION) cannot contain SPAN elements.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngBindHtml">ngBindHtml</a></td>
        <td><p>Evaluates the expression and inserts the resulting HTML into the element in a secure way. By default,
the resulting HTML content will be sanitized using the <a href="api/ngSanitize/service/$sanitize">$sanitize</a> service.
To utilize this functionality, ensure that <code>$sanitize</code> is available, for example, by including <a href="api/ngSanitize"><code>ngSanitize</code></a> in your module&#39;s dependencies (not in core Angular). In order to use <a href="api/ngSanitize"><code>ngSanitize</code></a>
in your module&#39;s dependencies, you need to include &quot;angular-sanitize.js&quot; in your application.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngChange">ngChange</a></td>
        <td><p>Evaluate the given expression when the user changes the input.
The expression is evaluated immediately, unlike the JavaScript onchange event
which only triggers at the end of a change (usually, when the user leaves the
form element or presses the return key).</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngClass">ngClass</a></td>
        <td><p>The <code>ngClass</code> directive allows you to dynamically set CSS classes on an HTML element by databinding
an expression that represents all classes to be added.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngClassOdd">ngClassOdd</a></td>
        <td><p>The <code>ngClassOdd</code> and <code>ngClassEven</code> directives work exactly as
<a href="api/ng/directive/ngClass">ngClass</a>, except they work in
conjunction with <code>ngRepeat</code> and take effect only on odd (even) rows.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngClassEven">ngClassEven</a></td>
        <td><p>The <code>ngClassOdd</code> and <code>ngClassEven</code> directives work exactly as
<a href="api/ng/directive/ngClass">ngClass</a>, except they work in
conjunction with <code>ngRepeat</code> and take effect only on odd (even) rows.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngCloak">ngCloak</a></td>
        <td><p>The <code>ngCloak</code> directive is used to prevent the Angular html template from being briefly
displayed by the browser in its raw (uncompiled) form while your application is loading. Use this
directive to avoid the undesirable flicker effect caused by the html template display.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngController">ngController</a></td>
        <td><p>The <code>ngController</code> directive attaches a controller class to the view. This is a key aspect of how angular
supports the principles behind the Model-View-Controller design pattern.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngCsp">ngCsp</a></td>
        <td><p>Angular has some features that can break certain
<a href="https://developer.mozilla.org/en/Security/CSP">CSP (Content Security Policy)</a> rules.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngClick">ngClick</a></td>
        <td><p>The ngClick directive allows you to specify custom behavior when
an element is clicked.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngDblclick">ngDblclick</a></td>
        <td><p>The <code>ngDblclick</code> directive allows you to specify custom behavior on a dblclick event.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngMousedown">ngMousedown</a></td>
        <td><p>The ngMousedown directive allows you to specify custom behavior on mousedown event.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngMouseup">ngMouseup</a></td>
        <td><p>Specify custom behavior on mouseup event.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngMouseover">ngMouseover</a></td>
        <td><p>Specify custom behavior on mouseover event.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngMouseenter">ngMouseenter</a></td>
        <td><p>Specify custom behavior on mouseenter event.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngMouseleave">ngMouseleave</a></td>
        <td><p>Specify custom behavior on mouseleave event.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngMousemove">ngMousemove</a></td>
        <td><p>Specify custom behavior on mousemove event.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngKeydown">ngKeydown</a></td>
        <td><p>Specify custom behavior on keydown event.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngKeyup">ngKeyup</a></td>
        <td><p>Specify custom behavior on keyup event.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngKeypress">ngKeypress</a></td>
        <td><p>Specify custom behavior on keypress event.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngSubmit">ngSubmit</a></td>
        <td><p>Enables binding angular expressions to onsubmit events.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngFocus">ngFocus</a></td>
        <td><p>Specify custom behavior on focus event.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngBlur">ngBlur</a></td>
        <td><p>Specify custom behavior on blur event.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngCopy">ngCopy</a></td>
        <td><p>Specify custom behavior on copy event.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngCut">ngCut</a></td>
        <td><p>Specify custom behavior on cut event.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngPaste">ngPaste</a></td>
        <td><p>Specify custom behavior on paste event.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngIf">ngIf</a></td>
        <td><p>The <code>ngIf</code> directive removes or recreates a portion of the DOM tree based on an
{expression}. If the expression assigned to <code>ngIf</code> evaluates to a false
value then the element is removed from the DOM, otherwise a clone of the
element is reinserted into the DOM.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngInclude">ngInclude</a></td>
        <td><p>Fetches, compiles and includes an external HTML fragment.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngInit">ngInit</a></td>
        <td><p>The <code>ngInit</code> directive allows you to evaluate an expression in the
current scope.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngList">ngList</a></td>
        <td><p>Text input that converts between a delimited string and an array of strings. The default
delimiter is a comma followed by a space - equivalent to <code>ng-list=&quot;, &quot;</code>. You can specify a custom
delimiter as the value of the <code>ngList</code> attribute - for example, <code>ng-list=&quot; | &quot;</code>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngModel">ngModel</a></td>
        <td><p>The <code>ngModel</code> directive binds an <code>input</code>,<code>select</code>, <code>textarea</code> (or custom form control) to a
property on the scope using <a href="api/ng/type/ngModel.NgModelController">NgModelController</a>,
which is created and exposed by this directive.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngModelOptions">ngModelOptions</a></td>
        <td><p>Allows tuning how model updates are done. Using <code>ngModelOptions</code> you can specify a custom list of
events that will trigger a model update and/or a debouncing delay so that the actual update only
takes place when a timer expires; this timer will be reset after another change takes place.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngNonBindable">ngNonBindable</a></td>
        <td><p>The <code>ngNonBindable</code> directive tells Angular not to compile or bind the contents of the current
DOM element. This is useful if the element contains what appears to be Angular directives and
bindings but which should be ignored by Angular. This could be the case if you have a site that
displays snippets of code, for instance.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngOptions">ngOptions</a></td>
        <td><p>The <code>ngOptions</code> attribute can be used to dynamically generate a list of <code>&lt;option&gt;</code>
elements for the <code>&lt;select&gt;</code> element using the array or object obtained by evaluating the
<code>ngOptions</code> comprehension expression.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngPluralize">ngPluralize</a></td>
        <td><p><code>ngPluralize</code> is a directive that displays messages according to en-US localization rules.
These rules are bundled with angular.js, but can be overridden
(see <a href="guide/i18n">Angular i18n</a> dev guide). You configure ngPluralize directive
by specifying the mappings between
<a href="http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html">plural categories</a>
and the strings to be displayed.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngRepeat">ngRepeat</a></td>
        <td><p>The <code>ngRepeat</code> directive instantiates a template once per item from a collection. Each template
instance gets its own scope, where the given loop variable is set to the current collection item,
and <code>$index</code> is set to the item index or key.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngShow">ngShow</a></td>
        <td><p>The <code>ngShow</code> directive shows or hides the given HTML element based on the expression
provided to the <code>ngShow</code> attribute. The element is shown or hidden by removing or adding
the <code>.ng-hide</code> CSS class onto the element. The <code>.ng-hide</code> CSS class is predefined
in AngularJS and sets the display style to none (using an !important flag).
For CSP mode please add <code>angular-csp.css</code> to your html file (see <a href="api/ng/directive/ngCsp">ngCsp</a>).</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngHide">ngHide</a></td>
        <td><p>The <code>ngHide</code> directive shows or hides the given HTML element based on the expression
provided to the <code>ngHide</code> attribute. The element is shown or hidden by removing or adding
the <code>ng-hide</code> CSS class onto the element. The <code>.ng-hide</code> CSS class is predefined
in AngularJS and sets the display style to none (using an !important flag).
For CSP mode please add <code>angular-csp.css</code> to your html file (see <a href="api/ng/directive/ngCsp">ngCsp</a>).</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngStyle">ngStyle</a></td>
        <td><p>The <code>ngStyle</code> directive allows you to set CSS style on an HTML element conditionally.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngSwitch">ngSwitch</a></td>
        <td><p>The <code>ngSwitch</code> directive is used to conditionally swap DOM structure on your template based on a scope expression.
Elements within <code>ngSwitch</code> but without <code>ngSwitchWhen</code> or <code>ngSwitchDefault</code> directives will be preserved at the location
as specified in the template.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngTransclude">ngTransclude</a></td>
        <td><p>Directive that marks the insertion point for the transcluded DOM of the nearest parent directive that uses transclusion.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/script">script</a></td>
        <td><p>Load the content of a <code>&lt;script&gt;</code> element into <a href="api/ng/service/$templateCache"><code>$templateCache</code></a>, so that the
template can be used by <a href="api/ng/directive/ngInclude"><code>ngInclude</code></a>,
<a href="api/ngRoute/directive/ngView"><code>ngView</code></a>, or <a href="guide/directive">directives</a>. The type of the
<code>&lt;script&gt;</code> element must be specified as <code>text/ng-template</code>, and a cache name for the template must be
assigned through the element&#39;s <code>id</code>, which can then be used as a directive&#39;s <code>templateUrl</code>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/select">select</a></td>
        <td><p>HTML <code>SELECT</code> element with angular data-binding.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngRequired">ngRequired</a></td>
        <td><p>ngRequired adds the required <a href="api/ng/type/ngModel.NgModelController#$validators"><code>validator</code></a> to <a href="api/ng/directive/ngModel"><code>ngModel</code></a>.
It is most often used for <a href="api/ng/directive/input"><code>input</code></a> and <a href="api/ng/directive/select"><code>select</code></a> controls, but can also be
applied to custom controls.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngPattern">ngPattern</a></td>
        <td><p>ngPattern adds the pattern <a href="api/ng/type/ngModel.NgModelController#$validators"><code>validator</code></a> to <a href="api/ng/directive/ngModel"><code>ngModel</code></a>.
It is most often used for text-based <a href="api/ng/directive/input"><code>input</code></a> controls, but can also be applied to custom text-based controls.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngMaxlength">ngMaxlength</a></td>
        <td><p>ngMaxlength adds the maxlength <a href="api/ng/type/ngModel.NgModelController#$validators"><code>validator</code></a> to <a href="api/ng/directive/ngModel"><code>ngModel</code></a>.
It is most often used for text-based <a href="api/ng/directive/input"><code>input</code></a> controls, but can also be applied to custom text-based controls.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/directive/ngMinlength">ngMinlength</a></td>
        <td><p>ngMinlength adds the minlength <a href="api/ng/type/ngModel.NgModelController#$validators"><code>validator</code></a> to <a href="api/ng/directive/ngModel"><code>ngModel</code></a>.
It is most often used for text-based <a href="api/ng/directive/input"><code>input</code></a> controls, but can also be applied to custom text-based controls.</p>
</td>
      </tr>
      
    </table>
  </div>
  
  <div>
    <h3 class="component-heading" id="object">Object</h3>
    <table class="definition-table">
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
      
      <tr>
        <td><a href="api/ng/object/angular.version">angular.version</a></td>
        <td><p>An object that contains information about the current AngularJS version.</p>
</td>
      </tr>
      
    </table>
  </div>
  
  <div>
    <h3 class="component-heading" id="type">Type</h3>
    <table class="definition-table">
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
      
      <tr>
        <td><a href="api/ng/type/angular.Module">angular.Module</a></td>
        <td><p>Interface for configuring angular <a href="api/ng/function/angular.module">modules</a>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/type/$cacheFactory.Cache">$cacheFactory.Cache</a></td>
        <td><p>A cache object used to store and retrieve data, primarily used by
<a href="api/ng/service/$http">$http</a> and the <a href="api/ng/directive/script">script</a> directive to cache
templates and other data.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/type/$compile.directive.Attributes">$compile.directive.Attributes</a></td>
        <td><p>A shared object between directive compile / linking functions which contains normalized DOM
element attributes. The values reflect current binding state <code>{{ }}</code>. The normalization is
needed since all of these are treated as equivalent in Angular:</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/type/form.FormController">form.FormController</a></td>
        <td><p><code>FormController</code> keeps track of all its controls and nested forms as well as the state of them,
such as being valid/invalid or dirty/pristine.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/type/ngModel.NgModelController">ngModel.NgModelController</a></td>
        <td><p><code>NgModelController</code> provides API for the <a href="api/ng/directive/ngModel"><code>ngModel</code></a> directive.
The controller contains services for data-binding, validation, CSS updates, and value formatting
and parsing. It purposefully does not contain any logic which deals with DOM rendering or
listening to DOM events.
Such DOM related logic should be provided by other directives which make use of
<code>NgModelController</code> for data-binding to control elements.
Angular provides this DOM logic for most <a href="api/ng/directive/input"><code>input</code></a> elements.
At the end of this page you can find a <a href="api/ng/type/ngModel.NgModelController#custom-control-example">custom control example</a> that uses <code>ngModelController</code> to bind to <code>contenteditable</code> elements.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/type/select.SelectController">select.SelectController</a></td>
        <td><p>The controller for the <code>&lt;select&gt;</code> directive. This provides support for reading
and writing the selected value(s) of the control and also coordinates dynamically
added <code>&lt;option&gt;</code> elements, perhaps by an <code>ngRepeat</code> directive.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/type/$rootScope.Scope">$rootScope.Scope</a></td>
        <td><p>A root scope can be retrieved using the <a href="api/ng/service/$rootScope">$rootScope</a> key from the
<a href="api/auto/service/$injector">$injector</a>. Child scopes are created using the
<a href="api/ng/type/$rootScope.Scope#$new">$new()</a> method. (Most scopes are created automatically when
compiled HTML template is executed.) See also the <a href="guide/scope">Scopes guide</a> for
an in-depth introduction and usage examples.</p>
</td>
      </tr>
      
    </table>
  </div>
  
  <div>
    <h3 class="component-heading" id="provider">Provider</h3>
    <table class="definition-table">
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
      
      <tr>
        <td><a href="api/ng/provider/$anchorScrollProvider">$anchorScrollProvider</a></td>
        <td><p>Use <code>$anchorScrollProvider</code> to disable automatic scrolling whenever
<a href="api/ng/service/$location#hash">$location.hash()</a> changes.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/provider/$animateProvider">$animateProvider</a></td>
        <td><p>Default implementation of $animate that doesn&#39;t perform any animations, instead just
synchronously performs DOM updates and resolves the returned runner promise.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/provider/$compileProvider">$compileProvider</a></td>
        <td></td>
      </tr>
      
      <tr>
        <td><a href="api/ng/provider/$controllerProvider">$controllerProvider</a></td>
        <td><p>The <a href="api/ng/service/$controller">$controller service</a> is used by Angular to create new
controllers.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/provider/$filterProvider">$filterProvider</a></td>
        <td><p>Filters are just functions which transform input to an output. However filters need to be
Dependency Injected. To achieve this a filter definition consists of a factory function which is
annotated with dependencies and is responsible for creating a filter function.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/provider/$httpProvider">$httpProvider</a></td>
        <td><p>Use <code>$httpProvider</code> to change the default behavior of the <a href="api/ng/service/$http">$http</a> service.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/provider/$interpolateProvider">$interpolateProvider</a></td>
        <td><p>Used for configuring the interpolation markup. Defaults to <code>{{</code> and <code>}}</code>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/provider/$locationProvider">$locationProvider</a></td>
        <td><p>Use the <code>$locationProvider</code> to configure how the application deep linking paths are stored.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/provider/$logProvider">$logProvider</a></td>
        <td><p>Use the <code>$logProvider</code> to configure how the application logs messages</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/provider/$parseProvider">$parseProvider</a></td>
        <td><p><code>$parseProvider</code> can be used for configuring the default behavior of the <a href="api/ng/service/$parse">$parse</a>
 service.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/provider/$rootScopeProvider">$rootScopeProvider</a></td>
        <td><p>Provider for the $rootScope service.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/provider/$sceDelegateProvider">$sceDelegateProvider</a></td>
        <td><p>The <code>$sceDelegateProvider</code> provider allows developers to configure the <a href="api/ng/service/$sceDelegate">$sceDelegate</a> service.  This allows one to get/set the whitelists and blacklists used to ensure
that the URLs used for sourcing Angular templates are safe.  Refer <a href="api/ng/provider/$sceDelegateProvider#resourceUrlWhitelist">$sceDelegateProvider.resourceUrlWhitelist</a> and
<a href="api/ng/provider/$sceDelegateProvider#resourceUrlBlacklist">$sceDelegateProvider.resourceUrlBlacklist</a></p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/provider/$sceProvider">$sceProvider</a></td>
        <td><p>The $sceProvider provider allows developers to configure the <a href="api/ng/service/$sce">$sce</a> service.</p>
<ul>
<li>enable/disable Strict Contextual Escaping (SCE) in a module</li>
<li>override the default implementation with a custom delegate</li>
</ul>
</td>
      </tr>
      
    </table>
  </div>
  
  <div>
    <h3 class="component-heading" id="service">Service</h3>
    <table class="definition-table">
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$anchorScroll">$anchorScroll</a></td>
        <td><p>When called, it scrolls to the element related to the specified <code>hash</code> or (if omitted) to the
current value of <a href="api/ng/service/$location#hash">$location.hash()</a>, according to the rules specified
in the
<a href="http://www.w3.org/html/wg/drafts/html/master/browsers.html#the-indicated-part-of-the-document">HTML5 spec</a>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$animate">$animate</a></td>
        <td><p>The $animate service exposes a series of DOM utility methods that provide support
for animation hooks. The default behavior is the application of DOM operations, however,
when an animation is detected (and animations are enabled), $animate will do the heavy lifting
to ensure that animation runs with the triggered DOM operation.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$animateCss">$animateCss</a></td>
        <td><p>This is the core version of <code>$animateCss</code>. By default, only when the <code>ngAnimate</code> is included,
then the <code>$animateCss</code> service will actually perform animations.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$cacheFactory">$cacheFactory</a></td>
        <td><p>Factory that constructs <a href="api/ng/type/$cacheFactory.Cache">Cache</a> objects and gives access to
them.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$templateCache">$templateCache</a></td>
        <td><p>The first time a template is used, it is loaded in the template cache for quick retrieval. You
can load templates directly into the cache in a <code>script</code> tag, or by consuming the
<code>$templateCache</code> service directly.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$compile">$compile</a></td>
        <td><p>Compiles an HTML string or DOM into a template and produces a template function, which
can then be used to link <a href="api/ng/type/$rootScope.Scope"><code>scope</code></a> and the template together.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$controller">$controller</a></td>
        <td><p><code>$controller</code> service is responsible for instantiating controllers.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$document">$document</a></td>
        <td><p>A <a href="api/ng/function/angular.element">jQuery or jqLite</a> wrapper for the browser&#39;s <code>window.document</code> object.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$exceptionHandler">$exceptionHandler</a></td>
        <td><p>Any uncaught exception in angular expressions is delegated to this service.
The default implementation simply delegates to <code>$log.error</code> which logs it into
the browser console.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$filter">$filter</a></td>
        <td><p>Filters are used for formatting data displayed to the user.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$httpParamSerializer">$httpParamSerializer</a></td>
        <td><p>Default <a href="api/ng/service/$http"><code>$http</code></a> params serializer that converts objects to strings
according to the following rules:</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$httpParamSerializerJQLike">$httpParamSerializerJQLike</a></td>
        <td><p>Alternative <a href="api/ng/service/$http"><code>$http</code></a> params serializer that follows
jQuery&#39;s <a href="http://api.jquery.com/jquery.param/"><code>param()</code></a> method logic.
The serializer will also sort the params alphabetically.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$http">$http</a></td>
        <td><p>The <code>$http</code> service is a core Angular service that facilitates communication with the remote
HTTP servers via the browser&#39;s <a href="https://developer.mozilla.org/en/xmlhttprequest">XMLHttpRequest</a>
object or via <a href="http://en.wikipedia.org/wiki/JSONP">JSONP</a>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$xhrFactory">$xhrFactory</a></td>
        <td><p>Factory function used to create XMLHttpRequest objects.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$httpBackend">$httpBackend</a></td>
        <td><p>HTTP backend used by the <a href="api/ng/service/$http">service</a> that delegates to
XMLHttpRequest object or JSONP and deals with browser incompatibilities.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$interpolate">$interpolate</a></td>
        <td><p>Compiles a string with markup into an interpolation function. This service is used by the
HTML <a href="api/ng/service/$compile">$compile</a> service for data binding. See
<a href="api/ng/provider/$interpolateProvider">$interpolateProvider</a> for configuring the
interpolation markup.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$interval">$interval</a></td>
        <td><p>Angular&#39;s wrapper for <code>window.setInterval</code>. The <code>fn</code> function is executed every <code>delay</code>
milliseconds.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$locale">$locale</a></td>
        <td><p>$locale service provides localization rules for various Angular components. As of right now the
only public api is:</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$location">$location</a></td>
        <td><p>The $location service parses the URL in the browser address bar (based on the
<a href="https://developer.mozilla.org/en/window.location">window.location</a>) and makes the URL
available to your application. Changes to the URL in the address bar are reflected into
$location service and changes to $location are reflected into the browser address bar.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$log">$log</a></td>
        <td><p>Simple service for logging. Default implementation safely writes the message
into the browser&#39;s console (if present).</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$parse">$parse</a></td>
        <td><p>Converts Angular <a href="guide/expression">expression</a> into a function.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$q">$q</a></td>
        <td><p>A service that helps you run functions asynchronously, and use their return values (or exceptions)
when they are done processing.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$rootElement">$rootElement</a></td>
        <td><p>The root element of Angular application. This is either the element where <a href="api/ng/directive/ngApp">ngApp</a> was declared or the element passed into
<a href="api/ng/function/angular.bootstrap"><code>angular.bootstrap</code></a>. The element represents the root element of application. It is also the
location where the application&#39;s <a href="api/auto/service/$injector">$injector</a> service gets
published, and can be retrieved using <code>$rootElement.injector()</code>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$rootScope">$rootScope</a></td>
        <td><p>Every application has a single root <a href="api/ng/type/$rootScope.Scope">scope</a>.
All other scopes are descendant scopes of the root scope. Scopes provide separation
between the model and the view, via a mechanism for watching the model for changes.
They also provide event emission/broadcast and subscription facility. See the
<a href="guide/scope">developer guide on scopes</a>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$sceDelegate">$sceDelegate</a></td>
        <td><p><code>$sceDelegate</code> is a service that is used by the <code>$sce</code> service to provide <a href="api/ng/service/$sce">Strict
Contextual Escaping (SCE)</a> services to AngularJS.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$sce">$sce</a></td>
        <td><p><code>$sce</code> is a service that provides Strict Contextual Escaping services to AngularJS.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$templateRequest">$templateRequest</a></td>
        <td><p>The <code>$templateRequest</code> service runs security checks then downloads the provided template using
<code>$http</code> and, upon success, stores the contents inside of <code>$templateCache</code>. If the HTTP request
fails or the response data of the HTTP request is empty, a <code>$compile</code> error will be thrown (the
exception can be thwarted by setting the 2nd parameter of the function to true). Note that the
contents of <code>$templateCache</code> are trusted, so the call to <code>$sce.getTrustedUrl(tpl)</code> is omitted
when <code>tpl</code> is of type string and <code>$templateCache</code> has the matching entry.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$timeout">$timeout</a></td>
        <td><p>Angular&#39;s wrapper for <code>window.setTimeout</code>. The <code>fn</code> function is wrapped into a try/catch
block and delegates any exceptions to
<a href="api/ng/service/$exceptionHandler">$exceptionHandler</a> service.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/service/$window">$window</a></td>
        <td><p>A reference to the browser&#39;s <code>window</code> object. While <code>window</code>
is globally available in JavaScript, it causes testability problems, because
it is a global variable. In angular we always refer to it through the
<code>$window</code> service, so it may be overridden, removed or mocked for testing.</p>
</td>
      </tr>
      
    </table>
  </div>
  
  <div>
    <h3 class="component-heading" id="input">Input</h3>
    <table class="definition-table">
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
      
      <tr>
        <td><a href="api/ng/input/input[text]">input[text]</a></td>
        <td><p>Standard HTML text input with angular data binding, inherited by most of the <code>input</code> elements.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/input/input[date]">input[date]</a></td>
        <td><p>Input with date validation and transformation. In browsers that do not yet support
the HTML5 date input, a text element will be used. In that case, text must be entered in a valid ISO-8601
date format (yyyy-MM-dd), for example: <code>2009-01-06</code>. Since many
modern browsers do not yet support this input type, it is important to provide cues to users on the
expected input format via a placeholder or label.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/input/input[datetime-local]">input[datetime-local]</a></td>
        <td><p>Input with datetime validation and transformation. In browsers that do not yet support
the HTML5 date input, a text element will be used. In that case, the text must be entered in a valid ISO-8601
local datetime format (yyyy-MM-ddTHH:mm:ss), for example: <code>2010-12-28T14:57:00</code>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/input/input[time]">input[time]</a></td>
        <td><p>Input with time validation and transformation. In browsers that do not yet support
the HTML5 date input, a text element will be used. In that case, the text must be entered in a valid ISO-8601
local time format (HH:mm:ss), for example: <code>14:57:00</code>. Model must be a Date object. This binding will always output a
Date object to the model of January 1, 1970, or local date <code>new Date(1970, 0, 1, HH, mm, ss)</code>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/input/input[week]">input[week]</a></td>
        <td><p>Input with week-of-the-year validation and transformation to Date. In browsers that do not yet support
the HTML5 week input, a text element will be used. In that case, the text must be entered in a valid ISO-8601
week format (yyyy-W##), for example: <code>2013-W02</code>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/input/input[month]">input[month]</a></td>
        <td><p>Input with month validation and transformation. In browsers that do not yet support
the HTML5 month input, a text element will be used. In that case, the text must be entered in a valid ISO-8601
month format (yyyy-MM), for example: <code>2009-01</code>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/input/input[number]">input[number]</a></td>
        <td><p>Text input with number validation and transformation. Sets the <code>number</code> validation
error if not a valid number.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/input/input[url]">input[url]</a></td>
        <td><p>Text input with URL validation. Sets the <code>url</code> validation error key if the content is not a
valid URL.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/input/input[email]">input[email]</a></td>
        <td><p>Text input with email validation. Sets the <code>email</code> validation error key if not a valid email
address.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/input/input[radio]">input[radio]</a></td>
        <td><p>HTML radio button.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/input/input[checkbox]">input[checkbox]</a></td>
        <td><p>HTML checkbox.</p>
</td>
      </tr>
      
    </table>
  </div>
  
  <div>
    <h3 class="component-heading" id="filter">Filter</h3>
    <table class="definition-table">
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
      
      <tr>
        <td><a href="api/ng/filter/filter">filter</a></td>
        <td><p>Selects a subset of items from <code>array</code> and returns it as a new array.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/filter/currency">currency</a></td>
        <td><p>Formats a number as a currency (ie $1,234.56). When no currency symbol is provided, default
symbol for current locale is used.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/filter/number">number</a></td>
        <td><p>Formats a number as text.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/filter/date">date</a></td>
        <td><p>Formats <code>date</code> to a string based on the requested <code>format</code>.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/filter/json">json</a></td>
        <td><p>Allows you to convert a JavaScript object into JSON string.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/filter/lowercase">lowercase</a></td>
        <td><p>Converts string to lowercase.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/filter/uppercase">uppercase</a></td>
        <td><p>Converts string to uppercase.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/filter/limitTo">limitTo</a></td>
        <td><p>Creates a new array or string containing only a specified number of elements. The elements
are taken from either the beginning or the end of the source array, string or number, as specified by
the value and sign (positive or negative) of <code>limit</code>. If a number is used as input, it is
converted to a string.</p>
</td>
      </tr>
      
      <tr>
        <td><a href="api/ng/filter/orderBy">orderBy</a></td>
        <td><p>Orders a specified <code>array</code> by the <code>expression</code> predicate. It is ordered alphabetically
for strings and numerically for numbers. Note: if you notice numbers are not being sorted
as expected, make sure they are actually being saved as numbers and not strings.</p>
</td>
      </tr>
      
    </table>
  </div>
  
</div>




