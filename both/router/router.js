// MAIN ROUTE
FlowRouter.route('/', {
	action: function() {
		FlowLayout.render('layout_editor')
	}
});

// EDITOR ROUTE
FlowRouter.route('/editor', {
	action: function() {
		FlowLayout.render('layout_editor')
	}
});