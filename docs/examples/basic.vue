<!--------------------------------------------------------------------------------------------------------------------->
<!-- basic.vue                                                                                                         -->
<!--------------------------------------------------------------------------------------------------------------------->

<template>
    <div id="basic-example">
		<h3>Basic Example</h3>
		<p>
			Just a simple demonstration of the most basic usage.
		</p>
		<div class="row">
			<div class="col-md-6">
				<div class="card">
					<div class="card-header">
						Editor (<code>'text/javascript'</code>)
					</div>
					<codemirror v-model="code" :options="options"></codemirror>
				</div>
			</div>
			<div class="col-md-6">
				<div class="card">
					<div class="card-header">
						Model
					</div>
					<div class="card-block" style="padding: 10px; padding-top: 4px;">
						<pre><code>{{ code }}</code></pre>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>

<!--------------------------------------------------------------------------------------------------------------------->

<script>
    //------------------------------------------------------------------------------------------------------------------

	const { CodeMirror } = require('../../index.js');

	// CodeMirror mode
	require('codemirror/mode/javascript/javascript');

    //------------------------------------------------------------------------------------------------------------------

    module.exports = {
		components: {
			codemirror: CodeMirror
		},
        data()
        {
            return {
				code: `var foo = "apples";`,
				options: {
					tabSize: 4,
					mode: 'text/javascript',
					lineNumbers: true,
					line: true,
				},

            };
        }
    }
</script>

<!--------------------------------------------------------------------------------------------------------------------->
