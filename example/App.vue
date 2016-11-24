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
			<basic-example></basic-example>
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

	code {
		font-size: .75em;
	}

	.card {
		height: 100%;
	}

	.card code {
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
