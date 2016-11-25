# VueMirror

VueMirror is a [CodeMirror][codemirror] component for VueJS 2.X. It is based off work from
[surmon-china/vue-codemirror][vue-codemirror] but I've added browserify support, a Grunt build system, and cleaned up
the code a bit.

[codemirror]: https://codemirror.net/
[vue-codemirror]: https://github.com/surmon-china/vue-codemirror

## Installation

This component depends on CodeMirror >= 5.X and Vue >= 2.X. You must have both installed in order to use the component.

Install them through npm:

```bash
$ npm install --save vuemirror codemirror
```

## Getting Started

You will need to include the CodeMirror css. How you do so depends heavily on your project. The CodeMirror package
includes the required files in `codemirror/lib/codemirror.css`. You should be able to do something similar to the
following:

**Require the CSS** _(This does not work with Browserify)_

```javascript
require('codemirror/lib/codemirror.css');
```

**Include the CSS in the HTML**

```html
<link rel="stylesheet" href="/node_modules/codemirror/lib/codemirror.css">
```

Once you've done that, you will also need to require all addons and modes you wish to use. They are located in the
CodeMirror package under `codemirror/addon` and `codemirror/modes`. You will need to include at least one mode.

After that, simply include the VueMirror component and use it.

### Basic Example

```html
<template>
	<div id="example">
		<codemirror v-model="code" :options="editorOptions"></codemirror>
	</div>
</template>
<script>
	import 'codemirror/modes/javascript/javascript';
	import { VueMirror } from 'vuemirror';

	export default {
		components: {
			codemirror: VueMirror
		},
		data()
		{
			return {
				code: "const foo = 'apples';"
				editorOptions: {
					mode: "text/javascript"
				}
			};
		}
	}
</script>
```

## CodeMirror Documentation

* [Codemirror config APIs](http://codemirror.net/doc/manual.html#config)
* [Codemirror themes](http://codemirror.net/demo/theme.html)
* [Codemirror language modes](http://codemirror.net/mode/) (MIME types defined)
