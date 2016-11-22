# VueMirror

VueMirror is a [CodeMirror][codemirror] component for VueJS 2.X. It was forked from [surmon-china/vue-codemirror][vue-codemirror] to add browserify support, and clean up the code a bit.

[codemirror]: https://codemirror.net/
[vue-codemirror]: https://github.com/surmon-china/vue-codemirror

-----

Old ReadMe

-----

# Example

[Demo Page](https://surmon-china.github.io/vue-codemirror)


# Use Setup


### Install vue-codemirror

``` bash
npm install vue-codemirror --save
```

### Vue use

``` javascript
// import with ES6
import Vue from 'vue'
// ...
import CodeMirror from 'vue-codemirror'


// require with Webpack/Node.js
var Vue = require('vue')
// ...
var CodeMirror = require('vue-codemirror')


// use
Vue.use(CodeMirror)


// --------------------------------------


// or use with component(ES6)
import Vue from 'vue'
// ...
import { codemirror } from 'vue-codemirror'

// use
export default {
  components: {
    codemirror
  }
}
```


### Use in components

``` html
<codemirror></codemirror>


<!-- component data bind and config in Vue.js1.X -->
<codemirror :code="code" :options="editorOption"></codemirror>
<!-- Bidirectional data binding in Vue.js1.X -->
<codemirror :code.sync="code" :options="editorOption"></codemirror>


<!-- component data bind and config in Vue.js2.X -->
<codemirror :code="code" :options="editorOption"></codemirror>
<!-- Bidirectional data binding in Vue.js2.X -->
<codemirror v-model="code" :options="editorOption"></codemirror>
<!-- or -->
<!-- If you need to manually control the data synchronization, you can monitor the code change event like this -->
<codemirror :code="code" :options="editorOption" @changed="codeChange"></codemirror>
```


``` javascript
// editor option example:
export default {
  data () {
    return {
      code: 'const a = 10',
      editorOption: {
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        ...
      }
    }
  },
  // If you need to manually control the data synchronization, parent component needs to explicitly emit an event instead of relying on implicit binding
  methods: {
    codeChange(newCode) {
      console.log(newCode)
      this.code = newCode
    }
  }
}

// editorOption mode types:

// string mode
mode: 'text/javascript'

// object mode
mode: {
  name: 'javascript',
  json: true
}
```

``` html
<!-- component config example 2 (Vue.js1.X) -->
<codemirror :code.sync="css" :options="{ tabSize: 2, mode: 'text/css' }"></codemirror>
```

``` javascript
data () {
  return {
    css: '.class { display: block }'
  }
}
```


# More Config

[Code example](https://github.com/surmon-china/vue-codemirror/tree/master/example)

[Codemirror config APIs](http://codemirror.net/doc/manual.html#config)

[Codemirror themes](http://codemirror.net/demo/theme.html)

[Codemirror language modes](http://codemirror.net/mode/) (MIME types defined)
