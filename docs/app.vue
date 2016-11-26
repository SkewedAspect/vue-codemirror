<!--------------------------------------------------------------------------------------------------------------------->
<!-- app.vue                                                                                                         -->
<!--------------------------------------------------------------------------------------------------------------------->

<template>
    <div id="app">
		<nav class="navbar navbar-fixed-top navbar-dark bg-vue">
			<a class="navbar-brand" href="#">
				VueMirror
				<small class="text-muted">v{{ package.version }}</small>
			</a>
			<ul class="nav navbar-nav float-right">
				<li class="nav-item active">
					<a class="nav-link" href="https://github.com/SkewedAspect/vuemirror">
						<i class="fa fa-github"></i>
						GitHub
					</a>
				</li>
            </ul>
		</nav>
		<div class="container-fluid">
			<p>
				VueMirror is a <a href="https://codemirror.net/">CodeMirror</a> component for VueJS 2.X. It is based off
				work from <a href="https://github.com/surmon-china/vue-codemirror">surmon-china/vue-codemirror</a>
				but adds browserify support, a Grunt build system, and cleans up the code a bit.
			</p>

			<h3>Installation</h3>

			<p>
				This component depends on CodeMirror >= 5.X and Vue >= 2.X. You must have both installed in order to use
				the component.
			</p>

			<p>
				Install them through npm:
            </p>

			<div class="card card-block">
				<pre><code>$ npm install --save vuemirror codemirror</code></pre>
			</div>

			<h3>Getting Started</h3>

			<p>
				You will need to include the CodeMirror css. How you do so depends heavily on your project. The
				CodeMirror package includes the required files in `codemirror/lib/codemirror.css`. You should be able
				to do something similar to the following:
			</p>

			<h5>Require the CSS <small class="text-muted">(This does not work with Browserify)</small></h5>

			<div class="card card-block">
                <pre><code>require('codemirror/lib/codemirror.css');</code></pre>
			</div>

			<h5>Include the CSS in the HTML</h5>

			<div class="card card-block">
                <pre><code>&lt;link rel="stylesheet" href="/node_modules/codemirror/lib/codemirror.css"&gt;</code></pre>
			</div>

			<p>
				Once you've done that, you will also need to require all addons and modes you wish to use. They are
				located in the CodeMirror package under `codemirror/addon` and `codemirror/modes`. You will need to
				include at least one mode.
			</p>

			<p>After that, simply include the VueMirror component and use it.</p>

			<div class="examples">
				<basic-example></basic-example>
			</div>
		</div>
    </div>
</template>

<!--------------------------------------------------------------------------------------------------------------------->

<style>
    #app {
		margin-top: 70px;
    }

	.bg-vue {
		background-color: #4fc08d;
	}

	.bg-vue .text-muted {
		color: #b2d8bd;
	}

	.float-right {
		float: right;
	}

	pre {
		margin-bottom: 0;
	}

	code {
		font-size: .75em;
	}

	.examples .card {
		height: 100%;
	}

	.examples .card code {
		font-family: Hack, Menlo, Monaco, Consolas, "Courier New", monospace !important;
		font-size: .85rem;
	}
</style>

<!--------------------------------------------------------------------------------------------------------------------->

<script>
    //------------------------------------------------------------------------------------------------------------------

	const pkg = require('../package');

	// Components
	const BasicExample = require('./examples/basic.vue');

    //------------------------------------------------------------------------------------------------------------------

    module.exports = {
		components: {
			basicExample: BasicExample
		},
        data()
        {
            return {
				package: pkg
            };
        }
    };
</script>

<!--------------------------------------------------------------------------------------------------------------------->
