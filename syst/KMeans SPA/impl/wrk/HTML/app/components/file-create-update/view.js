var app = app || {};
(function ($) {

	'use strict';	

	app.FileCreateUpdateView = Backbone.View.extend({

		// --------------------------------------------------------------------------------- //
		// Variables ----------------------------------------------------------------------- //
		// --------------------------------------------------------------------------------- //
		
		events: {
			'click  .js-file-container'  : 'browseClicked',
			'change .js-file'		     : 'fileSelected'
		},		
		
		options: {
			
		},	

		template: _.template($('#file-create-update-template').html()),

		// -------------------------------------------------------------------------------- //
		// Core --------------------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		initialize: function(){
			
		},		

		render: function () {
			this.$el.html(this.template());
			
			return this;			
		},

		start: function(options){
			this.options = _.extend(this.options, options);
			this.render();
			return this;		
		},

		// -------------------------------------------------------------------------------- //
		// View callbacks ----------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		browseClicked: function(ev){
			
			$(".js-file", this.$el)[0].click();
		},

		fileSelected: function(ev){
			
			var
				form = $(ev.currentTarget).parents("form")[0],
				formData = new FormData(form),
				ss =  $(ev.currentTarget).val().split("\\");
				name = ss[ss.length-1];
			if(app.isDefined(name))
				this.updateFilename(name);
			this.uploadFile(name,formData);
				
			
		},

		// -------------------------------------------------------------------------------- //
		// Other callbacks ---------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		// -------------------------------------------------------------------------------- //
		// Internal methods --------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //
		updateFilename: function(filename){
			$(".js-file-name", this.$el).val(filename)
		}
	});
})(jQuery);