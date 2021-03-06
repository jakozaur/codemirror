Template.CodeMirror.rendered = function() {
	var options = this.data.options || { lineNumbers: true };
	var textarea = this.find("textarea");
	var editor = CodeMirror.fromTextArea(textarea, options);

	editor.on("change", function(doc) {
		textarea.value = doc.getValue();
	});

  if (this.data.reactiveVar) {
    Tracker.autorun(function () {
      if (!editor.hasFocus()) {
        editor.setValue(Session.get(this.data.reactiveVar));
      }
    });
  }
};

Template.CodeMirror.helpers({
	"editorId": function() {
		return this.id || "code-mirror-textarea";
	},

	"editorName": function() {
		return this.name || "code-mirror-textarea";
	}
});
