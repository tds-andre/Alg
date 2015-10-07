var app = app || {};
(function ($) {

	'use strict';	

	app.FileCreateUpdateView = Backbone.View.extend({

		// --------------------------------------------------------------------------------- //
		// Variables ----------------------------------------------------------------------- //
		// --------------------------------------------------------------------------------- //
		
		events: {
			'click  .js-file-container'  : 'browseClicked',
			'change .js-file'		     : 'fileSelected',
			'click  .js-message-link'   : 'linkClicked'
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
					app.collections.files.process(self.model, {success: function(){
						
						self.trigger("ready");
						self.showConclusion();

					}});
					self.showProcessing();
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

		showProcessing: function(){
			this.uploadView.$el.fadeOut();
			this.uploadView.remove();
			$(".js-processing", this.$el).fadeIn();
		},
		showConclusion: function(){
			$(".js-image", this.$el).hide();
			$(".js-message", this.$el).html("Processamento concluído.")
			$(".js-message-ad", this.$el).html("");
			$(".js-message-ad-1", this.$el).html("Configure o arquivo ");
			$(".js-message-link", this.$el).html("aqui");
		}

		
	});
})(jQuery);