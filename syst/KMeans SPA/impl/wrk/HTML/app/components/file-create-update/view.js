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
		
		defaults: {
			
		},	

		template: _.template($('#file-create-update-template').html()),

		// -------------------------------------------------------------------------------- //
		// Core --------------------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		initialize: function(){
			this.options = {};
			this.uploadView = null;
			
		},		

		render: function () {
			var
				self =this;
			this.$el.html(this.template());
			this.uploadView = new app.FileUploadView({el: $(".js-upload-el", this.$el)[0]});
			this.uploadView.start({
				url: app.config.serverUrl + "/file/" + this.model.idd + "/upload", 
				success: function(view){
					self.trigger("create");
				}
			})
			return this;			
		},

		start: function(options){
			var
				self = this;
			$.extend(true, this.options, this.defaults, options);
			this.model = new app.domain.File();			
			app.collections.files.persist(this.model, {success: function(){self.render()}});		
			
		},

		// -------------------------------------------------------------------------------- //
		// View callbacks ----------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //		

		// -------------------------------------------------------------------------------- //
		// Other callbacks ---------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //

		// -------------------------------------------------------------------------------- //
		// Internal methods --------------------------------------------------------------- //
		// -------------------------------------------------------------------------------- //
		
	});
})(jQuery);