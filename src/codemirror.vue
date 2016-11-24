<!--------------------------------------------------------------------------------------------------------------------->
<!-- CodeMirror Component                                                                                            -->
<!--------------------------------------------------------------------------------------------------------------------->

<template>
	<textarea></textarea>
</template>

<!--------------------------------------------------------------------------------------------------------------------->

<script>
	//------------------------------------------------------------------------------------------------------------------

	var CodeMirror = require('codemirror/lib/codemirror');
	var CodeMirrorMetas = require('./metas');

	//------------------------------------------------------------------------------------------------------------------

	module.exports = {
		data()
		{
			return {
				content: '',
				unseenLines: [],
			};
		},
		props: {
			code: String,
			value: String,
			markerLine: {
				type: Array,
				default: function(){ return []; }
			},
			marker: {
				type: Function,
				default: function()
				{
					var marker = document.createElement('div');
					marker.style.color = '#822';
					marker.innerHTML = '●';
					return marker;
				}
			},
			markerUnseenLines: {
				type: Function,
				default: function()
				{
					var marker = document.createElement('div');
					marker.style.color = '#FFF';
					marker.innerHTML = '●';
					return marker;
				}
			},
			options: {
				type: Object,
				default: function()
				{
					return {
						styleActiveLine: true,
						lineNumbers: true,
						mode: 'text/javascript',
						lineWrapping: true
					};
				}
			},
		},
		created()
		{
			var error;
			this.options = this.options || {};

			// Language handling
			var language = this.options.mode || 'text/javascript';
			if(typeof language == 'string')
			{
				try
				{
					language = CodeMirrorMetas.findModeByMIME(language).mode
				}
				catch(exp)
				{
					error = new Error(`Configuration error: The CodeMirror language mode '${ language }' is configured incorrectly, or it is not supported. Did you forget to require it before VueMirror?`);
					error.innerError = exp;

					throw error;
				} // end try/catch
			}
			else
			{
				try
				{
					language = CodeMirrorMetas.findModeByName(language.name).mode
				}
				catch(exp)
				{
					error = new Error(`Configuration error: The CodeMirror language mode '${ language }' is configured incorrectly, or it is not supported. Did you forget to require it before VueMirror?`);
					error.innerError = exp;

					throw error;
				}
			} // end if
		},
		ready()
		{
			this.editor = CodeMirror.fromTextArea(this.$el, this.options);
			this.editor.setValue(this.code || this.value || this.content);

			this.editor.on('change', (cm) =>
			{
				this.content = cm.getValue();
				this.code = cm.getValue();
			});
		},
		mounted()
		{
			this.editor = CodeMirror.fromTextArea(this.$el, this.options);
			this.editor.setValue(this.code || this.value || this.content);

			this.editor.on('change', (cm, changeObj) =>
			{
				this.content = cm.getValue();
				if(this.$emit)
				{
					this.$emit('changed', this.content);
					this.$emit('input', this.content);
				} // end if
			});

			this.editor.on("gutterClick", (cm, n) =>
			{
				this.gutterMarkersByClicked(n);
			});

			if(this.unseenLines)
			{
				this.gutterMarkers();
			} // end if
		},
		watch: {
			code(newVal, oldVal)
			{
				const editor_value = this.editor.getValue();

				if(newVal !== editor_value)
				{
					var scrollInfo = this.editor.getScrollInfo();
					this.editor.setValue(newVal);
					this.content = newVal;
					this.editor.scrollTo(scrollInfo.left, scrollInfo.top);
				} // end if

				if(this.unseenLines)
				{
					this.gutterMarkers()
				} // end if
			},
			value(newVal, oldVal)
			{
				this.unseenLines = [];
				const editor_value = this.editor.getValue();

				if (newVal !== editor_value)
				{
					var scrollInfo = this.editor.getScrollInfo();
					this.editor.setValue(newVal);
					this.content = newVal;
					this.editor.scrollTo(scrollInfo.left, scrollInfo.top);
				} // end if

				if(this.unseenLines)
				{
					this.gutterMarkers()
				} // end if
			}
		},
		methods: {
			gutterMarkers()
			{
				this.unseenLines.forEach((line) =>
				{
					var info = this.editor.lineInfo(line);
					this.editor.setGutterMarker(line, "breakpoints", info.gutterMarkers ? null : this.markerUnseenLines());
				});
			},
			gutterMarkersByClicked(line)
			{
				var info = this.editor.lineInfo(line);
				this.editor.setGutterMarker(line, "breakpoints",  info.gutterMarkers ? null : this.marker());
			}
		}
	}
</script>

<!--------------------------------------------------------------------------------------------------------------------->

<style>
	.CodeMirror,
	.CodeMirror pre {
		font-family: Hack, Menlo, Monaco, Consolas, "Courier New", monospace !important;
		font-size: 0.85rem;
		/*padding: 0 20px !important; !* Horizontal padding of content *!*/
	}
</style>

<!--------------------------------------------------------------------------------------------------------------------->
