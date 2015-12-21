Template.rfEditorFooter.events({
	'click .btn-save': function(evnt) {
		alert('save');
	},
	'click .btn-export': function(evnt) {
		rfToggleOption('export');
	},
	'click .btn-view': function(evnt) {
		rfToggleOption('view');
	},
	'click .btn-mode': function(evnt) {
		rfToggleOption('mode');	
	},
	'click .btn-hide': function(evnt) {
		alert('hide');	
	},

	
});

function rfToggleOption(to) {
	$('#rf-editor-options').toggleClass('hide');
	$('#rf-editor-options').find('li').addClass('hide');
	$('#rf-editor-options').find('#rf-' + to).removeClass('hide');  
}